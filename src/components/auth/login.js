import React from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

const LoginPage = () => {
  return (
    <div className="todo-app">
      <nav className="nav nav-pills nav-fill">
        <Link to="/login" className="nav-item nav-link active">
          Login
        </Link>
        <Link to="/register" className="nav-item nav-link">
          Registration
        </Link>
      </nav>
      <form id="loginForm">
        <div className="form-group">
          <label htmlFor="loginEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input type="password" className="form-control" id="loginPassword" />
        </div>
        <button type="submit" className="btn btn-secondary float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
