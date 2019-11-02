import React from 'react';

import './todo-list-item.css';

const TodoListItem = () => {
  return (
    <li className="list-group-item todo-list-item">
      <span className="todo-list-item-label">Drink coffee</span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </li>
  );
};

export default TodoListItem;
