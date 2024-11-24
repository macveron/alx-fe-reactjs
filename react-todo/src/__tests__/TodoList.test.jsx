// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList correctly', () => {
        render(<TodoList />);
        const todoItems = screen.getAllByRole('listitem');
        expect(todoItems).toHaveLength(3); // 3 initial todos
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Enter a new todo');
        const button = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        const newTodoItem = screen.getByText('New Todo');
        expect(newTodoItem).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);

        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);

        const deletedTodo = screen.queryByText('Learn React');
        expect(deletedTodo).not.toBeInTheDocument();
    });
});
