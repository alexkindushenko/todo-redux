import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withTodoService } from '../hoc';
import { sendRegisterForm } from '../../actions';

class RegisterPage extends React.Component {
  state = {
    emailVal: '',
    password1: '',
    password2: '',
    classEmail: 'form-control',
    classPassword: 'form-control',
  };

  render() {
    const { sendRegisterForm, homeRedirect, errorRegister } = this.props;
    const {
      emailVal,
      password1,
      password2,
      classEmail,
      classPassword,
    } = this.state;
    const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onEmailInput = e => {
      this.setState({ emailVal: e.target.value });
    };
    const onPasswInput1 = e => {
      this.setState({ password1: e.target.value });
    };
    const onPasswInput2 = e => {
      this.setState({ password2: e.target.value });
    };

    const onRegisterSubmit = e => {
      e.preventDefault();

      if (
        emailRegexp.test(emailVal) &&
        password1.length >= 4 &&
        password1 === password2
      ) {
        sendRegisterForm({ email: emailVal, password: password1 });
        this.setState({
          classEmail: 'form-control',
          classPassword: 'form-control',
        });
      } else {
        if (!emailRegexp.test(emailVal))
          this.setState({ classEmail: 'form-control error-validate' });
        else this.setState({ classEmail: 'form-control' });
        if (password1.length < 4 || password1 !== password2)
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
                className={classEmail}
                id="registerEmail"
                aria-describedby="emailHelp"
                value={emailVal}
                onChange={onEmailInput}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword1">Password</label>
              <input
                type="password"
                className={classPassword}
                id="registerPassword1"
                value={password1}
                onChange={onPasswInput1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword2">Password</label>
              <input
                type="password"
                className={classPassword}
                id="registerPassword2"
                value={password2}
                onChange={onPasswInput2}
              />
            </div>
            <p>{errorRegister}</p>

            <button
              type="submit"
              className="btn btn-secondary float-right"
              onClick={onRegisterSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}
const mapStateToProps = ({ homeRedirect, errorRegister }) => {
  return {
    homeRedirect,
    errorRegister,
  };
};

const mapDispachToProps = (dispatch, { todoService }) => {
  return bindActionCreators(
    {
      sendRegisterForm: data => dispatch(sendRegisterForm(todoService, data)),
    },
    dispatch
  );
};

export default withTodoService()(
  connect(
    mapStateToProps,
    mapDispachToProps
  )(RegisterPage)
);
