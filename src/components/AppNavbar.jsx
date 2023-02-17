import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import firebase from 'firebase/compat/app'

function AppNavbar({ currentUser, isLoggedIn }) {
  const navigate = useNavigate()

  const logout = () => {
    firebase.auth().signOut()
    navigate('/')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="/Rate-the-Review-logos-black-cropped.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          Rate The Review
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-md-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link active">Home</NavLink>
            <NavLink to={currentUser.username ? 'setup' : '/'} className="nav-link active">Play</NavLink>
            <NavLink to="leaderboard" className="nav-link active">Leaderboard</NavLink>
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
