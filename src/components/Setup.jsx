/* eslint-disable no-console */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

function Setup({
  setReviews, reviews, setBusinesses, zipcode, setZipcode,
}) {
  const [isStarted, setIsStarted] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    // FIXME - should this setZipCode be set in a variable then set as state on form submission
    setZipcode(e.target.value)
  }

  const handleZipcodeSubmit = (e) => {
    e.preventDefault()
    // FIXME - rename this variable to more clearly define its purpose
    setIsStarted(true)
    // FIXME - path prefix should be an ENV variable
    axios.get('http://localhost:3000/businesses', { params: { location: zipcode } })
      .then((response) => {
        console.log('Setup response:', response.data)
        setBusinesses(response.data.businesses)
        setReviews(response.data.reviews)
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        navigate('/play')
      })
  }

  return (
    <Container className="justify-content-md-center">
      <br />
      <Row>
        <Col>
          <h2>Enter zipcode:</h2>
        </Col>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="formZipcode">
          <Form.Label style={{ color: 'white' }}>Zipcode</Form.Label>
          <Form.Control onChange={handleChange} type="number" placeholder="Zipcode" maxLength="5" required />
        </Form.Group>
        {isStarted && reviews.length === 0
          ? (
            <Button variant="success" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
              {' '}
              Loading...
              {' '}
            </Button>
          )
          : (
            <Button onClick={handleZipcodeSubmit} variant="success" type="submit">
              Start
            </Button>
          )}
      </Form>
    </Container>
  )
}

export default Setup
