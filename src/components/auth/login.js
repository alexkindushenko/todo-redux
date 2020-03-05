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
    password: '',
    classEmail: 'form-control',
    classPassword: 'form-control',
  };

  render() {
    const { sendLoginForm, homeRedirect, errorLogin } = this.props;
    const { emailVal, password, classEmail, classPassword } = this.state;
    const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onEmailInput = e => {
      this.setState({ emailVal: e.target.value });
    };
    const onPasswInput1 = e => {
      this.setState({ password: e.target.value });
    };
    const onLoginSubmit = e => {
      e.preventDefault();

      if (emailRegexp.test(emailVal) && password.length >= 4) {
        sendLoginForm({ email: emailVal, password });
        this.setState({
          classEmail: 'form-control',
          classPassword: 'form-control',
        });
      } else {
        if (!emailRegexp.test(emailVal))
          this.setState({ classEmail: 'form-control error-validate' });
        else this.setState({ classEmail: 'form-control' });
        if (password.length < 4)
          this.setState({ classPassword: 'form-control error-validate' });
        else this.setState({ classPassword: 'form-control' });
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
          <form id="loginForm" noValidate>
            <div className="form-group">
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                className={classEmail}
                id="loginEmail"
                aria-describedby="emailHelp"
                onChange={onEmailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                className={classPassword}
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
