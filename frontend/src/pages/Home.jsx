import React, { Component } from 'react';
import Hero from '../components/Hero'

class Home extends Component {
    render () {
        return(
            <div className='home'>
                <Hero />
            </div>
        );
    }
}

export default Home;