import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({
  label,
  id,
  done,
  important,
  onDoneItem,
  onImportantItem,
  onRemoveFromList,
}) => {
  let clazz = 'list-group-item todo-list-item';
  if (done) {
    clazz = 'list-group-item todo-list-item done';
  }
  if (important) {
    clazz = 'list-group-item todo-list-item important';
  }
  if (done && important) {
    clazz = 'list-group-item todo-list-item done important';
  }
  return (
    <li className={clazz} id={id}>
      <span className="todo-list-item-label" onClick={onDoneItem}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportantItem}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onRemoveFromList}
      >
        <i className="fa fa-trash-o" />
      </button>
    </li>
  );
};

export default TodoListItem;
