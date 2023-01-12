import React, { useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'

function Leaderboard() {
  const logoStyle = {
    width: '250px',
    height: '250px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1px',
  }

  const data = [
    {
      "_id": "63bc70a6ad49bd0da28f2926",
      "username": "guest2",
      "__v": 0,
      "accountCreateDate": "2023-01-09T19:53:09.999Z",
      "games": [
        {
          "zipcode": 85705,
          "score": -10,
          "restaurants": [
            {
              "id": "ajgvBDXmFllajSfKDIHTGw",
              "alias": "atl-wings-tucson-4",
              "name": "ATL Wings",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ENSQI69ufT-KsLQV86zm0g/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/atl-wings-tucson-4?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 195,
              "categories": [
                {
                  "alias": "chicken_wings",
                  "title": "Chicken Wings"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.23194,
                "longitude": -110.96538
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$",
              "location": {
                "address1": "802 N4th Ave",
                "address2": null,
                "address3": "",
                "city": "Tucson",
                "zip_code": "85705",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "802 N4th Ave",
                  "Tucson, AZ 85705"
                ]
              },
              "phone": "+15202071771",
              "display_phone": "(520) 207-1771",
              "distance": 5406.362875445525
            },
            {
              "id": "V83KkmOgTx_h1LDA_A1kow",
              "alias": "kimchi-time-tucson",
              "name": "Kimchi Time",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/SWpAAfTQ0lxW5ertJ9Kx5w/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/kimchi-time-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 398,
              "categories": [
                {
                  "alias": "korean",
                  "title": "Korean"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.220817565918,
                "longitude": -110.93009185791
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$$",
              "location": {
                "address1": "2900 E Broadway Blvd",
                "address2": "Ste 186",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85716",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "2900 E Broadway Blvd",
                  "Ste 186",
                  "Tucson, AZ 85716"
                ]
              },
              "phone": "+15203054900",
              "display_phone": "(520) 305-4900",
              "distance": 8710.852570231926
            },
            {
              "id": "no8Sj8Eflgka2LFdrYFG_Q",
              "alias": "beyond-bread-tucson-2",
              "name": "Beyond Bread",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vCYZVdtgUsLpYZKyyL8DRg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/beyond-bread-tucson-2?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 468,
              "categories": [
                {
                  "alias": "bakeries",
                  "title": "Bakeries"
                },
                {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
                }
              ],
              "rating": 4.5,
              "coordinates": {
                "latitude": 32.26165,
                "longitude": -110.94364
              },
              "transactions": [
                "delivery"
              ],
              "price": "$$",
              "location": {
                "address1": "3026 N Campbell Ave",
                "address2": "",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85719",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "3026 N Campbell Ave",
                  "Tucson, AZ 85719"
                ]
              },
              "phone": "+15203229965",
              "display_phone": "(520) 322-9965",
              "distance": 5594.019463951957
            }
          ],
          "_id": "63bf2ac7ed0abe7a6eebeb35",
          "date": "2023-01-11T21:31:51.861Z"
        }
      ],
    },
    {
      "_id": "63bc9c2dad49bd0da28f4108",
      "username": "guest3",
      "__v": 0,
      "accountCreateDate": "2023-01-09T22:58:53.490Z",
      "games": [
        {
          "zipcode": 85705,
          "score": -10,
          "restaurants": [
            {
              "id": "ajgvBDXmFllajSfKDIHTGw",
              "alias": "atl-wings-tucson-4",
              "name": "ATL Wings",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ENSQI69ufT-KsLQV86zm0g/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/atl-wings-tucson-4?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 195,
              "categories": [
                {
                  "alias": "chicken_wings",
                  "title": "Chicken Wings"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.23194,
                "longitude": -110.96538
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$",
              "location": {
                "address1": "802 N4th Ave",
                "address2": null,
                "address3": "",
                "city": "Tucson",
                "zip_code": "85705",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "802 N4th Ave",
                  "Tucson, AZ 85705"
                ]
              },
              "phone": "+15202071771",
              "display_phone": "(520) 207-1771",
              "distance": 5406.362875445525
            },
            {
              "id": "V83KkmOgTx_h1LDA_A1kow",
              "alias": "kimchi-time-tucson",
              "name": "Kimchi Time",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/SWpAAfTQ0lxW5ertJ9Kx5w/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/kimchi-time-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 398,
              "categories": [
                {
                  "alias": "korean",
                  "title": "Korean"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.220817565918,
                "longitude": -110.93009185791
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$$",
              "location": {
                "address1": "2900 E Broadway Blvd",
                "address2": "Ste 186",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85716",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "2900 E Broadway Blvd",
                  "Ste 186",
                  "Tucson, AZ 85716"
                ]
              },
              "phone": "+15203054900",
              "display_phone": "(520) 305-4900",
              "distance": 8710.852570231926
            },
            {
              "id": "no8Sj8Eflgka2LFdrYFG_Q",
              "alias": "beyond-bread-tucson-2",
              "name": "Beyond Bread",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vCYZVdtgUsLpYZKyyL8DRg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/beyond-bread-tucson-2?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 468,
              "categories": [
                {
                  "alias": "bakeries",
                  "title": "Bakeries"
                },
                {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
                }
              ],
              "rating": 4.5,
              "coordinates": {
                "latitude": 32.26165,
                "longitude": -110.94364
              },
              "transactions": [
                "delivery"
              ],
              "price": "$$",
              "location": {
                "address1": "3026 N Campbell Ave",
                "address2": "",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85719",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "3026 N Campbell Ave",
                  "Tucson, AZ 85719"
                ]
              },
              "phone": "+15203229965",
              "display_phone": "(520) 322-9965",
              "distance": 5594.019463951957
            }
          ],
          "_id": "63bf2ac7ed0abe7a6eebeb35",
          "date": "2023-01-11T21:31:51.861Z"
        }
      ],
    },
    {
      "_id": "63bc9ca0ad49bd0da28f414e",
      "username": "guest4",
      "__v": 0,
      "accountCreateDate": "2023-01-09T23:00:48.378Z",
      "games": [
        {
          "zipcode": 85705,
          "score": -10,
          "restaurants": [
            {
              "id": "ajgvBDXmFllajSfKDIHTGw",
              "alias": "atl-wings-tucson-4",
              "name": "ATL Wings",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ENSQI69ufT-KsLQV86zm0g/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/atl-wings-tucson-4?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 195,
              "categories": [
                {
                  "alias": "chicken_wings",
                  "title": "Chicken Wings"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.23194,
                "longitude": -110.96538
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$",
              "location": {
                "address1": "802 N4th Ave",
                "address2": null,
                "address3": "",
                "city": "Tucson",
                "zip_code": "85705",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "802 N4th Ave",
                  "Tucson, AZ 85705"
                ]
              },
              "phone": "+15202071771",
              "display_phone": "(520) 207-1771",
              "distance": 5406.362875445525
            },
            {
              "id": "V83KkmOgTx_h1LDA_A1kow",
              "alias": "kimchi-time-tucson",
              "name": "Kimchi Time",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/SWpAAfTQ0lxW5ertJ9Kx5w/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/kimchi-time-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 398,
              "categories": [
                {
                  "alias": "korean",
                  "title": "Korean"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.220817565918,
                "longitude": -110.93009185791
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$$",
              "location": {
                "address1": "2900 E Broadway Blvd",
                "address2": "Ste 186",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85716",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "2900 E Broadway Blvd",
                  "Ste 186",
                  "Tucson, AZ 85716"
                ]
              },
              "phone": "+15203054900",
              "display_phone": "(520) 305-4900",
              "distance": 8710.852570231926
            },
            {
              "id": "no8Sj8Eflgka2LFdrYFG_Q",
              "alias": "beyond-bread-tucson-2",
              "name": "Beyond Bread",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vCYZVdtgUsLpYZKyyL8DRg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/beyond-bread-tucson-2?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 468,
              "categories": [
                {
                  "alias": "bakeries",
                  "title": "Bakeries"
                },
                {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
                }
              ],
              "rating": 4.5,
              "coordinates": {
                "latitude": 32.26165,
                "longitude": -110.94364
              },
              "transactions": [
                "delivery"
              ],
              "price": "$$",
              "location": {
                "address1": "3026 N Campbell Ave",
                "address2": "",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85719",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "3026 N Campbell Ave",
                  "Tucson, AZ 85719"
                ]
              },
              "phone": "+15203229965",
              "display_phone": "(520) 322-9965",
              "distance": 5594.019463951957
            }
          ],
          "_id": "63bf2ac7ed0abe7a6eebeb35",
          "date": "2023-01-11T21:31:51.861Z"
        }
      ],
    },
    {
      "_id": "63bdf6c0ad49bd0da28fd468",
      "username": "Melissa Gil",
      "__v": 0,
      "accountCreateDate": "2023-01-10T23:37:36.079Z",
      "email": "melissagilv@gmail.com",
      "games": [
        {
          "zipcode": 85705,
          "score": -10,
          "restaurants": [
            {
              "id": "ajgvBDXmFllajSfKDIHTGw",
              "alias": "atl-wings-tucson-4",
              "name": "ATL Wings",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ENSQI69ufT-KsLQV86zm0g/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/atl-wings-tucson-4?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 195,
              "categories": [
                {
                  "alias": "chicken_wings",
                  "title": "Chicken Wings"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.23194,
                "longitude": -110.96538
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$",
              "location": {
                "address1": "802 N4th Ave",
                "address2": null,
                "address3": "",
                "city": "Tucson",
                "zip_code": "85705",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "802 N4th Ave",
                  "Tucson, AZ 85705"
                ]
              },
              "phone": "+15202071771",
              "display_phone": "(520) 207-1771",
              "distance": 5406.362875445525
            },
            {
              "id": "V83KkmOgTx_h1LDA_A1kow",
              "alias": "kimchi-time-tucson",
              "name": "Kimchi Time",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/SWpAAfTQ0lxW5ertJ9Kx5w/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/kimchi-time-tucson?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 398,
              "categories": [
                {
                  "alias": "korean",
                  "title": "Korean"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 32.220817565918,
                "longitude": -110.93009185791
              },
              "transactions": [
                "delivery",
                "pickup"
              ],
              "price": "$$",
              "location": {
                "address1": "2900 E Broadway Blvd",
                "address2": "Ste 186",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85716",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "2900 E Broadway Blvd",
                  "Ste 186",
                  "Tucson, AZ 85716"
                ]
              },
              "phone": "+15203054900",
              "display_phone": "(520) 305-4900",
              "distance": 8710.852570231926
            },
            {
              "id": "no8Sj8Eflgka2LFdrYFG_Q",
              "alias": "beyond-bread-tucson-2",
              "name": "Beyond Bread",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vCYZVdtgUsLpYZKyyL8DRg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/beyond-bread-tucson-2?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
              "review_count": 468,
              "categories": [
                {
                  "alias": "bakeries",
                  "title": "Bakeries"
                },
                {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
                }
              ],
              "rating": 4.5,
              "coordinates": {
                "latitude": 32.26165,
                "longitude": -110.94364
              },
              "transactions": [
                "delivery"
              ],
              "price": "$$",
              "location": {
                "address1": "3026 N Campbell Ave",
                "address2": "",
                "address3": "",
                "city": "Tucson",
                "zip_code": "85719",
                "country": "US",
                "state": "AZ",
                "display_address": [
                  "3026 N Campbell Ave",
                  "Tucson, AZ 85719"
                ]
              },
              "phone": "+15203229965",
              "display_phone": "(520) 322-9965",
              "distance": 5594.019463951957
            }
          ],
          "_id": "63bf2ac7ed0abe7a6eebeb35",
          "date": "2023-01-11T21:31:51.861Z"
        }
      ],
      "uid": "YkWPU5txYvcBtW5rlvtUqnDrJq23"
    }
  ]

  const GetLeaderboardStats = () => {
    axios.get('http://localhost:3000/allUsers')
      .then((response) => {
        console.log('Leaderboard Stats', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const formatDate = (dateStr) => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString([],options);
  }

  // useEffect(() => {
  //   GetLeaderboardStats()
  // }, [])

  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Image src="Rate-the-Review-logos-white.png" style={logoStyle} />
      </Row>
      <Row>
        <h4>Leaderboard</h4>
      </Row>
      <br />
      <Row className="justify-content-center" xs={1} sm={1} md={2}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
              <th>Date</th>
              <th>Restaurants</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.games[0].score}</td>
                <td>{formatDate(user.games[0].date)}</td>
                <td>
                  <ol style={{ textAlign: 'left' }}>
                    <li>{user.games[0].restaurants[0].name}</li>
                    <li>{user.games[0].restaurants[1].name}</li>
                    <li>{user.games[0].restaurants[2].name}</li>
                  </ol>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Leaderboard
