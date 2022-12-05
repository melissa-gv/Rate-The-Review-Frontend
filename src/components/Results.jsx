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

// { reviews, businesses, points }
function Results({ reviews, businesses, points }) {
  // const points = 10
  // const businesses = [
  //   {
  //     "id": "GpUGVKKmWfZieHFtGZQYpQ",
  //     "alias": "subway-tucson-101",
  //     "name": "Subway",
  //     "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/2atRu3lAwjbvVqsIiSeqiw/o.jpg",
  //     "is_closed": false,
  //     "url": "https://www.yelp.com/biz/subway-tucson-101?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
  //     "review_count": 8,
  //     "categories": [
  //       {
  //         "alias": "sandwiches",
  //         "title": "Sandwiches"
  //       }
  //     ],
  //     "rating": 2.5,
  //     "coordinates": {
  //       "latitude": 32.2787268,
  //       "longitude": -110.9777249
  //     },
  //     "transactions": [
  //       "pickup",
  //       "delivery"
  //     ],
  //     "price": "$",
  //     "location": {
  //       "address1": "3966 N Oracle Rd",
  //       "address2": "",
  //       "address3": "",
  //       "city": "Tucson",
  //       "zip_code": "85705",
  //       "country": "US",
  //       "state": "AZ",
  //       "display_address": [
  //         "3966 N Oracle Rd",
  //         "Tucson, AZ 85705"
  //       ]
  //     },
  //     "phone": "+15208882315",
  //     "display_phone": "(520) 888-2315",
  //     "distance": 2557.4091682229723
  //   },
  //   {
  //     "id": "F9jfjlNRuFk4WrMPdsr7CA",
  //     "alias": "lucky-wishbone-tucson-6",
  //     "name": "Lucky Wishbone",
  //     "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Iyc2PAJo-KkfdOFMZFrBkA/o.jpg",
  //     "is_closed": false,
  //     "url": "https://www.yelp.com/biz/lucky-wishbone-tucson-6?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
  //     "review_count": 95,
  //     "categories": [
  //       {
  //         "alias": "southern",
  //         "title": "Southern"
  //       },
  //       {
  //         "alias": "hotdogs",
  //         "title": "Fast Food"
  //       },
  //       {
  //         "alias": "chicken_wings",
  //         "title": "Chicken Wings"
  //       }
  //     ],
  //     "rating": 3.5,
  //     "coordinates": {
  //       "latitude": 32.2528305053711,
  //       "longitude": -110.944282531738
  //     },
  //     "transactions": [
  //       "pickup",
  //       "delivery"
  //     ],
  //     "price": "$",
  //     "location": {
  //       "address1": "2545 N Campbell Ave",
  //       "address2": "",
  //       "address3": "",
  //       "city": "Tucson",
  //       "zip_code": "85719",
  //       "country": "US",
  //       "state": "AZ",
  //       "display_address": [
  //         "2545 N Campbell Ave",
  //         "Tucson, AZ 85719"
  //       ]
  //     },
  //     "phone": "+15203239329",
  //     "display_phone": "(520) 323-9329",
  //     "distance": 5750.396887305931
  //   },
  //   {
  //     "id": "kldw3rf8_T6J2LxsetQ5UA",
  //     "alias": "native-grill-and-wings-tucson",
  //     "name": "Native Grill & Wings",
  //     "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/4uAU6BizR34TNhNjH32Nyg/o.jpg",
  //     "is_closed": false,
  //     "url": "https://www.yelp.com/biz/native-grill-and-wings-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
  //     "review_count": 240,
  //     "categories": [
  //       {
  //         "alias": "chicken_wings",
  //         "title": "Chicken Wings"
  //       },
  //       {
  //         "alias": "newamerican",
  //         "title": "American (New)"
  //       },
  //       {
  //         "alias": "sportsbars",
  //         "title": "Sports Bars"
  //       }
  //     ],
  //     "rating": 2.5,
  //     "coordinates": {
  //       "latitude": 32.2357497851114,
  //       "longitude": -110.926602780819
  //     },
  //     "transactions": [
  //       "pickup",
  //       "delivery"
  //     ],
  //     "price": "$$",
  //     "location": {
  //       "address1": "3100 E Speedway Blvd",
  //       "address2": "",
  //       "address3": "",
  //       "city": "Tucson",
  //       "zip_code": "85716",
  //       "country": "US",
  //       "state": "AZ",
  //       "display_address": [
  //         "3100 E Speedway Blvd",
  //         "Tucson, AZ 85716"
  //       ]
  //     },
  //     "phone": "+15203253489",
  //     "display_phone": "(520) 325-3489",
  //     "distance": 8036.6758375627505
  //   }
  // ]

  // const reviews = [
  //   {
  //     "rating": 5,
  //     "reviewText": "Thank you ladies! Restaurant is always cool and clean and the workers so friendly! Food always good and fresh! Nice to count on consistency when looking for a quick lunch keep up the great work!",
  //     "date": "Fri Dec 02 2022 19:13:41 GMT-0600 (Central Standard Time)"
  //   },
  //   {
  //     "rating": 1,
  //     "reviewText": "Walked in to get some sandwiches. Asked for herb and cheese bread, they didn't have any. No big deal, the issue was the crusty attitude that came from the employee. Her response \"I don't have herb and cheese, this is all I got. Flinging open the bread doors... I don't know what the girls problem was but customer service is key!! She had red hair and clearly didn't like her job. Will never understand people who work and treat customers with attitude. Don't work if you hate it, it's that simple!!! You would think during a pandemic, the least you can get from a business is a greeting and a smile. I guess that's too much to ask for, never give my money to businesses that do not appreciate it!",
  //     "date": "Fri Dec 02 2022 19:13:41 GMT-0600 (Central Standard Time)"
  //   },
  //   {
  //     "rating": 5,
  //     "reviewText": "I hold Lucky Wishbone close to my heart;My mother and step father use to go to Tucson and would bring home Steak-fingers, french fries, garlic bread and cole slaw. The dipping sauce is very vivid and stuck in my mind for over 40 years. We live in Phoenix and don't get to Tucson often. This past week we flew out of Tucson and came home on the Amtrak. We ate lunch at Lucky Wishbone then brought home a huge order to have for dinner that night. It was everything i remembered it to be and more. The heat up worked out perfect at 250 degrees for 20 min then added the toast just to warm it up and crispy.  Last weekend my husband had a show and stayed the night and brought home more Steak-fingers. Thank you for still being open and never changing your recipe",
  //     "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
  //   },
  //   {
  //     "rating": 4,
  //     "reviewText": "I have a hour to kill so might as well go for one of my  faves.  Breaded Chicken Livers. Served with delicious French fries , a slice of Garlic Toast and 2 jalapeños. Along with a serving of Wishbone Cocktail Sauce. This time I ate in. Pretty good. A Bit overcooked Be Better next time.",
  //     "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
  //   },
  //   {
  //     "rating": 5,
  //     "reviewText": "Alex G., the bartender, is great. He is always so friendly and professional!  If it weren't for him my friends and I would not come here regularly.",
  //     "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
  //   },
  //   {
  //     "rating": 5,
  //     "reviewText": "Will is the MAIN reason I frequent this Native! Give him a raise or accommodation or something. He goes above and beyond and as the face of this location when I walk in makes it the reason I come back time and time againBest wings. Sauced perfectly as well! Do",
  //     "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
  //   }
  // ]
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
      <Row sm={1} md={3}>
        {businesses.map((restaurant, index) => (
          <Col className="result-cards" key={restaurant.id}>
            <Card text="dark" style={{ width: '24rem' }}>
              <Card.Img variant="top" href={restaurant.url} target="_blank" src={restaurant.image_url ? restaurant.image_url : 'placeholder-image.webp'} style={{ cursor: 'pointer', objectFit: 'cover', height: '15rem' }} />
              <Card.Body>
                <Card.Title>{`${restaurant.name}`}</Card.Title>
                <Card.Text>
                  <Image src={`/stars/large/stars_large_${restaurant.rating}.png`} />
                  {` (${restaurant.review_count})`}
                  <br />

                  Price:&nbsp;
                  <Badge pill bg="success">
                    {restaurant.price ? `${restaurant.price}` : <span>&ndash;</span>}
                  </Badge>
                  <br />

                  {`${restaurant.location.address1} ${restaurant.location.address2}`}
                  <br />
                  {`${restaurant.location.city}, ${restaurant.location.state}  ${restaurant.location.zip_code} `}
                  <br />
                  {`${restaurant.display_phone}`}
                  <br />

                  <Button href={`${restaurant.url}`} target="_blank" style={{ margin: '10px 0px' }} variant="danger">Yelp Page</Button>
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
                        <Form.Text>{reviews[index * 2].date}</Form.Text>
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
                        <Form.Text muted>{reviews[index * 2].date}</Form.Text>
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

// const businesses = [
//   {
//     id: 'ynQQJ68ZaK9hBAh13rQdrg',
//     alias: 'mod-pizza-tucson-4',
//     name: 'MOD Pizza',
//     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/_WhmJS7mNs7vd1r0wPeC7A/o.jpg',
//     is_closed: false,
//     url: 'https://www.yelp.com/biz/mod-pizza-tucson-4?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ',
//     review_count: 82,
//     categories: [
//       {
//         alias: 'hotdogs',
//         title: 'Fast Food',
//       },
//       {
//         alias: 'pizza',
//         title: 'Pizza',
//       },
//     ],
//     rating: 4,
//     coordinates: {
//       latitude: 32.33898,
//       longitude: -111.04646,
//     },
//     transactions: [
//       'pickup',
//       'delivery',
//     ],
//     price: '$',
//     location: {
//       address1: '3780 W Ina Rd',
//       address2: null,
//       address3: null,
//       city: 'Tucson',
//       zip_code: '85741',
//       country: 'US',
//       state: 'AZ',
//       display_address: [
//         '3780 W Ina Rd',
//         'Tucson, AZ 85741',
//       ],
//     },
//     phone: '+15208006540',
//     display_phone: '(520) 800-6540',
//     distance: 8805.312014295503,
//   },
//   {
//     id: 'EJIJ-QFdKRiPypfoPAVNBQ',
//     alias: 'quiktrip-tucson-6',
//     name: 'QuikTrip',
//     image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/vFfDYWcRnbqjrQucApU8_A/o.jpg',
//     is_closed: false,
//     url: 'https://www.yelp.com/biz/quiktrip-tucson-6?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ',
//     review_count: 25,
//     categories: [
//       {
//         alias: 'servicestations',
//         title: 'Gas Stations',
//       },
//       {
//         alias: 'convenience',
//         title: 'Convenience Stores',
//       },
//       {
//         alias: 'hotdogs',
//         title: 'Fast Food',
//       },
//     ],
//     rating: 4,
//     coordinates: {
//       latitude: 32.2499183127667,
//       longitude: -110.998252709781,
//     },
//     transactions: [],
//     price: '$',
//     location: {
//       address1: '1425 W Grant rd',
//       address2: '',
//       address3: '',
//       city: 'Tucson',
//       zip_code: '85745',
//       country: 'US',
//       state: 'AZ',
//       display_address: [
//         '1425 W Grant rd',
//         'Tucson, AZ 85745',
//       ],
//     },
//     phone: '+15206244482',
//     display_phone: '(520) 624-4482',
//     distance: 2168.076110740026,
//   },
//   {
//     id: 'lRhyqBtmGoypheR0vI0Uxg',
//     alias: 'morgans-home-cooking-bbq-and-others-tucson',
//     name: "Morgan's Home Cooking BBQ & Others",
//     image_url: '',
//     is_closed: false,
//     url: 'https://www.yelp.com/biz/morgans-home-cooking-bbq-and-others-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ',
//     review_count: 2,
//     categories: [
//       {
//         alias: 'southern',
//         title: 'Southern',
//       },
//       {
//         alias: 'bbq',
//         title: 'Barbeque',
//       },
//       {
//         alias: 'foodstands',
//         title: 'Food Stands',
//       },
//     ],
//     rating: 4.5,
//     coordinates: {
//       latitude: 32.201984,
//       longitude: -110.956375,
//     },
//     transactions: [],
//     price: '$',
//     location: {
//       address1: '1630 S Park Ave',
//       address2: '',
//       address3: '',
//       city: 'Tucson',
//       zip_code: '85713',
//       country: 'US',
//       state: 'AZ',
//       display_address: [
//         '1630 S Park Ave',
//         'Tucson, AZ 85713',
//       ],
//     },
//     phone: '+15209900949',
//     display_phone: '(520) 990-0949',
//     distance: 8628.21019744032,
//   },
// ]
