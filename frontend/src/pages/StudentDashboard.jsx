import React, { Component } from 'react';
import DashboardStudentCard from '../components/DashboardStudentCard';
import RegisterStudent from './RegisterStudent';
import './StudentDashboard.css'

class StudentDashboard extends Component {
    render(){
        return(
            <div className="dashboard-container">
                <DashboardStudentCard />
                <button>Adicionar Estudante</button>
                <RegisterStudent />
            </div>
        )
    }
}

export default StudentDashboard;