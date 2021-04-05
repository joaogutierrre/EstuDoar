import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardStudentCard from '../components/DashboardStudentCard';
import './StudentDashboard.css'
import * as database from '../services/databaseApi'
import { GrAddCircle } from "react-icons/gr"
class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
        this.getStudents = this.getStudents.bind(this);
    }

    getStudents(){
        const accessToken = localStorage.getItem("estudoar");
        database.getStudents(accessToken).then((students) => {
            if(students){
                this.setState({students});
            } 
        });
    }

    componentDidMount() {
        this.getStudents();
    }
    render(){
        const { students } = this.state; 
        const studentList = students.map((student, index) => (
            <DashboardStudentCard 
                name={student.name}
                school={student.school}
                about={student.about}
                uf={student.uf}
                city={student.city}
                age={student.age}
                image={student.image === "" ? "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80" : student.image}
                items={student.items}
                id={student.id}
                key={index}
            />
        ));
        return(
            <div className="dashboard-container">
                <div className="f-column">
                    <h1 className="bg-marker">MEU PERFIL</h1>
                </div>
                <div className="dashboard-list-container">
                    {studentList}
                        <div className="btn-add-student-container">
                            <Link to="/student-dashboard/add-student">
                                <button className="purple-dark button-round btn-add-student">ADICIONAR NOVO ESTUDANTE</button>
                            </Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default StudentDashboard;