import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="title" to="/">To Do List</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">To Do</Link>
      </div>
    </header>
  );
};

export default Header;