import React from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

function Results({ reviews, businesses, points }) {
  const formatDate = (dateStr) => {
    const OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateStr).toLocaleDateString([], OPTIONS)
  }

  return (
    <Container>
      <br />
      <Row>
        <h1 className="text-center">
          {`You got ${points} point${points === 1 ? '' : 's'}!`}
        </h1>
        {'\n'}
      </Row>
      <br />
      <Row>
        {businesses.map((restaurant, index) => (
          <Col className="result-cards" key={restaurant.id}>
            <Card text="dark" style={{ width: '24rem' }}>
              <a href={restaurant.url} target="_blank" rel="noreferrer">
                <Card.Img variant="top" src={restaurant.image_url ? restaurant.image_url : 'placeholder-image.webp'} style={{ cursor: 'pointer', objectFit: 'cover', height: '15rem' }} />
              </a>

              <Card.Body>
                <Card.Title>{`${restaurant.name}`}</Card.Title>
                <Card.Text as="div">
                  <Image src={`/stars/large/stars_large_${restaurant.rating}.png`} />
                  {` (${restaurant.review_count})`}
                  <br />

                  Price:&nbsp;
                  <Badge pill bg="success">
                    {restaurant.price ? `${restaurant.price}` : <span>&ndash;</span>}
                  </Badge>
                  <br />

                  {restaurant.location.address1 ? `${restaurant.location.address1}` : null}
                  {restaurant.location.address2 ? `${restaurant.location.address2}` : null}
                  <br />
                  {`${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`}
                  <br />
                  {`${restaurant.display_phone}`}
                  <br />

                  <Button href={`${restaurant.url}`} target="_blank" style={{ margin: '10px 0px' }} variant="outline-danger">Yelp Page</Button>
                  <br />

                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey={index * 2 + 1}>
                      <Accordion.Header>
                        {`Review ${[index * 2 + 1]}`}
                      </Accordion.Header>
                      <Accordion.Body>
                        <Image src={`/stars/regular/regular_${reviews[index * 2].rating}.png`} />
                        &nbsp;
                        &nbsp;
                        <Form.Text>{formatDate(reviews[index * 2].date)}</Form.Text>
                        <br />
                        {reviews[index * 2].reviewText}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey={index * 2 + 2}>
                      <Accordion.Header>
                        {`Review ${[index * 2 + 2]}`}
                      </Accordion.Header>
                      <Accordion.Body>
                        <Image src={`/stars/regular/regular_${reviews[index * 2 + 1].rating}.png`} />
                        &nbsp;
                        &nbsp;
                        <Form.Text>{formatDate(reviews[index * 2].date)}</Form.Text>
                        <br />
                        {reviews[index * 2 + 1].reviewText}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Results
