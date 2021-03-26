import React, { Component } from 'react';

class FeedFilter extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="states">
            Estados
            <select id="states">
              <option value={ null }>Selecione o Estado</option>
            </select>
          </label>
          <label htmlFor="cities">
            Cidades
            <select id="cities">
              <option value="all">Todas as Cidades</option>
            </select>
          </label>
          <label htmlFor="schools">
            Escolas
            <select id="schools">
              <option value="all">Todas as Escolas</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FeedFilter;
