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

  return (
    <li className="todo-item">
      <div className="c-cb">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(index, !todo.completed)}
          id={`checkbox-${index}`} // Unique id for each checkbox
          className="c-cb__input" // Apply checkbox styling
        />
        <label htmlFor={`checkbox-${index}`} className="c-cb__label">{todo.text}</label>
      </div>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleChange} className="edit-input" />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit} className="edit-button">Edit</button>
          <button onClick={() => onDeleteTodo(index)} className="delete-button">Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;