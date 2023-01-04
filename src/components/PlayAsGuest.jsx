import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom'

function PlayAsGuest() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Row className="justify-content-center">
        <Col sm={2}>
          <Button
            variant="success"
            size="lg"
            onClick={() => setOpen(!open)}
            aria-controls="collapsable username input text field"
            aria-expanded={open}
          >
            Play as Guest
          </Button>
        </Col>

      </Row>
      <br />
      <Collapse in={open}>
        <Row>
          <Form>
            <Row className="align-items-center justify-content-center">
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                  Username
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    id="inlineFormInputGroupUsername"
                    placeholder="Username"
                  />
                </InputGroup>
              </Col>

              <Col xs="auto" className="my-1">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck2"
                  label="Remember me"
                />
              </Col>

              <Col xs="auto">
                <Link to="/setup">
                  <Button type="submit" className="mb-2">
                    Submit
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Row>
      </Collapse>
    </>
  )
}

export default PlayAsGuest
