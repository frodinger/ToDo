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
    <li className="todo-item">
      <div className="c-cb">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(index, !todo.completed)}
          id={`checkbox-${index}`} // Unique id for each checkbox
          className="c-cb__input" // Apply checkbox styling
        />
        <label htmlFor={`checkbox-${index}`} className="c-cb__label" onClick={handleClickName}>{todo.text}</label>
      </div>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleChange} className="edit-input" /> {/* Apply input styling */}
          <button onClick={handleSave} className="edit-button">Save</button> {/* Apply button styling */}
          <button onClick={handleCancel} className="edit-button">Cancel</button> {/* Apply button styling */}
        </>
      ) : (
        <>
          <button onClick={handleEdit} className="edit-button">Edit</button> {/* Apply button styling */}
          <button onClick={() => onDeleteTodo(index)} className="edit-button">Delete</button> {/* Apply button styling */}
        </>
      )}
    </li>
  );
}

export default TodoItem;