import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let _input = null;
  const [tasks, updateTasks] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" ref={(ref) => _input = ref}/>
        <button onClick={() => {
          if (_input.value == "") { 
            alert("Please input a value.");
            return;
          }
          updateTasks([
            ...tasks,
            _input.value
          ])
        }}>ADD TASK</button>
        <ul>
          {tasks.map((task, k) => <li key={k}>{task}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
