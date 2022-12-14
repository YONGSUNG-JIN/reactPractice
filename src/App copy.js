import { useState, useEffect } from 'react';
import styles from './App.module.css'

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])
  const newToDo = (e) => {
    setToDo(e.target.value)
  }
  const addToDo = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((prevArray) => [...toDos, toDo])
    console.log(toDos)
    setToDo("")
  }
  return <div>
    <h1>MY TODOS({toDos.length})</h1>
    <form onSubmit={addToDo}>
      <input onChange={newToDo} value={toDo} type="text" placeholder="Write Your TO-DO" />
      <button>ADD TODO</button>
    </form>
    <ul>
      {toDos.map((e, i) => <li key={i} >{e}</li>)}
    </ul>
  </div>
}

export default App;
