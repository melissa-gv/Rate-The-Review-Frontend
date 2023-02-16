import React, { useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import { useNavigate } from 'react-router-dom'

const { VITE_HOST } = import.meta.env

function PlayAsGuest({ currentUser, setCurrentUser }) {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleGuestUsernameChange = (e) => {
    e.preventDefault()
    setCurrentUser({ username: e.target.value })
  }

  const handleSubmitGuestUsername = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      axios.post(`${VITE_HOST}/auth`, { params: currentUser })
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

            <Form.Group as={Col} md="4" className="my-1 was-validated">
              <Form.Label htmlFor="inlineFormInputGroupUsername">Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  @
                </InputGroup.Text>
                <Form.Control
                  onChange={handleGuestUsernameChange}
                  required
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  id="inlineFormInputGroupUsername"
                  maxLength="12"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username if playing as a guest.
                </Form.Control.Feedback>

              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="align-items-center justify-content-center my-2">
            <Col xs="auto" className="my-1">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck2"
                label="Remember me"
              />
            </Col>

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
