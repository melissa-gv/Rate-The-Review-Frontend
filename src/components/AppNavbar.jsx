import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import firebase from 'firebase/compat/app'

function AppNavbar({ currentUser, isLoggedIn }) {
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    firebase.auth().signOut()
    navigate('/')
  }

  return (
    <Navbar expanded={expanded} bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <img
              alt="logo"
              src="/Rate-the-Review-logos-black-cropped.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Rate the Review
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-md-0" style={{ maxHeight: '115px' }}>
            <Link onClick={() => setExpanded(false)} className="nav-link" to="/">Home</Link>
            <Link onClick={() => setExpanded(false)} className="nav-link" to={currentUser.username ? 'setup' : '/'}>Play</Link>
            <Link onClick={() => setExpanded(false)} className="nav-link" to="leaderboard">Leaderboard</Link>
          </Nav>

          {isLoggedIn
            ? (
              <>
                <Navbar.Text>
                  {`Signed in as: ${currentUser.username}`}
                </Navbar.Text>
                &nbsp;
                &nbsp;
                <Button variant="outline-danger" onClick={logout}>Signout</Button>
              </>
            )
            : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
