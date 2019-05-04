import React, { Component } from 'react';
import './App.css'
import TodoList from './component/TodoList'
import AddTodo from './component/AddTodo'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="section">
            <TodoList />
        </div>
        <div className="section">
            <AddTodo />
        </div>
      </div>
    );
  }
}

export default App;
