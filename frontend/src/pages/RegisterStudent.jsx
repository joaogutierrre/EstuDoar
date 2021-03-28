import React, { Component } from 'react';
import SelectSchoolSupply from '../components/SelectSchoolSupply';
import './RegisterStudent.css';

class RegisterStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            school: '',
            supplyList: [{
                id: '',
                name: '',
                quantity: '',
            }],
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.setItem = this.setItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    setItem(index, event) {
        console.log(index, event);
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

    render () {
        const { name, school, supplyList } = this.state;
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
                <div className="list-container">
                    {supplyList.map((item , index) => (
                    <SelectSchoolSupply 
                        setItem={event => this.setItem(index, event)}
                        removeItem={event => this.removeItemFromList(index, event)}
                        key={index} 
                        value={item}
                    />))}
                </div>
                <button onClick={this.addItemToList}>Novo Item</button>
            </form>
        )
    }
}

export default RegisterStudent; 