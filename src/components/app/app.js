import React, { Component } from 'react';

import './app.css';
import Header from '../header';
import TodoList from '../todo-list';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
