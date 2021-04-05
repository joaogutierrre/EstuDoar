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
        currentUFValues: '',
        newData: false,
        currentCity: '',
        currentSchool: '',
      }
      this.getUFsList = this.getUFsList.bind(this);
      this.getCitiesList = this.getCitiesList.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
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
    const { ufs, cities, currentUFValues, currentCity, currentSchool, newData } = this.state;
    const { handleFilters } = this.props;
    const currentUF = currentUFValues.split(",").slice(-1)[0];
    if (currentUFValues.length && newData) {
      this.getCitiesList();
    }
    return (
      <div className="f-column">
        <form className="filter-form">
            <select id="ufs" className="select-input" name="currentUFValues" onChange={this.handleInputChange}>
              <option value='35'>Selecione o Estado</option>
              {ufs.map((uf) => (<option key={ uf.id } value={ [uf.id, uf.sigla] }>{ uf.nome }</option>))}
            </select>
            <select id="cities" className="select-input" name="currentCity" onChange={this.handleInputChange}>
              <option value="all">Todas as Cidades</option>
              {cities.map((city) => (<option key={ city.id } value={ city.nome }>{ city.nome }</option>))}
            </select>
            <select id="schools" className="select-input" name="currentSchool" onChange={this.handleInputChange}>
              <option value="all">Todas as Escolas</option>
            </select>
        </form>
        <button className="btn-filter button-round purple-dark"type="button" onClick={() => handleFilters(currentUF, currentCity, currentSchool)}>Filtrar</button>
      </div>
    );
  }
}

export default FeedFilter;