const API_BASE = window.location.origin;

export const r2Client = {
  async getTodos() {
    try {
      const response = await fetch(`${API_BASE}/api/todos`);
      const data = await response.json();
      return data.todos || [];
    } catch (error) {
      console.error('Error fetching todos:', error);
      return [];
    }
  },

  async addTodo(todo) {
    try {
      const response = await fetch(`${API_BASE}/api/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error adding todo:', error);
      return false;
    }
  },

  async updateTodo(id, updates) {
    try {
      const response = await fetch(`${API_BASE}/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error updating todo:', error);
      return false;
    }
  },

  async deleteTodo(id) {
    try {
      const response = await fetch(`${API_BASE}/api/todos/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error deleting todo:', error);
      return false;
    }
  },

  async clearAllTodos() {
    try {
      const response = await fetch(`${API_BASE}/api/todos`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error clearing todos:', error);
      return false;
    }
  }
};
