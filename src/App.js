import React from 'react';
import './App.css';
import Header from './compoonents/Header'
import AddTask from './compoonents/AddTask'
import TaskList from './compoonents/TaskList'

function App() {
  return (
    <div className="App">
        <Header />
        <AddTask />
        <TaskList />
       
    </div>
  );
}

export default App;