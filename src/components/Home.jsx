import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Home() {
  const logoStyle = {
    width: '500px',
    height: '500px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1px',
  }

  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Image src="Rate-the-Review-logos-white.png" style={logoStyle} />
      </Row>
      <Row>
        <h4>Guess the Yelp review ratings of your local restaurants.</h4>
      </Row>
      <br />
      <Row>
        <Col>
          <Link to="/signup"><Button variant="success">Signup</Button></Link>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <p>
            {' '}
            Already have an account?
            {' '}
            <Link to="/login">Log in</Link>
          </p>

        </Col>
      </Row>
    </Container>
  )
}

export default Home
