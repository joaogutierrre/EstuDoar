import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import './Login.css';
import * as database from '../services/databaseApi'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateLoginFields = this.validateLoginFields.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateLoginFields() {
    const { email, password } = this.state;
    const re = /[^@]+@[^.]+\..+/g;
    const minimumPasswordLength = 2;
    const emailTest = re.test(String(email).toLowerCase());
    const passwordTest = password.length >= minimumPasswordLength;
    return (emailTest && passwordTest);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { email, password } = this.state;
    database.handleLogin(email, password)
    .then(({ accessToken }) => localStorage.setItem('estudoar', accessToken))
    .then(this.setState({ loggedIn: true }));
  }

  render() {
    const { email, password, loggedIn } = this.state;
    const isButtonDisabled = !this.validateLoginFields(email, password);
    return (
      <div className="login-container">
        <input
          id="input-email"
          name="email"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ this.handleInputChange }
          placeholder="Login"
        />
        <input
          id="input-password"
          name="password"
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ this.handleInputChange }
          placeholder="Password"
        />
        {loggedIn ? (
          <Redirect to="/student-dashboard" />
        )
          : (
            <button
              type="button"
              disabled={ isButtonDisabled }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          )}
      </div>
    );
  }
}

export default Login;
