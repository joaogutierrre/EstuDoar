import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import './Navbar.css'
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
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <span>EstuDoar</span> 
                        <IoBookSharp />
                    </Link>
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <AiOutlineMenu className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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