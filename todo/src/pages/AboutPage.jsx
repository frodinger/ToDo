import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <h1>About the Todo List</h1>
                <p>
                    This Todo List application allows you to manage your tasks efficiently.
                    You can add new tasks, mark them as completed, edit existing tasks, and delete tasks you no longer need.
                </p>
                <p>Start organizing your tasks today with this simple and intuitive Todo List application!</p>
            </div>
            <div className="about-right">
                <h2>Features:</h2>
                <ul>
                    <li>Add new tasks: Use the input field at the top to add new tasks to your list.</li>
                    <li>Mark tasks as completed: Check the checkbox next to a task to mark it as completed.</li>
                    <li>Edit tasks: Click the "Edit" button next to a task to edit its text.</li>
                    <li>Delete tasks: Click the "Delete" button next to a task to remove it from the list.</li>
                    <li>View completion status: The application shows you how many tasks are completed out of the total.</li>
                    <li>Automatic data persistence: Your tasks are saved locally, so they will persist even after you reload the page.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;