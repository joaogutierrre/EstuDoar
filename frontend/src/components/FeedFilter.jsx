import React, { Component } from 'react';
import './FeedFilter.css';

class FeedFilter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        states: [],
        cities: [],
        schools: [],
      }
    }
    
  render() {
    return (
      <div>
        <form className="filter-form">
            <select id="states">
              <option value={ null }>Selecione o Estado</option>
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