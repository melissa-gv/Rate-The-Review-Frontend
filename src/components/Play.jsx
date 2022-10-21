import { useState, useEffect } from 'react'
import Stars from './Stars.jsx'
import Timer from './Timer.jsx'
import { useNavigate } from 'react-router-dom';

function Play({ reviews, setReviews, selectedRating, setSelectedRating, points, setPoints }) {
  const navigate = useNavigate();
  const initialTimer = 15
  const [curReview, setCurReview] = useState(0)
  const [timeLeft, setTimeLeft] = useState(initialTimer);
  const [chosenReviews, setChosenReviews] = useState([]);

  const chooseRandomReviews = () => {
    let min = 0;
    let max = reviews.length
    let selectedRandInts = []
    let randomReviews = []
    while (randomReviews.length < 5) {
      let randomInt = Math.floor(Math.random() * (max - min) + min)
      if (selectedRandInts.indexOf(randomInt) === -1) {
        selectedRandInts.push(randomInt)
        randomReviews.push(reviews[randomInt])
      }
    }
    setChosenReviews(randomReviews)
  }

  useEffect(() => {
    chooseRandomReviews();
    setPoints(0);
  }, [])

  const calculatePoints = () => {
    if (selectedRating === 0) {
      setPoints(points - 3)
    } else if (selectedRating === chosenReviews[curReview]['rating']) {
      setPoints(points + 5)
    } else if (selectedRating + 1 === chosenReviews[curReview]['rating'] || selectedRating - 1 === chosenReviews[curReview]['rating']) {
      setPoints(points + 3)
    } else {
      setPoints(points - 3)
    }
    if (curReview === 5) {
      console.log('final score:', points)
    }
    console.log('Round:', curReview, 'selected rating:', selectedRating, 'actual rating:', chosenReviews[curReview]['rating'], 'points:', points)
  }

  useEffect(() => {
    if (curReview === 5) {
      navigate('/results', {
        state: {
          chosenReviews: chosenReviews
        }
      })
    }
  }, [curReview])

  const formatDate = (dateStr) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString([], options);
  }

  const handleClick = (e) => {
    e.preventDefault()
    calculatePoints();
    setCurReview(curReview + 1)
    setTimeLeft(initialTimer)
    setSelectedRating(0)
  }

  if (chosenReviews.length === 0 || curReview === 5 ) {
    return (
      <div className='col-lg-6 offset-lg-3'>
        <h1 className="title">Loading...</h1>
      </div>
    )
  } else {
    return (
      <>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
        <div className="row align-items-center">
          <div className='col-lg-6 offset-lg-3'>
          <h3 className='text-center'>Current Points: {points}</h3>
            <div className="card text-bg-dark text-center">
              <div className="card-header fs-4">{chosenReviews[curReview]['text']}</div>
              <div className="card-body">
                <h5 className="card-title"><Stars selectedRating={selectedRating} setSelectedRating={setSelectedRating}/></h5><br></br>
                <button type="button" className="btn btn-success btn-lg" onClick={handleClick}>
                  {curReview === 4 ? 'Finish' : 'Next'}
                </button>
              </div>
              <div className="card-footer text-muted">Review posted on: &nbsp;
                {formatDate(reviews[curReview]['time_created'])}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Play;