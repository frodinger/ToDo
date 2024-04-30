import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="hero-section">
            <h1>Do you have stuff to do?</h1>
            <p>Stay organized and manage your tasks effectively with our Todo List!</p>
            <Link to="/todo">
                <button>Get started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
