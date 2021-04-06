import React, { Component } from 'react';
import SelectSchoolSupply from '../components/SelectSchoolSupply';
import './RegisterStudent.css';
import * as database from '../services/databaseApi'
import { Redirect } from 'react-router';

class RegisterStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            school: '',
            about: '',
            items: [],
            supplyCategories: [],
            ufs: [],
            cities: [],
            isDone: false,
            currentUFValues: '',
            newData: false,
            city: '',
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.setItem = this.setItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getSupplyCategories = this.getSupplyCategories.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.getCitiesList = this.getCitiesList.bind(this);
        this.getUFsList = this.getUFsList.bind(this);
    }

    getUFsList(){
        database.getBrazilUFs().then((ufs) => this.setState({ ufs }));
      }
  
      getCitiesList(){
        const { currentUFValues } = this.state;
        const id = currentUFValues.split(",", 1);
        database.getBrazilCitiesByUF(id).then((cities) => this.setState({ cities }));
        this.setState({newData: false})
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
            quantity: 1,
            donated: 0,
        };
        this.setState(({items}) => ({items: [...items, newItem ]}));
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

        this.setState({newData: true})
    }

    getSupplyCategories() {
        database.getSchoolSupplyCategories().then(({ categories }) => {
            categories.sort((a,b) => {
                if(a.name < b.name) {
                    return -1;
                }
                if(a.name > b.name) {
                    return 1;
                }
                return 0;
             });
            this.setState({ supplyCategories: categories })});
    }

    handleRegister(event) {
        event.preventDefault();
        const {name, school, about, items, age, city, currentUFValues} = this.state;
        const uf = currentUFValues.split(',')[1];
        const accessToken = localStorage.getItem("estudoar");
        const student = {
            name,
            age,
            uf,
            city,
            school,
            about,
            image: "",
            items,
        };
        student.items.sort((a,b) => {
            if(a.category < b.category) {
                return -1;
            }
            if(a.category > b.category) {
                return 1;
            }
            return 0;
         });

            database.setStudent(student, accessToken);
            this.setState({ isDone: true }) 
    }

    componentDidMount(){
        this.getSupplyCategories();
        this.getUFsList();
    }

    render () {
        const { name, school, about, items, supplyCategories, age, isDone, ufs, cities, currentUFValues, newData} = this.state;
        if (currentUFValues.length && newData) {
            this.getCitiesList();
        }
        return(
            <form className='student-register-form'>
                <h2 className="bg-marker default-title">ADICIONAR ESTUDANTE</h2>
                    <input
                        className="txt-input"
                        type="text"
                        name="name"
                        value={name} 
                        onChange={this.handleInputChange}
                        placeholder="Nome do estudante"
                    />
                    <label className="f-column">
                        Data de nascimento
                        <input
                            className="txt-input"
                            type="date"
                            name="age"
                            value={age} 
                            onChange={this.handleInputChange}
                            placeholder="Data de nascimento"
                        />
                    </label>
                    <select id="ufs" className="txt-input" name="currentUFValues" onChange={this.handleInputChange}>
                    <option value='35'>Selecione o Estado</option>
                        {ufs.map((uf) => (<option key={ uf.id } value={ [uf.id, uf.sigla] }>{ uf.nome }</option>))}
                    </select>
                    <select id="cities" className="txt-input" name="city" onChange={this.handleInputChange}>
                    <option value="all">Todas as Cidades</option>
                        {cities.map((city) => (<option key={ city.id } value={ city.nome }>{ city.nome }</option>))}
                    </select>
                    <input
                        className="txt-input"
                        type="text"
                        name="school"
                        value={school}
                        onChange={this.handleInputChange}
                        placeholder="Escola atual"
                    />
                    <textarea 
                        className="txt-input txt-area"
                        name="about" 
                        value={about} 
                        onChange={this.handleInputChange} 
                        placeholder="Escreva sua hitória aqui"    
                    />
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
                <button className="button-round purple-dark btn-add-list" onClick={this.addItemToList}>Novo Item</button>
                {isDone ? <Redirect to="/student-dashboard"/> :<button className="button-round success btn-add-list" onClick={this.handleRegister}>Finalizar Cadastro</button>}
            </form>
        )
    }
}

export default RegisterStudent; 