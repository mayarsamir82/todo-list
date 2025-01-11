import { useRef, useState } from "react"
import './App.css';

function App() {
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
      <h1>ToDo List</h1>
      <div className='to-do-container'>
        <ul>
          {todos.map(({ text , completed }, index) => {
            return <li className = {completed? "done" : ""} onClick={() => itemDone(index)}>{text}</li>;
          })}  
        </ul>
        <input className="input" ref={inputRef} type="text" placeholder="Add a new task..." />
        <button className="زرار" onClick={handleAdd}>add</button>
      </div>
    </div>
  );
}

export default App;
