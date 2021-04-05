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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae est quas quasi totam delectus ipsum, omnis, assumenda distinctio doloribus corrupti iste? Excepturi, hic. Aperiam libero recusandae aspernatur eveniet hic.</p>
                </div>
                <div className="history-container">
                    <h2 className="home-title"><span className="txt-circle">Por </span>que doar material é importante?</h2>
                    <div className="history-image-container">
                        <img src={imgMotivo} alt=""/>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae est quas quasi totam delectus ipsum, omnis, assumenda distinctio doloribus corrupti iste? Excepturi, hic. Aperiam libero recusandae aspernatur eveniet hic.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;