import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-no-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faCircle, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='navbar-custom'>
            <Nav className='navbar-info'>
                <NavItem>
                    <FontAwesomeIcon icon={faClock} style={{color: "#FFCC4A"}} />
                    Lunes - Viernes 8AM - 9PM
                </NavItem>
                <NavItem>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFCC4A"}} />
                    Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela
                </NavItem>
                <NavItem className='navbar-Socials'>
                    <FontAwesomeIcon icon={faInstagram} size='xl' />
                    <FontAwesomeIcon icon={faFacebook} size='xl' />
                    <FontAwesomeIcon icon={faTwitter} size='xl' />
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                </NavItem>
            </Nav>
            <Navbar container='fluid' expand='lg' full='true' className="navbar-main">
                <NavbarBrand href="/">
                    <img src={logo} width="195" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto navbar-menu" navbar>
                        <NavItem>
                            <Link className='nav-link' to="/">
                                <FontAwesomeIcon icon={faCircle} size='xs' />
                                Inicio
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to="/#servicios">
                                <FontAwesomeIcon icon={faCircle} size='xs' />
                                Servicios
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to="/nosotros">
                                <FontAwesomeIcon icon={faCircle} size='xs' />
                                Nosotros
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to="/contactanos">
                                <FontAwesomeIcon icon={faCircle} size='xs' />
                                Contáctanos
                            </Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button className='navbar-btn'> 
                            <FontAwesomeIcon icon={faLocationArrow} size='xl' className='banca-btn-icon'/>
                            Ir a la banca en línea
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;