import React, { useState } from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';

import overview from '../assets/overview.png';
import nosotros from '../assets/nosotros.png';
import mision from '../assets/mision.png';
import vision from '../assets/vision.png';

function Nosotros(args) {

    return (
        <Container fluid>
            <Row>
                <Col className='background-image px-0'>
                    <img src={nosotros} alt="Nosotros" />
                </Col>
                <Col className='card-custom start-0 ms-5'>
                    <Card body>
                        <h6 className='mini-title'>NOSOTROS</h6>
                        <h2 className='big-title'>Más que un banco, <br /> somos una familia.</h2>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5 justify-content-center'>
                <Col md="8">
                    <Card>
                        <img src={overview} alt="Overview" />
                        <CardBody className='services-card'>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                NOSOTROS
                            </CardSubtitle>
                            <CardTitle tag="h5">
                                Somos Banco Universitario
                            </CardTitle>
                            <CardText>
                                El Banco Universitario tiene 5 años en el mercado, nos dedicamos a empoderar a los estudiantes universitarios a través de soluciones financieras ágiles y eficaces, diseñadas específicamente para facilitar la gestión de sus recursos con el máximo de conveniencia. Nuestra esencia radica en la comprensión profunda de las necesidades de nuestros clientes, por lo que nos hemos comprometido a ofrecer una experiencia bancaria que no solo sea funcional, sino también educativa y enriquecedora. Con una suite de servicios financieros que incluye transferencias entre estudiantes sin comisiones, depósitos y retiros en efectivo accesibles, y facilidades para el pago de matrículas y el cobro de becas, nos esforzamos por ser más que un banco; aspiramos a ser un aliado estratégico en el viaje educativo y personal de cada estudiante. Nuestro enfoque en la innovación y la mejora continua nos impulsa a estar siempre a la vanguardia, asegurando que cada interacción con Banco Universitario sea segura, eficiente y adaptada a la vida universitaria.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col md="4" className="d-flex align-items-center justify-content-center">
                    <img src={mision} alt="Mision" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
                <Col md="4" className="d-flex align-items-center">
                    <div>
                        <h2>Misión</h2>
                        <p>Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.</p>
                    </div>
                </Col>
            </Row>
            <Row className="my-5 justify-content-center">
                <Col md="4" className="d-flex align-items-center">
                    <div>
                        <h2>Visión</h2>
                        <p>Queremos ser la mejor opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social.</p>
                    </div>
                </Col>
                <Col md="4" className="d-flex align-items-center justify-content-center">
                    <img src={vision} alt="Mision" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    );
}

export default Nosotros;