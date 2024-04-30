import { nanoid } from "nanoid";

const Form = ({ todos, setTodos }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    const newTodo = {
      title: value, 
      id: `todo-${nanoid()}`, 
      is_completed: false
    };
    // Uppdatera todo-state
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    // Lagra uppdateard todo i local storage
    const updatedToDoList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem("todos", updatedToDoList);
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
  
export default Form;