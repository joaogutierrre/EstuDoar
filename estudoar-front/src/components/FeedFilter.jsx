import React, { Component } from 'react';

class FeedFilter extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form>
          <label>
            Estados
            <select>
              <option value={null}>Selecione o Estado</option>
            </select>
          </label>
          <label>
            Cidades
            <select>
              <option value="all">Todas as Cidades</option>
            </select>
          </label>
          <label>
            Escolas
            <select>
              <option value="all">Todas as Escolas</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FeedFilter;
