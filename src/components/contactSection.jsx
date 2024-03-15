import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import Check from '../assets/check.svg'
import Contact2 from '../assets/contact2.png'
import Icon5 from '../assets/icon-5.svg'
import Icon6 from '../assets/icon-6.svg'
import Icon7 from '../assets/icon-7.svg'
import Background from '../assets/background.svg'

const ContactSection = () => {

  return (
    <>
      <section className="contact-section">
        <div className="contact-us-title">
          <div className="about">
            <div className="content3">
              <div className="title">
                <div className="contactctanos">Contactáctanos</div>
              </div>
              <div className="text">
                <h1 className="tienes-preguntas-o-container">
                  <p className="tienes-preguntas-o">
                    Tienes preguntas o necesitas
                  </p>
                  <p className="asesoramiento">asesoramiento?</p>
                </h1>
                <div className="en-el-banco">
                  En el Banco Universitario, entendemos que la vida
                  universitaria viene con sus propios desafíos y oportunidades.
                  Por eso, nuestro equipo está dedicado a ofrecerte el apoyo
                  financiero y el asesoramiento que necesitas para hacer que tu
                  experiencia universitaria sea lo más fructífera posible.
                </div>
              </div>
              <div className="phone-icon">
                <img className="icon3" alt="" src={Check} />
                <div className="quieres-saber-ms">
                  Quieres saber más sobre opciones de transferencias entre
                  estudiantes
                </div>
              </div>
              <div className="phone-icon1">
                <img className="icon4" alt="" src={Check} />
                <div className="necesitas-orientacin-sobre">
                  Necesitas orientación sobre préstamos estudiantiles, o
                  simplemente quieras consejos para manejar tus finanzas,
                  estamos aquí para ayudarte.
                </div>
              </div>
            </div>
            <img className="image-icon1" alt="" src={Contact2} />
          </div>
          <div className="icon-frame">
            <div className="office-hours-title">
              <div className="time-frame">
                <div className="mon-fri-text">
                  <div className="open-close-times">
                    <div className="address-frame text-center">
                      <b className="contact-infobox-title fs-1">1128+</b>
                    </div>
                    <div className="trabajos-satisfactorios">
                      Trabajos satisfactorios
                    </div>
                  </div>
                  <div className="open-close-times1">
                    <div className="wrapper">
                      <b className="b fs-1">50+</b>
                    </div>
                    <div className="miembros-del-equipo">
                      Miembros del Equipo
                    </div>
                  </div>
                  <div className="open-close-times2">
                    <div className="container">
                      <b className="b1 fs-1">258+</b>
                    </div>
                    <div className="estudiantes-felices">
                      Estudiantes Felices
                    </div>
                  </div>
                </div>
              </div>
              <div className="tick-mark">
                <div className="suggestion-box">
                  <div className="execute-key">
                    <div className="i-d-signpost">
                      <div className="button1">
                        <div className="formulario-de-contacto">
                          Formulario de contacto
                        </div>
                      </div>
                      <h1 className="contactnos-de-manera">
                        Contactános de manera rápida
                      </h1>
                    </div>
                    <div className="te-responderemos-en">
                      Te responderemos en la brevedad posible, gracias por
                      contactarnos
                    </div>
                  </div>
                  <div className="content4">
                    <div className="call">
                      <div className="speech-bubble">
                        <img className="icon5" alt="" src={Icon5} />
                      </div>
                      <div className="llamanos-parent">
                        <div className="llamanos">Llamanos</div>
                        <div className="name-container">+58 212-555-5555</div>
                      </div>
                    </div>
                    <div className="time1">
                      <img className="icon6" alt="" src={Icon6} />
                      <div className="input-labels">
                        <div className="form-fields">
                          <div className="lunes-a-domingo">Lunes a Domingo</div>
                          <div className="am-a-9pm">8 am a 9pm</div>
                        </div>
                      </div>
                    </div>
                    <div className="address">
                      <div className="frame-parent">
                        <img className="icon7" alt="" src={Icon7} />
                      </div>
                      <div className="content-frame">
                        <div className="oficinas">Oficinas</div>
                        <div className="av-universidad-edificio-container">
                          <p className="av-universidad-edificio1">{`1Av. Universidad, Edificio Banco Universitario, piso 12, `}</p>
                          <p className="caracas-venezuela">
                            Caracas, Venezuela.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Form>
                  <div className="semicolon-divider">
                    <FormGroup>
                      <Label>Nombre Completo</Label>
                      <div className="text1">
                        <Input
                          className='rounded-pill p-3'
                          placeholder="Nombre"
                          type="text"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label>Email</Label>
                      <div className="text2">
                        <Input
                          className='rounded-pill p-3'
                          placeholder="example@mail.com"
                          type="email"
                        />
                      </div>
                    </FormGroup>
                  </div>
                  <div className="semicolon-divider1">
                    <FormGroup>
                      <Label>Teléfono</Label>
                      <div className="text3">
                        <Input
                          className='rounded-pill p-3'
                          placeholder="0000-000-0000"
                          type="text"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label>Empresa (opcional)</Label>
                      <div className="text4">
                        <Input
                          className='rounded-pill p-3'
                          placeholder="tucompania"
                          type="text"
                        />
                      </div>
                    </FormGroup>
                  </div>
                  <FormGroup>
                    <div className="message">
                      <Label>Mensaje</Label>
                      <Input className='p-3' type="textarea" />
                    </div>
                  </FormGroup>
                  <Button className="rounded-pill p-3 button2" style={{ backgroundColor: "#085F63" }}>
                    <div className="enviar-mensaje">Enviar Mensaje</div>
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <Row className="frame-container justify-content-center my-4 p-5 rounded-4">
            <img className="background-icon" alt="" src={Background} />
            <Col className="design-foundation">
              <h2 className="quieres-aserora-personalizada text-white fs-3">
                ¿Quieres Aseroría personalizada?
              </h2>
              <b className="te-contactremos-por text-white">
                Te contactáremos por correo electrico para darte un recorrido
                por la aplicación
              </b>
            </Col>
            <Col className="content-parent flex-row p-3">
              <div className="">
                <Input
                  className="rounded-pill p-3"
                  placeholder="Tu correo electrónico"
                  type="text"
                />
              </div>
              <div className="px-4">
                <Button className=" rounded-pill p-3 px-5" style={{ backgroundColor: "#085F63" }}>
                  Enviar
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
