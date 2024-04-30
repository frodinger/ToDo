import React, { useState, useEffect, useRef } from "react";

const Item = ({ item, todos, setTodos }) => {

  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );
    // Uppdatera local storage efter att klar-markerat en todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  };

  const handleEdit = () => {
    setEditing(true);
  }

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // placerar muspekaren vid slutet av texten
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputSubmit = (event) => {
    event.preventDefault();

    // Uppdatera local storage vid ändring av todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);

    setEditing(false);
  }

  const handleInputBlur = () => {

    // Uppdatera local storage vid ändring av todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);

    setEditing(false);
  }

  const handleInputChange = (event) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) =>
        todo.id === item.id ? {...todo, title: event.target.value} : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));

    // Uppdatera local storage efter att raderat en todo
    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
  }

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
        ) : (
            <>
              <button className="todo_items_left" onClick={completeTodo}>
                <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
                  <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                </svg>
                <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
                  {item?.title}
                </p>
              </button>
              <div className="todo_items_right">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </>
          )}
        </li>
      );
}

export default Item;