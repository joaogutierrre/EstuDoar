import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DonateStudentCard.css';

class DonateStudentCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1499323888381-7fd102a793de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="Foto do Estudante"
          />
        </div>
        <div className="card-content">
          <div className="student-name">
            <h3>Bruna Souza</h3>
          </div>
          <div className="list-progress-bar">
              <p>32% Concluído</p>
            <progress id="file" value="32" max="100" />
          </div>
          <div className="donate-button">
            <Link to='/donation-feed/donate'>
              <button>Contribuir</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DonateStudentCard;
