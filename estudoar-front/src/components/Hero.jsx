import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero-container">
        <h1>Bem-Vindo <br /> a <br /> Estudoar</h1>
        <p>auxiliando a educação ao seu redor</p>
        <div className="hero-buttons-container">
          <button type="button">Cadastre-se</button>
          <button type="button">Já sou Cadastrado</button>
        </div>
      </section>
    );
  }
}

export default Hero;
