import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTodo = async () => {
    try {
      const response = await axios.post('/api/todos', { todo: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodo = async (id, completed) => {
    try {
      const response = await axios.put(`/api/todos/${id}`, { completed });
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? response.data : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={createTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodo(todo.id, e.target.checked)}
            />
            <span>{todo.todo}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
