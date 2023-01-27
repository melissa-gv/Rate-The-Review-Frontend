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

function Results() {
// function Results({ reviews, businesses, points }) {
  const formatDate = (dateStr) => {
    const OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateStr).toLocaleDateString([], OPTIONS)
  }
  const points = 18
  const reviews = [
    {
      rating: 5,
      reviewText: 'Unquestionably Texas options from flaky biscuits and gravy to burgers and salads. Off the hook brunch options include Japanese pancakes to a french toast style sandwich with ham eggs and jam.',
      date: '11/13/2022'
    },
    {
      rating: 2,
      reviewText: 'I come here a lot and this is the first bad experience so I am praying it is not a new trend.  The time to get food was super slow on saturday at 1pm. The fried egg part of the tacos was cold.  Not warm. Not room temp. But chilled. I presume this is not intentional but rather a way to precook a bunch of fried eggs but if that is true then why did it take so long to get the food.  It was pretty offputting eating a cold fried egg but I was too hungry and too long a line to ask for a new item. Fries were not hot as usual but room temp.The server brings the food to the table and accidently knocks over my water glass.  She doesnt even say sorry or bring me a new one I guess because it is self serve water but if you knock mine over I think it is on you to bring me a replacement.',
      date: '1/14/2023'
    },
    {
      rating: 5,
      reviewText: 'The finest airport bar that is NOT in an airport. Friendly, knowledgeable staff. Excellent sandwiches, salads, and an on-point and diverse set of beer taps.A hidden gem within the Springdale General complex, that is definitely worth a visit.',
      date: '11/30/2022'
    },
    {
      rating: 5,
      reviewText: "I think it's safe to say I'm a regular here!Been frequenting this establishment since Winter 2022 for a quick and quiet lunch.The customer service is always great! They are knowledgeable, quick, and friendly, while the food is always fresh, and received in a timely manner!This place can get pretty packed (rightfully so) but never enough to take away from a good experience!Parking can be a bit hectic as they share space with other businesses, but I have always found parking even if it requires a small walk. Definitely worth it!Definitely recommend for their delicious sandwiches and salads!",
      date: '1/5/2023'
    },
    {
      rating: 5,
      reviewText: "I came here for their pan dulce (Mexican sweet bread). I tried a concha and a yoyo. Conchas are probably the most popular and recognizable traditional Mexican pan dulce, but for the uninitiated, I would describe them as soft and sweet bread with a white streusel topping that resembles the surface of a seashell. Growing up these were my favorite pan dulce, and the ones at Mi Tradición taste just like the ones you can find in Mexican panaderías. Much less famous, yoyos are made from two pieces of bread held together by a thin layer of buttercream and coated with butter and powdered sugar. They look like yo-yo's, hence the name, and they're also known as besos (which means kisses, because the two pieces of bread are kissing each other). This was my first time trying yoyos, so I don't have a point of comparison. I thought they were tasty, but my all-time favorite pan dulce remains the concha. I bought these at the end of the day, so both were a little hard, but I heated them up in the oven and that softened them up to perfection. Warming up pan dulce is a game changer. I've also tried a slice of their tres leches cake. They have three options: strawberry, mocha, or durazno (peach). I tried the tres leches that comes with strawberries. I thought it was good, but not mind-blowing.Mi Tradición has a wide selection of pan dulce and you can't beat their prices (I paid $2.50 for two pieces of pan dulce). The only downside is that none of the pan dulce is labeled, and the staff speaks mostly Spanish. Overall, it's a great panadería. I can't wait to try their tacos and tortas.",
      date: '9/21/2022'
    },
    {
      rating: 4,
      reviewText: "I've heard a lot of good things about the Panadería which is the bakery attached to the restaurant and I finally got to try their restaurant attached aka Mi Tradición! The food was well-priced and there were many options to choose from. I went with friends and we ordered the Al Pastor Tacos, Cubana Torta, and Submarino plate. The food was very flavorful and the meat was not dry at all! I also got their Horchacta which was more on the cinnamon-y side which was refreshing.A tip for finding the restaurant is just to look for the big Panadería sign there's a little sign on the window that says Mi Tradición but it's not as visible. Another tip when ordering food is that you can't see their full menu on their TVs but you can find it taped to the side of where the cashier is. There's also a big parking lot with lots of spots available and they take card + cash!",
      date: '10/23/2022'
    }
  ]
  const businesses = [
    {
      id: 'x_tD_UygC_nN23QJpni7ww',
      alias: 'hold-out-brewing-austin',
      name: 'Hold Out Brewing',
      image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/eD5scnhsnc8mvmFibIBnvQ/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.com/biz/hold-out-brewing-austin?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ',
      review_count: 134,
      categories: [ [Object], [Object], [Object] ],
      rating: 4.5,
      coordinates: { latitude: 30.271392, longitude: -97.759 },
      transactions: [ 'delivery' ],
      location: {
        address1: '1208 W 4th St',
        address2: null,
        address3: null,
        city: 'Austin',
        zip_code: '78703',
        country: 'US',
        state: 'TX',
        display_address: [Array]
      },
      phone: '+15123053540',
      display_phone: '(512) 305-3540',
      distance: 9388.64081834703
    },
    {
      id: 'QfZHqrblTcIpKHwrE3hDSg',
      alias: 'the-front-page-austin',
      name: 'The Front Page',
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/zM34iqruLgOUwmurTHxE0w/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.com/biz/the-front-page-austin?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ',
      review_count: 76,
      categories: [ [Object], [Object], [Object] ],
      rating: 4.5,
      coordinates: { latitude: 30.2674267481071, longitude: -97.69386485516281 },
      transactions: [ 'delivery', 'pickup' ],
      location: {
        address1: '1023 Springdale Rd',
        address2: 'Bldg 1 Ste F',
        address3: '',
        city: 'Austin',
        zip_code: '78721',
        country: 'US',
        state: 'TX',
        display_address: [Array]
      },
      phone: '+15127124005',
      display_phone: '(512) 712-4005',
      distance: 10268.656260120639
    },
    {
      id: '5AJevayxjC9a8poECTCCWg',
      alias: 'mi-tradición-austin-3',
      name: 'Mi Tradición',
      image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Fg2LTmPtlDLo3eCFw_V6Cw/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.com/biz/mi-tradici%C3%B3n-austin-3?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ',
      review_count: 394,
      categories: [ [Object], [Object] ],
      rating: 4.5,
      coordinates: { latitude: 30.3635419647482, longitude: -97.7193168289696 },
      transactions: [ 'delivery' ],
      price: '$',
      location: {
        address1: '8716 Research Blvd',
        address2: 'Ste 290',
        address3: '',
        city: 'Austin',
        zip_code: '78758',
        country: 'US',
        state: 'TX',
        display_address: [Array]
      },
      phone: '+15123749910',
      display_phone: '(512) 374-9910',
      distance: 1833.8134907283184
    }
  ]

  return (
    <Container>
      <br />
      <Row>
        <h1 className="text-center">
          {`🎉 You got ${points} point${points === 1 ? '' : 's'}! 🎉`}
        </h1>
        {'\n'}
      </Row>
      <br />
      <Row>
        {businesses.map((restaurant, index) => (
          <Col className="result-cards" key={restaurant.id}>
            <Card text="dark" style={{ width: '24rem' }}>
              <a href={restaurant.url} target="_blank" rel="noreferrer">
                <Card.Img alt="restaurant photo" variant="top" src={restaurant.image_url ? restaurant.image_url : 'placeholder-image.webp'} style={{ cursor: 'pointer', objectFit: 'cover', height: '15rem' }} />
              </a>

              <Card.Body>
                <Card.Title>{`${restaurant.name}`}</Card.Title>
                <Card.Text as="div">
                  <Image src={`/stars/large/stars_large_${restaurant.rating}.png`} />
                  <span className="text-muted">{` ${restaurant.review_count} Reviews`}</span>
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

                  <Button href={`${restaurant.url}`} target="_blank" style={{ margin: '10px 0px' }} variant="light">
                    <img alt="yelp logo links to restaurant's Yelp page" src="yelp_logo.svg" style={{ height: '1.5rem' }} />
                    &nbsp;Page
                  </Button>
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
