import React, { Component } from 'react';
import Hero from '../components/Hero'
import './Home.css'
class Home extends Component {
    render () {
        return(
            <div className='home'>
                <Hero />
                <div className="history-container">
                    <div className="history-image-container">
                        <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae est quas quasi totam delectus ipsum, omnis, assumenda distinctio doloribus corrupti iste? Excepturi, hic. Aperiam libero recusandae aspernatur eveniet hic.</p>
                </div>
                <div className="history-container">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae est quas quasi totam delectus ipsum, omnis, assumenda distinctio doloribus corrupti iste? Excepturi, hic. Aperiam libero recusandae aspernatur eveniet hic.</p>
                    <div className="history-image-container">
                        <img src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;