import { Container } from 'reactstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import Nosotross from '../components/nosotros';
import '../App.css'

export default function Nosotros(){
    return (
      <>
        <Container fluid className='p-0'>
          <Header />
          <Nosotross />
          <Footer />
        </Container>
      </>
    )
  }
  
