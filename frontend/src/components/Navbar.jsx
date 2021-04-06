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

                        <img src={logo} alt="Logo da Estudoar"></img>
                        <span>EstuDoar</span> 
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    <AiOutlineMenu className={click ? 'fas fa-times' : 'fas'} />
                </div>
                <ul className={click ? 'nav-menu active bg-white' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/donation-feed' className='nav-links' onClick={this.closeMobileMenu}>
                            DOAR MATERIAL
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/student-login' className='nav-links' onClick={this.closeMobileMenu}>
                            RECEBER DOAÇÃO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/stories' className='nav-links' onClick={this.closeMobileMenu}>
                            INSPIRE-SE
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={this.closeMobileMenu}>
                            FALE CONOSCO
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;