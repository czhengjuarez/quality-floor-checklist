import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

type R2Bucket = any

interface Env {
  CHECKLIST_BUCKET: R2Bucket
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

// Serve static files for all other routes
app.use('/*', serveStatic())

export default app 