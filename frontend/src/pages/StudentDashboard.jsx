import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardStudentCard from '../components/DashboardStudentCard';
import './StudentDashboard.css'

class StudentDashboard extends Component {
    render(){
        return(
            <div className="dashboard-container">
                <DashboardStudentCard />
                <Link to="/student-dashboard/add-student">
                    <button>Adicionar Estudante</button>
                </Link>
            </div>
        )
    }
}

export default StudentDashboard;