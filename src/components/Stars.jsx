/* eslint-disable arrow-body-style */
import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function Stars({ selectedRating, setSelectedRating }) {
  const toggleStar = (e) => {
    e.preventDefault()
    console.log()
    if (Number(e.target.value) === selectedRating) {
      setSelectedRating(0)
      console.log('selectedRating:', selectedRating)
    } else {
      setSelectedRating(Number(e.target.value))
      console.log('selectedRating:', selectedRating)
    }
  }

  return (
    <Container className="stars-container">
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((starValue) => {
          return (
            <label htmlFor={starValue} className="starsLabel" key={starValue}>
              label
              <br />
              <input type="radio" value={starValue} id={starValue} onClick={toggleStar} key={starValue} aria-label={starValue} />
              <br />
              label
            </label>
          )
        })}
      </div>
      <Image src={`stars/extra_large_${selectedRating}@3x.png`} className="yelp-star-img" />
    </Container>
  )
}

export default Stars
