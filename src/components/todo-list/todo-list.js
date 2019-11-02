import React from 'react';

import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = () => {
  return (
    <ul className="list-group todo-list">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
