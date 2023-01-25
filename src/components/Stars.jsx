import React from 'react'
import Image from 'react-bootstrap/Image'

function Stars({ selectedRating, setSelectedRating }) {
  const toggleStar = (e) => {
    e.preventDefault()
    if (Number(e.target.value) === selectedRating) {
      setSelectedRating(0)
    } else {
      setSelectedRating(Number(e.target.value))
    }
  }

  return (
    <div className="stars-container">
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((starValue) => (
          <label htmlFor={starValue} className="stars-label" key={starValue}>
            label
            <br />
            <input type="radio" value={starValue} id={starValue} onClick={toggleStar} key={starValue} aria-label={starValue} />
            <br />
            label
          </label>
        ))}
      </div>
      <Image fluid src={`stars/extra_large_${selectedRating}@3x.png`} className="yelp-star-img" />
    </div>

  )
}

export default Stars

{ /* <Container>
<div className="outer-container">
  <div className="stars-radio-grp">
    {[1, 2, 3, 4, 5].map((starValue) => {
      return (
        <label htmlFor={starValue} className="stars-label" key={starValue}>
          {starValue}
          <br />
          <input type="radio" value={starValue} id={starValue} onClick={toggleStar} key={starValue} aria-label={starValue} />
          <br />
          {starValue}
        </label>
      )
    })}
    <Image fluid src={`stars/extra_large_${selectedRating}@3x.png`} className="yelp-star-img" />
  </div>
</div>

</Container> */ }
