import React from 'react';
import {
    Container,
} from 'reactstrap';

import InteractionHub from './interactionHub'
import ContactSection from './contactSection'

function Contacto(args) {

    return (
        <Container fluid className="contctanos">
            <InteractionHub />
            <ContactSection />
        </Container>
    );
}

export default Contacto;