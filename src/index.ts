import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

type R2Bucket = any
type AiBinding = any

interface Env {
  CHECKLIST_BUCKET: R2Bucket
  AI: AiBinding
}

interface TodoItem {
  id: string
  text: string
  category: string
  createdAt: string
  creatorId: string
  updatedAt?: string
}

const app = new Hono<{ Bindings: Env }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Get all todos
app.get('/api/todos', async (c) => {
  try {
    const object = await c.env.CHECKLIST_BUCKET.get('todos.json')
    if (!object) {
      return c.json({ todos: [] })
    }
    const data = await object.text()
    return c.json(JSON.parse(data))
  } catch (error) {
    console.error('Error fetching todos:', error)
    return c.json({ todos: [] })
  }
})

// Add a new todo
app.post('/api/todos', async (c) => {
  try {
    const body = await c.req.json()
    const newTodo = body as TodoItem
    
    // Get existing todos
    const object = await c.env.CHECKLIST_BUCKET.get('todos.json')
    let todos: TodoItem[] = []
    if (object) {
      const data = await object.text()
      const parsed = JSON.parse(data)
      todos = parsed.todos || []
    }
    
    // Add new todo
    todos.push(newTodo)
    
    // Save back to R2
    await c.env.CHECKLIST_BUCKET.put('todos.json', JSON.stringify({ todos }))
    
    return c.json({ success: true, todo: newTodo })
  } catch (error) {
    console.error('Error adding todo:', error)
    return c.json({ success: false, error: 'Failed to add todo' }, 500)
  }
})

// Bulk add todos (for loading defaults)
app.post('/api/todos/bulk', async (c) => {
  try {
    const body = await c.req.json()
    const newTodos = body.todos as TodoItem[]
    
    // Get existing todos
    const object = await c.env.CHECKLIST_BUCKET.get('todos.json')
    let todos: TodoItem[] = []
    if (object) {
      const data = await object.text()
      const parsed = JSON.parse(data)
      todos = parsed.todos || []
    }
    
    // Add all new todos
    todos.push(...newTodos)
    
    // Save back to R2
    await c.env.CHECKLIST_BUCKET.put('todos.json', JSON.stringify({ todos }))
    
    return c.json({ success: true, count: newTodos.length })
  } catch (error) {
    console.error('Error bulk adding todos:', error)
    return c.json({ success: false, error: 'Failed to bulk add todos' }, 500)
  }
})

// Update a todo
app.put('/api/todos/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const body = await c.req.json()
    const updates = body as Partial<TodoItem>
    
    // Get existing todos
    const object = await c.env.CHECKLIST_BUCKET.get('todos.json')
    if (!object) {
      return c.json({ success: false, error: 'No todos found' }, 404)
    }
    
    const data = await object.text()
    const parsed = JSON.parse(data)
    let todos: TodoItem[] = parsed.todos || []
    
    // Find and update todo
    const index = todos.findIndex(t => t.id === id)
    if (index === -1) {
      return c.json({ success: false, error: 'Todo not found' }, 404)
    }
    
    todos[index] = { ...todos[index], ...updates, updatedAt: new Date().toISOString() }
    
    // Save back to R2
    await c.env.CHECKLIST_BUCKET.put('todos.json', JSON.stringify({ todos }))
    
    return c.json({ success: true, todo: todos[index] })
  } catch (error) {
    console.error('Error updating todo:', error)
    return c.json({ success: false, error: 'Failed to update todo' }, 500)
  }
})

// Delete a todo
app.delete('/api/todos/:id', async (c) => {
  try {
    const id = c.req.param('id')
    
    // Get existing todos
    const object = await c.env.CHECKLIST_BUCKET.get('todos.json')
    if (!object) {
      return c.json({ success: false, error: 'No todos found' }, 404)
    }
    
    const data = await object.text()
    const parsed = JSON.parse(data)
    let todos: TodoItem[] = parsed.todos || []
    
    // Filter out the todo
    todos = todos.filter(t => t.id !== id)
    
    // Save back to R2
    await c.env.CHECKLIST_BUCKET.put('todos.json', JSON.stringify({ todos }))
    
    return c.json({ success: true })
  } catch (error) {
    console.error('Error deleting todo:', error)
    return c.json({ success: false, error: 'Failed to delete todo' }, 500)
  }
})

// Clear all todos
app.delete('/api/todos', async (c) => {
  try {
    await c.env.CHECKLIST_BUCKET.put('todos.json', JSON.stringify({ todos: [] }))
    return c.json({ success: true })
  } catch (error) {
    console.error('Error clearing todos:', error)
    return c.json({ success: false, error: 'Failed to clear todos' }, 500)
  }
})

// Generate AI-powered checklist
app.post('/api/generate-checklist', async (c) => {
  try {
    const body = await c.req.json()
    const { projectType, industry, teamSize, techStack, compliance, additionalContext } = body

    const prompt = `You are a quality assurance expert. Generate a comprehensive quality checklist for the following project:

Project Type: ${projectType || 'General software project'}
Industry: ${industry || 'General'}
Team Size: ${teamSize || 'Not specified'}
Tech Stack: ${techStack || 'Not specified'}
Compliance Requirements: ${compliance || 'None specified'}
Additional Context: ${additionalContext || 'None'}

Generate 25-35 specific, actionable quality standards organized into relevant categories. Each item should be:
- Specific and measurable
- Relevant to the project context
- Actionable (something the team can verify)

Return ONLY a valid JSON array with this exact structure (no markdown, no explanations):
[
  {"category": "Category Name", "text": "Specific quality standard"},
  {"category": "Category Name", "text": "Another quality standard"}
]

Categories should be relevant to the project (e.g., Code Review, Testing, Security, Performance, Accessibility, Compliance, Documentation, etc.)`

    let aiResponse
    try {
      aiResponse = await c.env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          { role: 'system', content: 'You are a quality assurance expert who generates structured JSON checklists.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 2048
      })
    } catch (aiError) {
      console.error('AI API Error:', aiError)
      return c.json({ 
        success: false, 
        error: 'AI service error: ' + (aiError.message || 'Unknown error')
      }, 500)
    }

    let items = []
    try {
      console.log('AI Response:', JSON.stringify(aiResponse))
      const responseText = aiResponse.response || aiResponse.result?.response || JSON.stringify(aiResponse)
      console.log('Response text:', responseText)
      
      // Extract JSON array from response
      const jsonMatch = responseText.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        let jsonText = jsonMatch[0]
        
        // Handle truncated JSON by attempting to close incomplete objects/arrays
        try {
          items = JSON.parse(jsonText)
        } catch (e) {
          // Try to fix truncated JSON by closing incomplete strings and objects
          console.log('Attempting to fix truncated JSON...')
          
          // Find the last complete item before truncation
          const lastCompleteMatch = jsonText.match(/\{[^}]*\}(?=\s*,?\s*\{|\s*\])/g)
          if (lastCompleteMatch && lastCompleteMatch.length > 0) {
            // Reconstruct with only complete items
            jsonText = '[' + lastCompleteMatch.join(',') + ']'
            items = JSON.parse(jsonText)
            console.log(`Recovered ${items.length} complete items from truncated response`)
          } else {
            throw e
          }
        }
      } else {
        items = JSON.parse(responseText)
      }
      
      if (!Array.isArray(items) || items.length === 0) {
        throw new Error('Invalid items format or no items generated')
      }
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError)
      console.error('Raw response:', aiResponse)
      return c.json({ 
        success: false, 
        error: 'Failed to parse AI response',
        details: String(parseError),
        rawResponse: aiResponse 
      }, 500)
    }

    return c.json({ success: true, items })
  } catch (error) {
    console.error('Error generating checklist:', error)
    return c.json({ 
      success: false, 
      error: error.message || 'Failed to generate checklist'
    }, 500)
  }
})

// Serve static files for all other routes
app.use('/*', serveStatic())

export default app 