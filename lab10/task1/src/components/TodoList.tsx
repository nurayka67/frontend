import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoList({ initialTodos = [] }: { initialTodos?: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        data-testid="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button data-testid="add-button" onClick={addTodo}>Add</button>
      <div data-testid="todo-count">{todos.length} todos</div>
      {todos.map(todo => (
        <div key={todo.id} data-testid="todo-item">
          <span>{todo.text}</span>
          <button data-testid="delete-button" onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}