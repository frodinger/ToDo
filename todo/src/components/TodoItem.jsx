import React, { useState } from 'react';

const TodoItem = ({ index, todo, onEditTodo, onDeleteTodo, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setEditText(event.target.value);
  };

  const handleSave = () => {
    onEditTodo(index, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleToggleComplete = () => {
    onToggleComplete(index, !todo.completed);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
