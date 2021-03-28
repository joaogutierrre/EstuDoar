import React, { Component } from 'react';
import './FeedFilter.css';
import * as database from '../services/databaseApi'

class FeedFilter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        ufs: [],
        cities: [],
        schools: [],
        selectUF: '',
        selectCitie: '',
        selectSchool: '',
      }
      this.setUFsList = this.setUFsList.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    setUFsList(){
      database.getBrazilUFs().then((ufs) => this.setState({ ufs }));
    }

    handleInputChange({ target }) {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    componentDidMount() {
      this.setUFsList();
    }
    
  render() {
    const { ufs, selectUF, selectCitie } = this.state;
    return (
      <div>
        <form className="filter-form">
            <select id="states" name="selectUF" onChange={this.handleInputChange}>
              <option value={ null }>Selecione o Estado</option>
              {ufs.map((uf) => (<option key={ uf.id } value={ uf.id }>{ uf.nome }</option>))}
            </select>
            <select id="cities">
              <option value="all">Todas as Cidades</option>
            </select>
            <select id="schools">
              <option value="all">Todas as Escolas</option>
            </select>
        </form>
      </div>
    );
  }
}

export default FeedFilter;