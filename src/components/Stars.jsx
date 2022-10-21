import { useState } from 'react'

const Stars = ({ selectedRating, setSelectedRating }) => {

  const toggleStar = e => {
    e.preventDefault()
    if (Number(e.target.attributes.id.value) === selectedRating) {
      setSelectedRating(0)
    } else {
      setSelectedRating(Number(e.target.attributes.id.value))
    }
  }

  return (
    <>
      <div className='star-rating-icons-container'>
        {[1, 2, 3, 4, 5].map(starValue =>
          <label className="star-radio-label" key={starValue}>
            <input type="radio" className="radio-item" value={starValue}/>
            <i id={starValue} onClick={toggleStar}
              className={starValue <= selectedRating ? "fa-solid fa-star" : "fa-regular fa-star"}>
            </i>
          </label>
        )}
      </div>
    </>
  );
};

export default Stars;





