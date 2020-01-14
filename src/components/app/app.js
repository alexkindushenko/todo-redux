import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.css';

import { Logout } from '../auth';
import Header from '../header';
import TodoList from '../todo-list';
import SearchPanel from '../serch-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import { LoginPage, RegisterPage } from '../auth';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={() => (
            <div className="todo-app">
              <Logout />
              <Header />
              <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
              </div>
              <TodoList />
              <ItemAddForm />
            </div>
          )}
          exact
        />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
    );
  }
}

export default App;
