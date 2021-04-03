import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DonateStudentCard.css';

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
    const { percent } = this.state;
    const { student } = this.props 
    const {name, image, id} = student;

    return (
      <div className="card-container">
        <div className="image-container">
          <img
            src={image === "" ? "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80" : image}
            alt="Foto do Estudante"
          />
        </div>
        <div className="card-content">
          <div className="student-name">
            <h3>{ name }</h3>
          </div>
          <div className="list-progress-bar">
              <p>{ percent }% Concluído</p>
            <progress id="file" value={percent} max="100" />
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
              <button>Contribuir</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DonateStudentCard;
