import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import Form from '../components/Form';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever todos change
  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      console.log("Stored todos:", storedTodos); // Debugging
      if (storedTodos && Array.isArray(storedTodos)) {
        setTodos(storedTodos);
      }
    } catch (error) {
      console.error("Error loading todos from local storage:", error);
    }
  }, []);
  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, { text: newTodo, completed: false }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos)); // Update local storage
  };

  const handleEditTodo = (index, updatedText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = updatedText;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Update local storage
  };

  const handleToggleComplete = (index, completed) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = completed;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Update local storage
  };

  const allCompleted = todos.length > 0 && todos.every(todo => todo.completed);

  return (
    <div>
      <h1>What needs to be done?</h1>
      <Form onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        />
      {todos.length === 0 && <p>No todos yet!</p>}
      <p>{allCompleted ? 'All tasks completed, good job!' : `${todos.filter(todo => todo.completed).length} out of ${todos.length} tasks completed`}</p>
    </div>
  );
}

export default TodoPage;