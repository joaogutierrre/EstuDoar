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
        selectUFId: '',
        newData: false,
        selectCitie: '',
        selectSchool: '',
      }
      this.getUFsList = this.getUFsList.bind(this);
      this.getCitiesList = this.getCitiesList.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    getUFsList(){
      database.getBrazilUFs().then((ufs) => this.setState({ ufs }));
    }

    getCitiesList(){
      const { selectUFId } = this.state;
      database.getBrazilCitiesByUF(selectUFId).then((cities) => this.setState({ cities }));
      this.setState({newData: false})
    }

    handleInputChange({ target }) {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      this.setState({newData: true})
    }

    componentDidMount() {
      this.getUFsList();
    }
    
  render() {
    const { ufs, cities, selectUFId, selectCitie, newData } = this.state;
    if (selectUFId && newData) {
      this.getCitiesList();
    }
    return (
      <div>
        <form className="filter-form">
            <select id="states" name="selectUFId" onChange={this.handleInputChange}>
              <option value='35'>Selecione o Estado</option>
              {ufs.map((uf) => (<option key={ uf.id } value={ uf.id }>{ uf.nome }</option>))}
            </select>
            <select id="cities">
              <option value="all">Todas as Cidades</option>
              {cities.map((city) => (<option key={ city.id } value={ city.id }>{ city.nome }</option>))}
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