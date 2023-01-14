/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Stars from './Stars'
import Timer from './Timer'

function Play({
  reviews, selectedRating, setSelectedRating, points, setPoints, zipcode, businesses, currentUser,
}) {
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

  const SendGameResultsToBackend = () => {
    const params = {
      username: currentUser.username,
      zipcode,
      score: points,
      restaurants: businesses,
    }
    axios.put('http://localhost:3000/results', { params })
      .then((response) => {
        console.log('Results server response:', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
      SendGameResultsToBackend()
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
            {round === 5 && viewResult ? 'Finish' : 'Next'}
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
