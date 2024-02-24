import React, { useState } from 'react';
import logo from '../assets/logo-no-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Row,
    Col,
    List,
    ListInlineItem
} from 'reactstrap';

function Footer(args) {

    return (
        <Container className="footer-custom" fluid>
            <Row className="p-5 mx-5">
                <Col className=''>
                    <img src={logo} width="195" />
                    <p className='py-2 px-2'>Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes.</p>
                    <List type="inline">
                        <ListInlineItem>
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                        </ListInlineItem>
                        <ListInlineItem>
                            <FontAwesomeIcon icon={faFacebook} size='lg' />
                        </ListInlineItem>
                        <ListInlineItem>
                            <FontAwesomeIcon icon={faTwitter} size='lg' />
                        </ListInlineItem>
                        <ListInlineItem>
                            <FontAwesomeIcon icon={faLinkedin} size='lg' />
                        </ListInlineItem>
                    </List>
                </Col>
                <Col>
                    <h5><b>Información de Contacto</b></h5>
                    <List type="unstyled">
                        <li>
                            <FontAwesomeIcon icon={faLocationDot} size='xl' />
                            Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} size='xl' />
                            info@bancouniversitario.com.ve
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} size='xl' />
                            +58 212-555-5555
                        </li>
                    </List>
                </Col>
                <Col>
                    <h5><b>Sevicios</b></h5>
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
            <Row className="text-center">
                <p>©2024  All rights reserved | Terms of Service | Privacy Policy</p>
            </Row>
        </Container>
    );
}

export default Footer;