import React, { useState } from 'react';
import logo from './logo.svg';
import TaskItem from './components/TaskItem'
import './App.css';

class App extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      tasks: ["wash dishes", 'do this', 'do that', 'extra', 'another extra'],
      displayTruck: true
    }
  }

  _input = null;
  _chkbox = null;
  addTask(task) {
    if (task == "" || task == " ") { alert('please input a value'); return; }
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks: tasks
    })

    this._input.value = '';
  }
  render() { 
    let lists = this.state.tasks.map((task, index) => {
      return (<TaskItem key={index} data={task} showTruck={this.state.displayTruck}/>)
    });
    
    let displayTruck = this.state.displayTruck;
    return (
      <div>
        <h1>My Tasks</h1>
        <input type="text" ref={(ref) => this._input = ref }/>
        <button onClick={() => {
          this.addTask(this._input.value)
        }}>add task</button>
        <input type="checkbox"
          checked={this.state.displayTruck ? 'checked': false}
          onChange={() => this.setState({ displayTruck: !this.state.displayTruck })}
          ref={(ref) => this._chkbox = ref} /> show truck
        <ul>
          {lists}
        </ul>
      </div>
    );
  }
}
export default App;
