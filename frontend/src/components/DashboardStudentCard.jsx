import React, { Component } from 'react'
import './DashboardStudentCard.css'

class DashboardStudentCard extends Component {
    render() {
        return(
            <div className="dash-card">
                <div className="profile-image-container">
                    <img src="https://images.unsplash.com/photo-1499323888381-7fd102a793de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt=""/>
                </div>
                <p>Bruna Souza</p>
                <div className="info-container">
                    <p>Doados</p>
                    <p>4/10</p>
                </div>
            </div>
        );
    }
}

export default DashboardStudentCard;