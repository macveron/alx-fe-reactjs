import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('allows users to toggle a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    fireEvent.click(todo);
    
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('allows users to delete a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = todo.querySelector('button');
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
