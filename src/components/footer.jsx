import React, { useState } from 'react';
import logo from '../assets/logo-no-background.png';
import {
    Container,
    Row,
    Col,
    List
} from 'reactstrap';

function Footer(args) {

    return (
        <Container className="footer-custom" fluid>
            <Row className="p-5">
                <Col>
                    <img src={logo} width="200" />
                    <p className='py-3'>Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes.</p>
                </Col>
                <Col>
                    <h5>Información de Contacto</h5>
                    <List type="unstyled">
                        <li>
                        Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.
                        </li>
                        <li>
                            info@bancouniversitario.com.ve
                        </li>
                        <li>
                            +58 212-555-5555
                        </li>
                    </List>
                </Col>
                <Col>
                    <h5>Sevicios</h5>
                    <List type="unstyled">
                        <li>
                            Transferencias entre estudiantes
                        </li>
                        <li>
                            Depositos en efectivo
                        </li>
                        <li>
                            Retiros en efectivo
                        </li>
                        <li>
                            Pago de mátricula estudiantil
                        </li>
                        <li>
                            Cobro de becas estudiantiles
                        </li>
                    </List>
                </Col>
            </Row>
            <Row className='text-center'>
                <p>©2024  All rights reserved | Terms of Service | Privacy Policy</p>
            </Row>
        </Container>
    );
}

export default Footer;