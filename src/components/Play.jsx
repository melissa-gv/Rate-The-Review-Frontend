/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Stars from './Stars'
import Timer from './Timer'

function Play({ reviews, selectedRating, setSelectedRating, points, setPoints }) {
  const navigate = useNavigate()
  const INITIAL_SECONDS = 15
  const [seconds, setSeconds] = useState(INITIAL_SECONDS)
  const [isRunning, setIsRunning] = useState(true)
  const [round, setRound] = useState(0)
  const [viewResult, setViewResult] = useState(false)
  const [roundPoints, setRoundPoints] = useState(0)

  const calculatePoints = () => {
    let curRoundPts = 0
    if (selectedRating === 0) {
      curRoundPts = -3
    } else if (selectedRating === reviews[round].rating) {
      curRoundPts = 5
    } else if (
      selectedRating + 1 === reviews[round].rating
      || selectedRating - 1 === reviews[round].rating) {
      curRoundPts = 3
    } else {
      curRoundPts = -3
    }
    setRoundPoints(curRoundPts)
    setPoints(points + curRoundPts)
  }

  useEffect(() => {
    if (seconds === 0 && selectedRating === 0) {
      calculatePoints()
      setViewResult(true)
    }
  }, [seconds])

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    if (round <= 5 && !viewResult) {
      setIsRunning(false)
      calculatePoints()
      setViewResult(true)
    } else if (round < 5 && viewResult) {
      setViewResult(false)
      setRound(round + 1)
      setSelectedRating(0)
      setSeconds(INITIAL_SECONDS)
      setIsRunning(true)
    } else if (round === 5 && viewResult) {
      navigate('/results')
    }
  }

  return (
    <Container className="justify-content-center text-center">
      <br />
      {`Round ${round + 1} / 6`}
      <Card
        bg="dark"
        text="white"
        className="mb-2"
        style={{
          width: '40rem', marginLeft: 'auto', marginRight: 'auto',
        }}
      >
        <Card.Header>
          <Timer seconds={seconds} setSeconds={setSeconds} isRunning={isRunning} />
        </Card.Header>

        <Card.Body>
          <Card.Text>
            {reviews[round].reviewText}
          </Card.Text>

          <Stars selectedRating={selectedRating} setSelectedRating={setSelectedRating} />

          <Button onClick={handleSubmitAnswer} variant="success" type="submit" size="lg">
            {round === 5 ? 'Finish' : 'Next'}
          </Button>

        </Card.Body>

      </Card>
      {viewResult
        ? (
          <Alert
            variant="warning"
            style={{
              width: '40rem', marginLeft: 'auto', marginRight: 'auto',
            }}
          >
            {`Your guess: ${selectedRating} stars`}
            <br />
            {`Correct Answer: ${reviews[round].rating} stars`}
            <br />
            {`Points earned this round: ${roundPoints} points`}
            <br />
            {`Total points: ${points} points`}
          </Alert>
        )
        : null}

    </Container>
  )
}

export default Play

// [
//   {
//       "rating": 5,
//       "reviewText": "Thank you ladies! Restaurant is always cool and clean and the workers so friendly! Food always good and fresh! Nice to count on consistency when looking for a quick lunch keep up the great work!",
//       "date": "Fri Dec 02 2022 19:13:41 GMT-0600 (Central Standard Time)"
//   },
//   {
//       "rating": 1,
//       "reviewText": "Walked in to get some sandwiches. Asked for herb and cheese bread, they didn't have any. No big deal, the issue was the crusty attitude that came from the employee. Her response \"I don't have herb and cheese, this is all I got. Flinging open the bread doors... I don't know what the girls problem was but customer service is key!! She had red hair and clearly didn't like her job. Will never understand people who work and treat customers with attitude. Don't work if you hate it, it's that simple!!! You would think during a pandemic, the least you can get from a business is a greeting and a smile. I guess that's too much to ask for, never give my money to businesses that do not appreciate it!",
//       "date": "Fri Dec 02 2022 19:13:41 GMT-0600 (Central Standard Time)"
//   },
//   {
//       "rating": 5,
//       "reviewText": "I hold Lucky Wishbone close to my heart;My mother and step father use to go to Tucson and would bring home Steak-fingers, french fries, garlic bread and cole slaw. The dipping sauce is very vivid and stuck in my mind for over 40 years. We live in Phoenix and don't get to Tucson often. This past week we flew out of Tucson and came home on the Amtrak. We ate lunch at Lucky Wishbone then brought home a huge order to have for dinner that night. It was everything i remembered it to be and more. The heat up worked out perfect at 250 degrees for 20 min then added the toast just to warm it up and crispy.  Last weekend my husband had a show and stayed the night and brought home more Steak-fingers. Thank you for still being open and never changing your recipe",
//       "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
//   },
//   {
//       "rating": 4,
//       "reviewText": "I have a hour to kill so might as well go for one of my  faves.  Breaded Chicken Livers. Served with delicious French fries , a slice of Garlic Toast and 2 jalapeños. Along with a serving of Wishbone Cocktail Sauce. This time I ate in. Pretty good. A Bit overcooked Be Better next time.",
//       "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
//   },
//   {
//       "rating": 5,
//       "reviewText": "Alex G., the bartender, is great. He is always so friendly and professional!  If it weren't for him my friends and I would not come here regularly.",
//       "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
//   },
//   {
//       "rating": 5,
//       "reviewText": "Will is the MAIN reason I frequent this Native! Give him a raise or accommodation or something. He goes above and beyond and as the face of this location when I walk in makes it the reason I come back time and time againBest wings. Sauced perfectly as well! Do",
//       "date": "Fri Dec 02 2022 19:13:42 GMT-0600 (Central Standard Time)"
//   }
// ]

// [
//   {
//       "id": "GpUGVKKmWfZieHFtGZQYpQ",
//       "alias": "subway-tucson-101",
//       "name": "Subway",
//       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/2atRu3lAwjbvVqsIiSeqiw/o.jpg",
//       "is_closed": false,
//       "url": "https://www.yelp.com/biz/subway-tucson-101?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
//       "review_count": 8,
//       "categories": [
//           {
//               "alias": "sandwiches",
//               "title": "Sandwiches"
//           }
//       ],
//       "rating": 2.5,
//       "coordinates": {
//           "latitude": 32.2787268,
//           "longitude": -110.9777249
//       },
//       "transactions": [
//           "pickup",
//           "delivery"
//       ],
//       "price": "$",
//       "location": {
//           "address1": "3966 N Oracle Rd",
//           "address2": "",
//           "address3": "",
//           "city": "Tucson",
//           "zip_code": "85705",
//           "country": "US",
//           "state": "AZ",
//           "display_address": [
//               "3966 N Oracle Rd",
//               "Tucson, AZ 85705"
//           ]
//       },
//       "phone": "+15208882315",
//       "display_phone": "(520) 888-2315",
//       "distance": 2557.4091682229723
//   },
//   {
//       "id": "F9jfjlNRuFk4WrMPdsr7CA",
//       "alias": "lucky-wishbone-tucson-6",
//       "name": "Lucky Wishbone",
//       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Iyc2PAJo-KkfdOFMZFrBkA/o.jpg",
//       "is_closed": false,
//       "url": "https://www.yelp.com/biz/lucky-wishbone-tucson-6?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
//       "review_count": 95,
//       "categories": [
//           {
//               "alias": "southern",
//               "title": "Southern"
//           },
//           {
//               "alias": "hotdogs",
//               "title": "Fast Food"
//           },
//           {
//               "alias": "chicken_wings",
//               "title": "Chicken Wings"
//           }
//       ],
//       "rating": 3.5,
//       "coordinates": {
//           "latitude": 32.2528305053711,
//           "longitude": -110.944282531738
//       },
//       "transactions": [
//           "pickup",
//           "delivery"
//       ],
//       "price": "$",
//       "location": {
//           "address1": "2545 N Campbell Ave",
//           "address2": "",
//           "address3": "",
//           "city": "Tucson",
//           "zip_code": "85719",
//           "country": "US",
//           "state": "AZ",
//           "display_address": [
//               "2545 N Campbell Ave",
//               "Tucson, AZ 85719"
//           ]
//       },
//       "phone": "+15203239329",
//       "display_phone": "(520) 323-9329",
//       "distance": 5750.396887305931
//   },
//   {
//       "id": "kldw3rf8_T6J2LxsetQ5UA",
//       "alias": "native-grill-and-wings-tucson",
//       "name": "Native Grill & Wings",
//       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/4uAU6BizR34TNhNjH32Nyg/o.jpg",
//       "is_closed": false,
//       "url": "https://www.yelp.com/biz/native-grill-and-wings-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
//       "review_count": 240,
//       "categories": [
//           {
//               "alias": "chicken_wings",
//               "title": "Chicken Wings"
//           },
//           {
//               "alias": "newamerican",
//               "title": "American (New)"
//           },
//           {
//               "alias": "sportsbars",
//               "title": "Sports Bars"
//           }
//       ],
//       "rating": 2.5,
//       "coordinates": {
//           "latitude": 32.2357497851114,
//           "longitude": -110.926602780819
//       },
//       "transactions": [
//           "pickup",
//           "delivery"
//       ],
//       "price": "$$",
//       "location": {
//           "address1": "3100 E Speedway Blvd",
//           "address2": "",
//           "address3": "",
//           "city": "Tucson",
//           "zip_code": "85716",
//           "country": "US",
//           "state": "AZ",
//           "display_address": [
//               "3100 E Speedway Blvd",
//               "Tucson, AZ 85716"
//           ]
//       },
//       "phone": "+15203253489",
//       "display_phone": "(520) 325-3489",
//       "distance": 8036.6758375627505
//   }
// ]