import { Container } from 'reactstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import Contacto from '../components/contacto';
import '../contactanos.css'

export default function Contactanos(){
    return (
      <>
        <Container fluid className='p-0'>
          <Header />
          <Contacto />
          <Footer />
        </Container>
      </>
    )
  }
  
