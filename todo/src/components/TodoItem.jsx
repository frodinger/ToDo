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

  const handleClickName = () => {
    // Toggle the completion status of the todo item
    const updatedCompleted = !todo.completed;
    onToggleComplete(index, updatedCompleted);
    // Force re-render to update the checkbox
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(index, !todo.completed)}
        />
        <span
          onClick={handleClickName}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        >
          {todo.text}
        </span>
      </label>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;