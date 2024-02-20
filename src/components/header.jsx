import React, { useState } from 'react';
import logo from '../assets/logo-no-background.png';
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
                    <NavLink href="/">Lunes - Viernes 8AM - 9PM</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Lunes - Viernes 8AM - 9PM</NavLink>
                </NavItem>
            </Nav>
            <Navbar container='fluid' expand='lg' full='true' className="navbar-main">
                <NavbarBrand href="/">
                    <img src={logo} width="200" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#servicios">
                                Servicios
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/nosotros">
                                Nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contactanos">
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