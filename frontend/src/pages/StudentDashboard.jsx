import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardStudentCard from '../components/DashboardStudentCard';
import './StudentDashboard.css'
import studets from '../fakeStudents'

class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
    }
    render(){
        const studentList = studets.map((student, index) => (
            <DashboardStudentCard 
                name={student.name}
                school={student.school}
                about={student.about}
                image={student.image === "" ? "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80" : student.image}
                items={student.items}
                id={student.id}
                key={index}
            />
        ));
        return(
            <div className="dashboard-container">
                {studentList}
                <div className="card-container">
                    <div className="add-student-button">
                        <Link to="/student-dashboard/add-student">
                            <button>Adicionar Novo Estudante</button>
                        </Link>
                    </div>
                 </div>
            </div>
        )
    }
}

export default StudentDashboard;