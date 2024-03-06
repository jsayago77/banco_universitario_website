import React, { useState } from 'react';
import mainContent from '../assets/meet.png';
import transfers from '../assets/transfers.png';
import deposits from '../assets/deposits.png';
import withdraws from '../assets/withdraws.png';
import enrollment from '../assets/enrollment.png';
import scholarship from '../assets/scholarship.png';
import becasEstudiantes from '../assets/becas-estudiantes.png';
import services from '../assets/services.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import {
    Col,
    Container,
    Row,
    Card,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

function Main(args) {

    return (
        <Container fluid className="p-0">
            <Row>
                <Col className='background-image'>
                    <img src={mainContent} />
                </Col>
                <Col className='card-custom'>
                    <Card body>
                        <CardTitle tag="h3">
                            <b>Tus finanzas en <br /> nuestas manos</b>
                        </CardTitle>
                        <CardText>
                            El único banco de Venezuela sólo para <br /> universitarios, ven y conoce los servicios que <br /> ofrecemos para ti.
                        </CardText>
                        <Button>
                            Conoce más sobre nosotros
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='services-container my-5'>
                    <Row className='titles-section'>
                        <h6 className='mini-title'>SERVICIOS</h6>
                        <h2 className='big-title'>Opciones justo a la medida</h2>
                        <h4 className='medium-title'>de tus necesidades financieras</h4>
                    </Row>
                    <Row className='services-grid-container'>
                        <Row className='px-0'>
                            <Col className='px-0 pe-3'>
                                <Card className='services-card rounded-4'>
                                    <div></div>
                                    <img src={transfers} alt="Transferencias entre estudiantes" />
                                    <CardTitle tag="h6">Transferencias entre estudiantes</CardTitle>
                                    <CardText>Ofrece servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el inntercambio  de dinero entre los estuidiantes. Este servicio permite transferir dinero de manera rapida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.</CardText>
                                </Card>
                            </Col>
                            <Col className='px-0'>
                                <Card className='services-card rounded-4'>
                                    <div></div>
                                    <img src={deposits} alt="Depositos en efectivo" />
                                    <CardTitle tag="h6">Depósitos en efectivo</CardTitle>
                                    <CardText>Permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.</CardText>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='px-0'>
                            <Col className='px-0 pe-3'>
                                <Card className='services-card rounded-4'>
                                    <div></div>
                                    <img src={withdraws} alt="Retiros en efectivo" />
                                    <CardTitle tag="h6">Retiros en efectivo</CardTitle>
                                    <CardText>Permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.</CardText>
                                </Card>
                            </Col>
                            <Col className='px-0'>
                                <Card className='services-card rounded-4'>
                                    <div></div>
                                    <img src={enrollment} alt="Pago de matrícula estudiantil" />
                                    <CardTitle tag="h6">Pago de matrícula estudiantil</CardTitle>
                                    <CardText>Ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten.</CardText>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='px-0'>
                            <Card className='services-card rounded-4 last-service'>
                                <div>
                                    <img src={scholarship} alt="Cobro de becas estudiantiles" />
                                    <CardTitle tag="h6">Cobro de becas estudiantiles</CardTitle>
                                    <CardText>Permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.</CardText>
                                </div>
                                <img src={becasEstudiantes} className='back-image' alt="Cobro de becas estudiantiles" />
                            </Card>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row className='process'>
                <Col className='d-flex justify-content-center align-items-start'>
                    <img src={services} alt="services" />
                </Col>
                <Col>
                    <Row className='titles-section'>
                        <h6 className='mini-title'>PROCESO</h6>
                        <h2 className='big-title'>Empieza a hacer transferencias</h2>
                    </Row>
                    <Row className='process-desc '>
                        <h6><b>Registrate</b></h6>
                        <p>Crea un cuenta en nuestra banca en linea, no te olvides de tener una contraseña segura.</p>
                        <h6><b>Edita tu perfil</b></h6>
                        <p>Inicia sesión con tus credenciales, y complementa tu perfil para poder identficarte mejor.</p>
                        <h6><b>Transferencias</b></h6>
                        <p>Una vez hayas agregado a tu lista nuevos contactos, podrás hacer transfetencias y ver tus movimientos en tiempo real.</p>
                        <Button className='banca-online-btn mt-3'>
                            <FontAwesomeIcon icon={faLocationArrow} size='xl' className='banca-btn-icon' />
                            Ir a la banca en línea
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;