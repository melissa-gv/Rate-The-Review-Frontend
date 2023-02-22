import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

const { VITE_BACKEND_HOST } = import.meta.env

function Setup({
  reviews, setReviews, setBusinesses, location, setLocation, setPoints,
}) {
  const [submittedLoc, setSubmittedLoc] = useState(false)
  const [isValidLoc, setIsValidLoc] = useState(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    setReviews(undefined)
    setPoints(0)
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setLocation(e.target.value)
    if (e.target.value.length === 0) {
      setIsValidLoc(undefined)
    }
  }

  const handleLocationSubmit = (e) => {
    e.preventDefault()
    setSubmittedLoc(true)
    axios.get(`${VITE_BACKEND_HOST}/businesses`, { params: { location } })
      .then((response) => {
        setBusinesses(response.data.businesses)
        setReviews(response.data.reviews)
      })
      .catch(() => {
        setIsValidLoc(false)
        setSubmittedLoc(false)
      })
  }

  useEffect(() => {
    if (reviews !== undefined) {
      navigate('/play')
    }
  }, [reviews])

  return (
    <Container className="justify-content-md-center">
      <br />
      <h2>Enter location:</h2>
      <Form onSubmit={handleLocationSubmit}>
        <Form.Group className="mb-3" controlId="formlocation">
          <Form.Label style={{ color: 'white' }}>Location</Form.Label>
          <Form.Control required onChange={handleChange} placeholder="Location" isInvalid={isValidLoc === undefined ? undefined : !isValidLoc} />
          <Form.Control.Feedback type="invalid">Could not execute search, try specifying a more exact location.</Form.Control.Feedback>
          <Form.Text id="formlocation" muted>
            Examples: &quot;New York City&quot;, &quot;NYC&quot;,
            &quot;350 5th Ave, New York, NY 10118&quot;
          </Form.Text>
        </Form.Group>
        {submittedLoc
          ? (
            <Button variant="success" type="submit" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              &nbsp; Loading...
            </Button>
          )
          : (<Button variant="success" type="submit">Start</Button>)}
      </Form>
    </Container>
  )
}

export default Setup
