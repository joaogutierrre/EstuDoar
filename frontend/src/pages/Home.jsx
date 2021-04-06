import React, { Component } from 'react';
import Hero from '../components/Hero'
import './Home.css'
import imgObjetivo from '../assets/img-objetivo.jpg';
import imgMotivo from '../assets/img-motivo.jpeg'
class Home extends Component {
    render () {
        return(
            <div className='home'>
                <Hero />
                <div className="history-container">
                    <h2 className="home-title"><span className="txt-circle">Obje</span>tivo EstuDoar</h2>
                    <div className="history-image-container">
                        <img src={imgObjetivo} alt=""/>
                    </div>
                        <h4 className="home-content">Uma forma diferenciada de doar conhecimento através de materiais escolares. </h4>
                    <p className="home-content">O foco é suprir a carência de acesso aos meios que ajudam na promoção de uma educação de qualidade: materiais didáticos, artigos de papelaria e até recursos tecnológicos (devido ao "novo normal").</p>
                </div>
                <div className="history-container">
                    <h2 className="home-title"><span className="txt-circle">Por </span>que doar material é importante?</h2>
                    <div className="history-image-container">
                        <img src={imgMotivo} alt=""/>
                    </div>
                    <div>
                    <h4 className="home-content">A lista de materiais escolares se torna cada vez mais cara, principalmente para os estudantes da educação pública. </h4>
                        <p className="home-content last-p">Pesquisas indicam que gastos com materiais consome 22% do salário do salário médio do país, evidenciando a desigualdade educacional brasileira. A pandemia também prejudica os estudantes com recursos tecnológicos limitados, tornando a utilização de materiais escolares e didáticos ainda mais imprescindível. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;