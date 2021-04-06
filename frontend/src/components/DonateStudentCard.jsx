import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DonateStudentCard.css';
import { FaBirthdayCake, FaHome } from "react-icons/fa";
class DonateStudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        percent: 0,
    }
    this.setPercentDonated = this.setPercentDonated.bind(this);
  }
  setPercentDonated() {
    const { student } = this.props
    const { items } = student
    const totalItens = items.reduce((acc, currentValue) => acc += currentValue.quantity, 0);
    const totalDonated = items.reduce((acc, currentValue) => acc += currentValue.donated, 0);
    const percent = (totalDonated * 100) / totalItens;
    this.setState({ percent });
  }

  componentDidMount(){
    this.setPercentDonated();
  }

  render() {
    const { student } = this.props 
    const {name, image, about, age, city, uf, id} = student;

    return (
      <div className="card-container">
        <div className="grid-two">
            <div className="image-container">
              <img
                src={image === "" ? "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80" : image}
                alt="Foto do Estudante"
              />
            </div>
              <div className="student-data">
                <h3>{ name }</h3>
                <p><FaHome /> {city} - {uf}</p>
                <p><FaBirthdayCake /> { 2020 - age.split('-')[0] } anos</p>
              </div>
        </div>
          <div className="student-about">
            <p>{ about.length > 150 ? `${about.slice(0, 150)}...` : about }</p>
          </div>
            <div className="donate-button">
              <Link
                data-testid="product-detail-link"
                to={{
                      pathname: `/donation-feed/donate/${id}`,
                      state: {
                      student,
                    },
                }}
              >
                <button>Doar</button>
              </Link>
          </div>
      </div>
    );
  }
}

export default DonateStudentCard;
