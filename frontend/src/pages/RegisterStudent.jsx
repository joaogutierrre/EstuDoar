import React, { Component } from 'react';
import SelectSchoolSupply from '../components/SelectSchoolSupply';
import './RegisterStudent.css';
import * as database from '../services/databaseApi'

class RegisterStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            school: '',
            about: '',
            items: [{
                category: '',
                quantity: '',
            }],
            supplyCategories: [],
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.setItem = this.setItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getSupplyCategories = this.getSupplyCategories.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    setItem(index, event) {
        const { items } = this.state;
        const newSupply = [...items];
        newSupply[index][event.target.name] = event.target.value;
        this.setState({items: newSupply})
    }

    addItemToList(event) {
        event.preventDefault();
        const newItem = {
            category: '',
            quantity: '',
        };
        this.setState(({items}) => ({items: [...items, newItem ]}))
    }

    removeItemFromList(index, event) {
        event.preventDefault();
        const { items } = this.state;
        const newSupply = [...items];
        newSupply.splice(index, 1)
        this.setState({items: newSupply});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    getSupplyCategories(){
        database.getSchoolSupplyCategories().then(({ categories }) => this.setState({ supplyCategories: categories }));
    }

    handleRegister(event) {
        event.preventDefault();
        const {name, school, about, items} = this.state;
        const accessToken = localStorage.getItem("estudoar");
        const student = {
            name,
            school,
            about,
            image: "any_image",
            items,
        };
        console.log(student);
        database.setStudent(student, accessToken);
    }

    componentDidMount(){
        this.getSupplyCategories();
    }

    render () {
        const { name, school, about, items, supplyCategories } = this.state;
        return(
            <form className='student-register-form'>
                <label>
                    Nome:
                    <input type="text" name="name" value={name} onChange={this.handleInputChange} />
                </label>
                <label>
                    Escola:
                    <input type="text" name="school" value={school} onChange={this.handleInputChange} />
                </label>
                <label>
                    Sobre:
                    <textarea 
                        name="about" 
                        value={about} 
                        onChange={this.handleInputChange} 
                        placeholder="Escreva um resumo sobre o estudante"    
                    />
                </label>
                <div className="list-container">
                    {items.map((item , index) => (
                    <SelectSchoolSupply 
                        setItem={event => this.setItem(index, event)}
                        removeItem={event => this.removeItemFromList(index, event)}
                        key={index} 
                        value={item}
                        categories={supplyCategories}
                    />))}
                </div>
                <button onClick={this.addItemToList}>Novo Item</button>
                <button onClick={this.handleRegister}>Finalizar Cadastro</button>
            </form>
        )
    }
}

export default RegisterStudent; 