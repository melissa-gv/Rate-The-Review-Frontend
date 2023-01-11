import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import firebase from 'firebase/compat/app'

function AppNavbar({ currentUser, isLoggedIn, setIsLoggedIn }) {
  const logout = () => {
    firebase.auth().signOut()
    setIsLoggedIn(false)
    console.log('logged out')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="play">Play</Nav.Link>
            <Nav.Link href="results">Results</Nav.Link>
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
