import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="todo-app">
      <nav className="nav nav-pills nav-fill">
        <Link to="/login" className="nav-item nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-item nav-link  active">
          Registration
        </Link>
      </nav>

      <form id="registerForm">
        <div className="form-group">
          <label htmlFor="registerEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="registerPassword1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword2">Password</label>
          <input
            type="password"
            className="form-control"
            id="registerPassword2"
          />
        </div>
        <button type="submit" className="btn btn-secondary float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
