import React from 'react';
import { connect } from 'react-redux';

import './header.css';

const Header = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

const mapStateToProps = ({ active, doneCount }) => {
  return {
    todo: active,
    done: doneCount,
  };
};

export default connect(mapStateToProps)(Header);
