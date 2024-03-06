import { useState } from 'react'
import { Container } from 'reactstrap';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {

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

export default App
