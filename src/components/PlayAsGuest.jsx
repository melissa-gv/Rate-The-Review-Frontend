import React, { useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import { useNavigate } from 'react-router-dom'

const { VITE_BACKEND_HOST } = import.meta.env

function PlayAsGuest({ currentUser, setCurrentUser }) {
  const [open, setOpen] = useState(false)
  const [isValidUsername, setIsValidUsername] = useState(undefined)

  const navigate = useNavigate()

  const handleGuestUsernameChange = (e) => {
    e.preventDefault()
    setCurrentUser({ username: e.target.value })
    setIsValidUsername(true)
    if (e.target.value.length === 0) {
      setIsValidUsername(false)
    }
  }

  const handleSubmitGuestUsername = (event) => {
    event.preventDefault()
    if (isValidUsername) {
      axios.post(`${VITE_BACKEND_HOST}/auth`, { params: currentUser })
        .catch((err) => {
          console.log(err)
        })
        .then(() => {
          navigate('/setup')
        })
    }
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <Button
            variant="success"
            size="lg"
            onClick={() => setOpen(!open)}
            aria-controls="collapses username input text field"
            aria-expanded={open}
          >
            Play as Guest
          </Button>
        </Col>

      </Row>
      <br />
      <Collapse in={open}>

        <Form noValidate onSubmit={handleSubmitGuestUsername}>
          <Row className="align-items-center justify-content-center">
            <Form.Group as={Col} md="4" className="my-1">
              <Form.Label htmlFor="inlineFormInputGroupUsername">Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  onChange={handleGuestUsernameChange}
                  required
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  id="inlineFormInputGroupUsername"
                  maxLength="20"
                  isValid={isValidUsername}
                  isInvalid={!isValidUsername}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a username if playing as a guest.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="align-items-center justify-content-center my-1">
            <Col xs="auto" className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>

      </Collapse>
    </>
  )
}

export default PlayAsGuest
