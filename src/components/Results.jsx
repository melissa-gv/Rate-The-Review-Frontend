import React from "react";
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Results = ({ points, setPoints, businesses }) => {
//   const location = useLocation();
  // let temp = location.state.chosenReviews
  // console.log("businesses:", businesses)

// let businesses = [
//   {
//       "id": "xUtzkHhNH3XCISfzH5mTgQ",
//       "alias": "soha-austin-2",
//       "name": "SOHA",
//       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/xluApXMx4oYcdeZ5VI9AKw/o.jpg",
//       "is_closed": false,
//       "url": "https://www.yelp.com/biz/soha-austin-2?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
//       "review_count": 189,
//       "categories": [
//           {
//               "alias": "korean",
//               "title": "Korean"
//           }
//       ],
//       "rating": 4.5,
//       "coordinates": {
//           "latitude": 30.34749,
//           "longitude": -97.71473
//       },
//       "transactions": [
//           "delivery",
//           "pickup"
//       ],
//       "price": "$$",
//       "location": {
//           "address1": "911 W Anderson Ln",
//           "address2": "Ste 114",
//           "address3": "",
//           "city": "Austin",
//           "zip_code": "78757",
//           "country": "US",
//           "state": "TX",
//           "display_address": [
//               "911 W Anderson Ln",
//               "Ste 114",
//               "Austin, TX 78757"
//           ]
//       },
//       "phone": "+15123025433",
//       "display_phone": "(512) 302-5433",
//       "distance": 1930.8388129857528
//   },
//   {
//       "id": "AcFt364BrHyMu3VrSCKMOw",
//       "alias": "salty-sow-austin",
//       "name": "Salty Sow",
//       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/9L94UUzP7_maYsOWjxhZJg/o.jpg",
//       "is_closed": false,
//       "url": "https://www.yelp.com/biz/salty-sow-austin?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
//       "review_count": 3030,
//       "categories": [
//           {
//               "alias": "tradamerican",
//               "title": "American (Traditional)"
//           },
//           {
//               "alias": "gastropubs",
//               "title": "Gastropubs"
//           }
//       ],
//       "rating": 4.5,
//       "coordinates": {
//           "latitude": 30.2836497259461,
//           "longitude": -97.7213180065155
//       },
//       "transactions": [
//           "delivery"
//       ],
//       "price": "$$",
//       "location": {
//           "address1": "1917 Manor Rd",
//           "address2": "",
//           "address3": "",
//           "city": "Austin",
//           "zip_code": "78722",
//           "country": "US",
//           "state": "TX",
//           "display_address": [
//               "1917 Manor Rd",
//               "Austin, TX 78722"
//           ]
//       },
//       "phone": "+15123912337",
//       "display_phone": "(512) 391-2337",
//       "distance": 7809.2762527158
//   },
//   {
//       "id": "kpsH-uAoKvYO8PDn1I7xGA",
//       "alias": "revelry-on-the-boulevard-austin",
//       "name": "Revelry on the Boulevard",
//       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/609y2rYFIVvrXXbPbXb7GA/o.jpg",
//       "is_closed": false,
//       "url": "https://www.yelp.com/biz/revelry-on-the-boulevard-austin?adjust_creative=jKJBqNXdFiQC1frKalfPFQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jKJBqNXdFiQC1frKalfPFQ",
//       "review_count": 206,
//       "categories": [
//           {
//               "alias": "newamerican",
//               "title": "American (New)"
//           },
//           {
//               "alias": "cocktailbars",
//               "title": "Cocktail Bars"
//           },
//           {
//               "alias": "sportsbars",
//               "title": "Sports Bars"
//           }
//       ],
//       "rating": 4.5,
//       "coordinates": {
//           "latitude": 30.33072,
//           "longitude": -97.723
//       },
//       "transactions": [
//           "delivery",
//           "pickup"
//       ],
//       "price": "$$",
//       "location": {
//           "address1": "6215 North Lamar Blvd",
//           "address2": null,
//           "address3": "",
//           "city": "Austin",
//           "zip_code": "78752",
//           "country": "US",
//           "state": "TX",
//           "display_address": [
//               "6215 North Lamar Blvd",
//               "Austin, TX 78752"
//           ]
//       },
//       "phone": "+15128615685",
//       "display_phone": "(512) 861-5685",
//       "distance": 2696.1096387686275
//   }
// ]

  return (
    <div className='col-lg-9 offset-lg-2'>
      <br></br>
      <br></br>
      <h1 className="text-center">You Got {points} Points!</h1>
      <br></br>
      <br></br>

      <div className="row">
        {businesses.map(restaurant => {
          return (
              <div className="col-md-4" style={{ "padding": "1em" }} key={restaurant.id}>
                <div className="card text-bg-light mb-3" style={{ "width": "18rem"}}>
                  <img src={`${restaurant.image_url}`} className="card-img-top"  style={{ objectFit: 'cover', height: '15rem' }}/>
                  <div className="card-body">
                    <h4 className="card-title">{`${restaurant.name}`}</h4>
                    <h5 className="card-title">Rating: {`${restaurant.rating}`}</h5>
                    <p className="card-text">{restaurant.price ? `${restaurant.price}` : null}</p>
                    <p className="card-text">{`${restaurant.location.display_address[0]}\n${restaurant.location.display_address[1]}`}</p>
                    <p className="card-text">{`${restaurant.display_phone}`}</p>
                    <a href={`${restaurant.url}`} className="btn btn-primary">See Yelp Page</a>
                  </div>
                </div>
              </div>
          )
        })}
      </div>
    </div>
  );
};

export default Results;