import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero-container">
        <div className="hero-text-container">
          <h1>
            Bem-Vindo <br /> a <br /> Estudoar
          </h1>
          <p>auxiliando a educação ao seu redor</p>
        </div>

        <div className="hero-buttons-container">
          <Link to='/student-dashboard'>
          <button type="button">Quero Receber uma Doação</button>
          </Link>
          <Link to='/donation-feed'>
          <button type="button">Quero Doar</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default Hero;
