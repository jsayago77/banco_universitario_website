import React, { useState } from 'react';
import logo from '../assets/logo-no-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faCircle } from '@fortawesome/free-solid-svg-icons';
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
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='navbar-custom'>
            <Nav className='navbar-info'>
                <NavItem>
                    <FontAwesomeIcon icon={faClock} />
                    Lunes - Viernes 8AM - 9PM
                </NavItem>
                <NavItem>
                    <FontAwesomeIcon icon={faLocationDot} />
                    Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela
                </NavItem>
                <NavItem className='navbar-Socials'>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </NavItem>
            </Nav>
            <Navbar container='fluid' expand='lg' full='true' className="navbar-main">
                <NavbarBrand href="/">
                    <img src={logo} width="200" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto navbar-menu" navbar>
                        <NavItem>
                            <NavLink href="/">
                                <FontAwesomeIcon icon={faCircle} />
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#servicios">
                                <FontAwesomeIcon icon={faCircle} />
                                Servicios
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/nosotros">
                                <FontAwesomeIcon icon={faCircle} />
                                Nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contactanos">
                                <FontAwesomeIcon icon={faCircle} />
                                Contáctanos
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><Button className='navbar-btn'> <i>p</i>Ir a la banca en línea</Button></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;