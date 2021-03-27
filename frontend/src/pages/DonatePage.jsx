import React, { Component } from 'react';

class DonatePage extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1499323888381-7fd102a793de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="Foto do Estudante"
          />
        </div>
        <div className="about-student">
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
        <div className="donation-list-container">
          <ul>
            <li>Caderno</li>
            <li>Caderno</li>
            <li>Caderno</li>
            <li>Caderno</li>
            <li>Caderno</li>
          </ul>
        </div>
        <div className="button-container">
          <button>Finalizar Doação</button>
        </div>
      </div>
    );
  }
}

export default DonatePage;
