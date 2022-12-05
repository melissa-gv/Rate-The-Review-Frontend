import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Home() {
  const logoStyle = {
    width: '450px',
    height: '450px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1px',
  }

  return (
    <Container>
      <Row>
        <Image src="Rate-the-Review-logos-white.png" style={logoStyle} />
      </Row>
      <Row style={{ textAlign: 'center' }}>
        <h4>Guess the Yelp review ratings of your local restaurants.</h4>
      </Row>
      <br />
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <Link to="/setup"><Button variant="success">Play</Button></Link>
        </Col>
      </Row>
      <br />
      <Row style={{ fontWeight: 300, textAlign: 'center' }}>
        <Col>
          <p>
            {' '}
            Already have an account?
            {' '}
            <Link to="/login">Log in</Link>
          </p>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col xs lg="4">
          <h5>How to Play</h5>
          <ol>
            <li>Enter your zip code</li>
            <li>Read random review of random local restaurant</li>
            <li>Guess the review rating in 15 seconds or less</li>
            <li>5 rounds total!</li>
            <li>Enjoy!</li>
          </ol>
        </Col>
        <Col xs lg="4">
          <h5>Scoring</h5>
          <ul>
            <li>5 points for accurate guess</li>
            <li>3 points for being 1 point away</li>
            <li>-3 for being 2+ points away</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
