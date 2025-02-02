import { useRef, useState } from "react"
import './App.css';
import 'bootstrap'

function App() {
  // comment
  // commenten
  const [todos, setTodos] = useState([]);
  const inputRef = useRef()
  const handleAdd = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem])
    inputRef.current.value = ""
  }
  const itemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1 className="todocolor">TODO LIST</h1>
      <button type="button" class="btn btn-primary">Add Task</button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          All
        </button>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">All</a></li>
          <li><a class="dropdown-item" href="#">Completed</a></li>
          <li><a class="dropdown-item" href="#">Not Completed</a></li>
        </ul>
      </div>
      
      <div className='to-do-container'>
        <ul>
          {todos.map(({ text , completed }, index) => {
            return <li className = {completed? "done" : ""} onClick={() => itemDone(index)}>{text}</li>;
          })}  
        </ul>
        <input className="input" ref={inputRef} type="text" placeholder="Creat a react project
        5:23 Am, 01/06/2022" />
        <input className="input" ref={inputRef} type="text" placeholder="Learn react 🖤
        5:23 Am, 01/06/2022" />
        <input className="input" ref={inputRef} type="text" placeholder="Creat a Todo App
        5:23 Am, 01/06/2022" />
        <button className="زرار" onClick={handleAdd}>😻😻add</button>
      </div>
    </div>
  );
}

export default App;
