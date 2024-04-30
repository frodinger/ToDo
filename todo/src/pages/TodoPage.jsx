"use client";
import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Hero from "../components/Hero";
import TodoList from "../components/TodoList";

const TodoPage = () => {

  const [todos, setTodos] = useState([]);

  // Hämta data från local storage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      // Konvertera string tillbaka till en array
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter((todo) => todo.is_completed === true).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Hero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoPage;