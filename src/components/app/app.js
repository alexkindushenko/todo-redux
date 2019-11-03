import React, { Component } from 'react';

import './app.css';
import Header from '../header';
import TodoList from '../todo-list';
import SearchPanel from '../serch-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <Header />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList />
        <ItemAddForm />
      </div>
    );
  }
}

export default App;
