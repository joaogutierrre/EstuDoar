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
    .then( ( response ) => {
        if(Object.keys(response)[0] !== "error")
        {
            localStorage.setItem('estudoar', response.accessToken)
            this.setState({ loggedIn: true });
        }
    })
  }

  render() {
    const { email, password, loggedIn } = this.state;
    const isButtonDisabled = !this.validateLoginFields(email, password);
    return (
      <div className="f-column login-container">
        <h1 className="h1-login"><span className="txt-circle">Já s</span>ou cadastrado</h1>
        <input
          className="login-input"
          id="input-email"
          name="email"
          type="email"
          value={ email }
          onChange={ this.handleInputChange }
          placeholder="E-mail"
        />
        <input
          className="login-input"
          id="input-password"
          name="password"
          type="password"
          value={ password }
          onChange={ this.handleInputChange }
          placeholder="Senha"
        />
        {loggedIn ? (
          <Redirect to="/student-dashboard" />
        )
          : (
            <button
              className="button-round purple-dark btn-login"
              type="button"
              disabled={ isButtonDisabled }
              onClick={ this.handleClick }
            >
              ENTRAR
            </button>
          )}
      </div>
    );
  }
}

export default Login;
