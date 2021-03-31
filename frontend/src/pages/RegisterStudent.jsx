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
            supplyList: [{
                id: '',
                name: '',
                quantity: '',
            }],
            supplyCategories: [],
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.setItem = this.setItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getSupplyCategories = this.getSupplyCategories.bind(this);
    }

    setItem(index, event) {
        const { supplyList } = this.state;
        const newSupply = [...supplyList];
        newSupply[index][event.target.name] = event.target.value;
        this.setState({supplyList: newSupply})
    }

    addItemToList(event) {
        event.preventDefault();
        const newItem = {
            id: '',
            name: '',
            quantity: '',
        };
        this.setState(({supplyList}) => ({supplyList: [...supplyList, newItem ]}))
    }

    removeItemFromList(index, event) {
        event.preventDefault();
        const { supplyList } = this.state;
        const newSupply = [...supplyList];
        newSupply.splice(index, 1)
        this.setState({supplyList: newSupply});
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

    componentDidMount(){
        this.getSupplyCategories();
    }

    render () {
        const { name, school, about, supplyList, supplyCategories } = this.state;
        return(
            <form action="" className='student-register-form'>
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
                    {supplyList.map((item , index) => (
                    <SelectSchoolSupply 
                        setItem={event => this.setItem(index, event)}
                        removeItem={event => this.removeItemFromList(index, event)}
                        key={index} 
                        value={item}
                        categories={supplyCategories}
                    />))}
                </div>
                <button onClick={this.addItemToList}>Novo Item</button>
                <button>Finalizar Cadastro</button>
            </form>
        )
    }
}

export default RegisterStudent; 