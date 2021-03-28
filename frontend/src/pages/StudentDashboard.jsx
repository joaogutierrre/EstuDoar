import React, { Component } from 'react';
import DashboardStudentCard from '../components/DashboardStudentCard';
import './StudentDashboard.css'

class StudentDashboard extends Component {
    render(){
        return(
            <div className="dashboard-container">
                <DashboardStudentCard />
                <button>Adicionar Estudante</button>
            </div>
        )
    }
}

export default StudentDashboard;