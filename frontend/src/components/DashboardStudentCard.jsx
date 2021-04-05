import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashboardStudentCard.css';
import { FaBirthdayCake, FaHome } from "react-icons/fa";

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
            <div className="card-container dashboard-card">
                <div className="grid-two">
                    <div className="profile-image-container">
                    <img
                        src={image === "" ? "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80" : image}
                        alt="Foto do Estudante"
                    />
                    </div>
                    <div className="student-data">
                        <h3>{ name }</h3>
                        <p><FaHome /> São Paulo - SP</p>
                        <p><FaBirthdayCake />10 anos</p>
                    </div>
                </div>
                <div className="f-column">
                    <div className="list-progress-bar">
                        <p>{percent}% Concluído</p>
                        <progress id="file" value={percent} max="100" />
                    </div>
                    <div>
                      <Link
                          data-testid="product-detail-link"
                          to={ {
                                pathname: `/student-dashboard/${id}`,
                                state: {
                                        items,
                                      },
                              }}
                      >
                        <button className="button-round purple-dark btn-view-list">VER LISTA</button>
                      </Link>
                    </div>
                </div>
                </div>
        );
    }
}

export default DashboardStudentCard;