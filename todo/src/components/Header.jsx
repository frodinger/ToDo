import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="title" to="/">Todo List</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">Todo</Link>
      </div>
    </header>
  );
};

export default Header;