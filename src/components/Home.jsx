import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import AuthenticationUI from './AuthenticationUI'
import PlayAsGuest from './PlayAsGuest'

function Home({ currentUser, setCurrentUser, isLoggedIn }) {
  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Image src="Rate-the-Review-logos-white.png" id="main-homepage-logo" />
      </Row>
      <Row>
        <h4><em>Guess the Yelp review ratings of your local restaurants.</em></h4>
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
              <PlayAsGuest
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
              <br />
              <Card bg="dark" text="light" id="auth-card">
                <Card.Body>
                  <AuthenticationUI />
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
