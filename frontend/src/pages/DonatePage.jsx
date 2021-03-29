import React, { Component } from 'react';
import './DonatePage.css'
class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolSupplies: [
        {
          name: 'Caderno',
          quantity: 3,
          donated: 0,
        },
        {
          name: 'Lapis',
          quantity: 3,
          donated: 0,
        },
        {
          name: 'Caneta',
          quantity: 3,
          donated: 0,
        },
      ],
    };
  }
  render() {
    const { schoolSupplies } = this.state;
    const itemsList = schoolSupplies.map((item, index) => {
      const maxDonateQuantity = [...Array(item.quantity - item.donated + 1).keys()];
      return (
      <div className="item-container" key={index}>
        <li className="supply-item">
          {item.quantity} x {item.name}(s)
        </li>
        <label className="supply-donate">
          Doar:
          <select>
            {maxDonateQuantity.map((unit, index) => (<option key={index} value={unit}>{unit} Unidade(s)</option>))}
          </select>
        </label>
      </div>
    )});
    return (
      <div className="donate-page">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1499323888381-7fd102a793de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="Foto do Estudante"
          />
        </div>
        <div className="about-student">
          <h3>Bruna Souza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            inventore facere quia perspiciatis praesentium culpa labore aut,
            magni explicabo eligendi aliquam esse optio dignissimos mollitia
            quis expedita voluptates repellat ducimus!
          </p>
          <p>
            Iusto vitae doloremque dolor sint fuga quos ullam. Alias veniam
            praesentium tempore delectus, hic, dolor ad maiores at, ut facere
            doloribus excepturi officiis aliquid quas animi libero adipisci
            deleniti corporis.
          </p>
        </div>
        <div className="list-container">
          <h3>Lista de Materiais</h3>
          <ul>{itemsList}</ul>
        </div>
        <div className="button-container">
          <button>Finalizar Doação</button>
        </div>
      </div>
    );
  }
}

export default DonatePage;
