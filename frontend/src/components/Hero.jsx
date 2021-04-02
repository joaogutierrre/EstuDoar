import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero-container f-column">
        <div className="hero-text-container f-column">
          <h1>
          A melhor forma de <br /> <span className="bg-marger">doar conhecimento</span> 
          </h1>
        </div>

        <div className="hero-buttons-container f-column">
          <Link to='/donation-feed'>
          <button className="button-round purple-dark" type="button">QUERO DOAR</button>
          </Link>
          <Link to='/student-login'>
          <button className="button-round purple-dark" type="button purple-dark">RECEBER DOAÇÃO</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default Hero;
