import React, { Component } from 'react';
import students from '../fakeStudents';
import './DonatePage.css';
import { FaBirthdayCake, FaHome } from "react-icons/fa";
class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      answer: {}
    };

    this.getStudent = this.getStudent.bind(this);
    this.setItemDonated = this.setItemDonated.bind(this);
  }

  setItemDonated(index, event) {
    const { answer } = this.state;
    answer.items[index].isDonating = Number(event.target.value); 
    this.setState({answer})
}

  getStudent() {
    const { location } = this.props;
    const { student } = location.state;
    const newStudent =student 
    this.setState({answer: newStudent});
  }

componentDidMount() {
  this.getStudent();
}

  render() {
    const { location } = this.props;
    const { student } = location.state;
    const { name, about, school, items, image } = student;
    const itemsList = items.map((item, index) => {
      const maxDonateQuantity = [...Array(item.quantity - item.donated + 1).keys()];
      return (
      <div className="item-container f-column" key={index}>
        <li className="supply-item">
          {item.quantity} x {item.category.toUpperCase()}
        </li>
        <label className="supply-donate">
          <span>Doar: </span>
          <select className="txt-input donate-page-select" onChange={event => this.setItemDonated(index, event)}>
            {maxDonateQuantity.map((unit, index) => (<option key={index} value={unit}>{unit} Unidade(s)</option>))}
          </select>
        </label>
      </div>
    )});
    return (
      <div className="donate-page">
        <div className="grid-two">
          <div className="image-container">
            <img
              src={image === "" ? "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80" : image}
              alt="Foto do Estudante"
            />
          </div>
          <div className="student-data">
                        <h3>{ name }</h3>
                        <h4>Escola: {school}</h4>
                        <p><FaHome /> São Paulo - SP</p>
                        <p><FaBirthdayCake />10 anos</p>
          </div>
          </div>
          <div className="about-student">
            <p>
              {about}
            </p>
          </div>
        <div className="list-container">
          <h3 className="bg-marker">Lista de Materiais</h3>
          <ul>{itemsList}</ul>
        </div>
        <div className="button-container">
          <button className="button-round purple-dark btn-finish-donation">FINALIZAR DOAÇÃO</button>
        </div>
      </div>
    );
  }
}

export default DonatePage;
