import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <h1>Do you have stuff to do? Create a todo-list!</h1>
            <Link to="/todo">
                <button>Get started</button>
            </Link>
        </>
    );
};

export default LandingPage;