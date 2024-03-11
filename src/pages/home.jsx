import { Container } from 'reactstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';

export default function Home(){
    return (
      <>
        <Container fluid className='p-0'>
          <Header />
          <Main />
          <Footer />
        </Container>
      </>
    )
  }
  