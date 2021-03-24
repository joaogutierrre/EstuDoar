import React, { Component } from 'react';
import Hero from '../components/Hero'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Hero />
                <section className='brand-phrase'>
                    <h2>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    </h2>
                </section>
                <div className='students-image'/>
                
            </div>
        );
    }
}

export default Home;