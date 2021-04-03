import React, { Component } from 'react';
import './DonateStudentCard.css';
import { FaBirthdayCake, FaHome } from "react-icons/fa";
class DonateStudentCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="grid-two">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1499323888381-7fd102a793de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                alt="Foto do Estudante"
              />
            </div>
              <div className="student-data">
                <h3>Bruna Souza</h3>
                <p><FaHome /> São Paulo - SP</p>
                <p><FaBirthdayCake />10 anos</p>
              </div>
        </div>
          <div className="student-about">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ea eum minus, obcaecati eius possimus? Quibusdam eveniet</p>
          </div>
          <div className="grid-two">
            <div className="list-progress-bar">
              <progress id="file" value="32" max="100" />
            </div>
            <div className="donate-button">
              <button>Doar</button>
            </div>
          </div>
      </div>
    );
  }
}

export default DonateStudentCard;
