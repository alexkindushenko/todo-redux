import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import TodoService from './services/todo-service';
import { TodoServiceProvider } from './components/todo-service-context';

import store from './store';

const todoService = new TodoService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TodoServiceProvider value={todoService}>
        <Router>
          <App />
        </Router>
      </TodoServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
