import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withTodoService } from '../hoc';
import { userLogout } from '../../actions';

import './auth.css';

const Logout = ({ userLogout }) => {
  return (
    <div className="app-logout d-flex">
      <button className="btn btn-outline-warning" onClick={userLogout}>
        Logout
      </button>
    </div>
  );
};

const mapDispachToProps = (dispatch, { todoService }) => {
  return bindActionCreators(
    {
      userLogout: userLogout(todoService),
    },
    dispatch
  );
};

export default withTodoService()(
  connect(
    null,
    mapDispachToProps
  )(Logout)
);
