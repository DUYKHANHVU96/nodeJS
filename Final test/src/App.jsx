import React, { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Do coding challenges', completed: false },
    { id: 2, text: 'Do coding challenges', completed: false },
    { id: 3, text: 'Do coding challenges', completed: true }
  ])
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all') 

  // Thêm todo mới
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  // Toggle trạng thái completed
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Xóa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Xóa tất cả todo đã hoàn thành
  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Lọc todos theo filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  // Đếm số todo đã hoàn thành
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          #todo
        </h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 text-center font-medium transition-colors ${
              filter === 'all' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`flex-1 py-2 text-center font-medium transition-colors ${
              filter === 'active' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`flex-1 py-2 text-center font-medium transition-colors ${
              filter === 'completed' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Input thêm todo */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="add details"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        {/* Danh sách todos */}
        <div className="space-y-2">
          {filteredTodos.map(todo => (
            <div key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {todo.completed ? 'Task done' : todo.text}
                </span>
              </div>
              {todo.completed && (
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  🗑️
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Nút delete all */}
        {filter === 'completed' && completedCount > 0 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={deleteCompleted}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              🗑️ delete all
            </button>
          </div>
        )}
      </div>
    </div>
  )
}