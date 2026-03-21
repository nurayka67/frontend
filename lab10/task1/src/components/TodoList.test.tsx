import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';

test('renders empty todo list', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByTestId('todo-count')).toHaveTextContent('0 todos');
});

test('renders with initial todos', () => {
  const initialTodos = [{ id: 1, text: 'Test todo', completed: false }];
  render(<TodoList initialTodos={initialTodos} />);
  expect(screen.getByText('Test todo')).toBeInTheDocument();
  expect(screen.getByTestId('todo-count')).toHaveTextContent('1 todos');
});

test('adds a new todo via button click', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const button = screen.getByTestId('add-button');
  
  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(button);
  
  expect(screen.getByText('New task')).toBeInTheDocument();
  expect(screen.getByTestId('todo-count')).toHaveTextContent('1 todos');
  expect(input).toHaveValue('');
});

test('adds todo via Enter key', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  
  fireEvent.change(input, { target: { value: 'Enter task' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  
  expect(screen.getByText('Enter task')).toBeInTheDocument();
  expect(screen.getByTestId('todo-count')).toHaveTextContent('1 todos');
});

test('does not add empty todo', () => {
  render(<TodoList />);
  const button = screen.getByTestId('add-button');
  const input = screen.getByTestId('todo-input');
  
  // Пустой todo
  fireEvent.change(input, { target: { value: '   ' } });
  fireEvent.click(button);
  
  let todoItems = screen.queryAllByTestId('todo-item');
  expect(todoItems).toHaveLength(0);
  
  // Просто клик без ввода
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(button);
  
  todoItems = screen.queryAllByTestId('todo-item');
  expect(todoItems).toHaveLength(0);
});

test('deletes a todo', () => {
  const initialTodos = [{ id: 1, text: 'Task to delete', completed: false }];
  render(<TodoList initialTodos={initialTodos} />);
  
  const deleteButton = screen.getByTestId('delete-button');
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Task to delete')).not.toBeInTheDocument();
  expect(screen.getByTestId('todo-count')).toHaveTextContent('0 todos');
});

test('toggles todo completion', () => {
  const initialTodos = [{ id: 1, text: 'Test todo', completed: false }];
  render(<TodoList initialTodos={initialTodos} />);
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  
  expect(checkbox).toBeChecked();
});

test('updates counter correctly', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const button = screen.getByTestId('add-button');
  
  // Добавить 2 задачи
  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(button);
  
  fireEvent.change(input, { target: { value: 'Task 2' } });
  fireEvent.click(button);
  
  expect(screen.getByTestId('todo-count')).toHaveTextContent('2 todos');
});