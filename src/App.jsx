import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function App() {
  return (
    <div>
      <h1>TODO List</h1>

      <div className="todo-wrapper">
        <div className="todo-input-item">
          <label>Title</label>
          <input type="text" placeholder="Task Name" />
        </div>

        <div className="todo-input-item">
          <label>Priority</label>
          <select name="priority" id="cars">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="todo-input-item">
          <button className="primaryBtn" type="button">Add</button>
        </div>

        <div className="btn-area">
          <button>Incomplete</button>
          <button>Complete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
