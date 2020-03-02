import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { withTodoService } from '../hoc';
import { sendLoginForm } from '../../actions';

import './auth.css';

class LoginPage extends React.Component {
  state = {
    emailVal: '',
    password1: '',
    redirect: false,
  };

  render() {
    const { sendLoginForm, homeRedirect, errorLogin } = this.props;
    const { emailVal, password } = this.state;

    const onEmailInput = e => {
      this.setState({ emailVal: e.target.value });
    };
    const onPasswInput1 = e => {
      this.setState({ password: e.target.value });
    };
    const onLoginSubmit = e => {
      e.preventDefault();

      if (emailVal && password) {
        sendLoginForm({ email: emailVal, password });
      }
    };
    if (homeRedirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="todo-app text-center">
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
                onChange={onEmailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                onChange={onPasswInput1}
              />
            </div>
            <p>{errorLogin}</p>
            <button
              type="submit"
              className="btn btn-secondary float-right"
              onClick={onLoginSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ homeRedirect, errorLogin }) => {
  return {
    homeRedirect,
    errorLogin,
  };
};

const mapDispachToProps = (dispatch, { todoService }) => {
  return bindActionCreators(
    {
      sendLoginForm: data => dispatch(sendLoginForm(todoService, data)),
    },
    dispatch
  );
};
export default withTodoService()(
  connect(
    mapStateToProps,
    mapDispachToProps
  )(LoginPage)
);
