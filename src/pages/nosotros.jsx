import { Container } from 'reactstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import Nosotros from '../components/nosotros';

export default function Home(){
    return (
      <>
        <Container fluid className='p-0'>
          <Header />
          <Nosotros />
          <Footer />
        </Container>
      </>
    )
  }
  
