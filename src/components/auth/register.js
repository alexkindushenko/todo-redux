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
    redirect: false,
  };

  render() {
    const { sendRegisterForm, homeRedirect, errorRegister } = this.props;
    const { emailVal, password1, password2 } = this.state;

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

      if (emailVal && password1 && password1 === password2) {
        sendRegisterForm({ email: emailVal, password: password1 });
        this.setState({ redirect: true });
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
                className="form-control"
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
                className="form-control"
                id="registerPassword1"
                value={password1}
                onChange={onPasswInput1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword2">Password</label>
              <input
                type="password"
                className="form-control"
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
