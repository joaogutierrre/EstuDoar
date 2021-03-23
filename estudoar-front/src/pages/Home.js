import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <section className='hero-container'>
                    <h1>Bem-Vindo <br /> a <br />Estudoar</h1>
                    <p>auxiliando a educação ao seu redor</p>
                    <div className='hero-buttons-container'>
                        <button type='button' className='register'>Cadastre-se</button>
                        <button type='button'>Já sou Cadastrado</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;