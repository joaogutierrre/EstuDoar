import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import './Navbar.css'
import logo from '../assets/logo.svg'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
    }

    handleClick() {
        let { click } = this.state;
        click = !click
        this.setState({ click });
    }

    closeMobileMenu() {
        this.setState({ click: false});
    }

    render() {
        const { click } = this.state;

        return (
            <nav className="navbar bg-white txt-purple-dark">
                <Link to="/" className="navbar-container">

                        <img src={logo}></img>
                        <span>EstuDoar</span> 
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    <AiOutlineMenu className={click ? 'fas fa-times' : 'fas'} />
                </div>
                <ul className={click ? 'nav-menu active bg-white' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/donation-feed' className='nav-links' onClick={this.closeMobileMenu}>
                            Quero Doar
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/get-donation' className='nav-links' onClick={this.closeMobileMenu}>
                            Receber Doação
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={this.closeMobileMenu}>
                            Sobre Nós
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;