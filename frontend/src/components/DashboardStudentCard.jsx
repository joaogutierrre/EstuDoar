import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DashboardStudentCard.css'

class DashboardStudentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        }
        this.setPercentDonated = this.setPercentDonated.bind(this);
    }
    setPercentDonated() {
        const { items } = this.props
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
        const {name, image, items, id} = this.props;
        return(
            <div className="card-container">
                <div className="image-container">
                    <img
                        src= { image }
                        alt="Foto do Estudante"
                    />
                </div>
                <div className="card-content">
                    <div className="student-name">
                        <h3>{ name }</h3>
                    </div>
                    <div className="list-progress-bar">
                        <p>{percent}% Concluído</p>
                        <progress id="file" value="32" max="100" />
                    </div>
                    <div className="donate-button">
                      <Link
                          data-testid="product-detail-link"
                          to={ {
                                pathname: `/student-dashboard/${id}`,
                                state: {
                                        items,
                                      },
                              }}
                      >
                        <button>Ver Lista</button>
                      </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardStudentCard;