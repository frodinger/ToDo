import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEditTodo, onDeleteTodo, onToggleComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;