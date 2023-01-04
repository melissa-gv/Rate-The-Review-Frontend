import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { Link } from 'react-router-dom'
import AuthenticationUI from './AuthenticationUI'
import PlayAsGuest from './PlayAsGuest'

function Home({
  currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn,
}) {
  const logoStyle = {
    width: '450px',
    height: '450px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1px',
  }

  const authCardStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1px',
    width: '20rem',
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
      {
        isLoggedIn
          ? (
            <Row>
              <Link to="/setup"><Button variant="success" size="lg">Play</Button></Link>
            </Row>
          )
          : (
            <>
              <PlayAsGuest />
              <br />
              <Card bg="dark" text="light" style={authCardStyle}>
                <Card.Body>
                  <Row>
                    <h5> Or create an account</h5>
                  </Row>
                  <Row>
                    <AuthenticationUI
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </Row>
                </Card.Body>
              </Card>
            </>
          )
      }

      <br />
      <Row className="justify-content-center" xs={1} sm={1} md={2}>
        <Col md={3}>
          <h5 style={{ textAlign: 'center' }}>How to Play</h5>
          <ol style={{ textAlign: 'left' }}>
            <li>Enter zip code</li>
            <li>Read review of random local restaurant</li>
            <li>You have 15 seconds to guess the review&apos;s rating</li>
            <li>6 rounds total!</li>
            <li>Enjoy!</li>
          </ol>
        </Col>
        <Col md={3}>
          <h5 style={{ textAlign: 'center' }}>Scoring</h5>
          <ul style={{ textAlign: 'left' }}>
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
