import { useEffect, useState } from "react";
import "./App.css";
import ToDoComponent from "./components/ToDoComponent";
import { getAllToDo, addToDo } from "./utils/Handleapi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
      </div>
      <div className="top">
        <input
          type="text"
          placeholder="Add ToDos....."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add" onClick={() => addToDo(text, setText, setToDo)}>
          Add
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <ToDoComponent key={item._id} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
