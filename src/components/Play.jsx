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

const { VITE_HOST } = import.meta.env

function Play({
  reviews, businesses, selectedRating, setSelectedRating, points, setPoints, zipcode, currentUser,
}) {
  const navigate = useNavigate()
  const INITIAL_SECONDS = 15
  const [seconds, setSeconds] = useState(INITIAL_SECONDS)
  const [isTimerRunning, setIsTimerRunning] = useState(true)
  const [round, setRound] = useState(0)
  const [viewResult, setViewResult] = useState(false)
  const [variantColor, setVariantColor] = useState('')
  const [resultText, setResultText] = useState()

  const calculatePoints = () => {
    let curRoundPts = 0
    let variantColorTmp = ''
    if (selectedRating === 0) {
      curRoundPts = -3
      variantColorTmp = 'secondary'
    } else if (selectedRating === reviews[round].rating) {
      curRoundPts = 5
      variantColorTmp = 'success'
    } else if (
      selectedRating + 1 === reviews[round].rating
      || selectedRating - 1 === reviews[round].rating) {
      curRoundPts = 3
      variantColorTmp = 'warning'
    } else {
      curRoundPts = -3
      variantColorTmp = 'danger'
    }
    setVariantColor(variantColorTmp)
    setPoints(points + curRoundPts)
    const starsPlurality = selectedRating === 1 ? 'star' : 'stars'
    const resultTextTmp = {
      secondary: `💤 Too slow... 💤
    You guessed ${selectedRating} ${starsPlurality}. Correct answer was ${reviews[round].rating} stars.
    You lost ${curRoundPts} points. Total points: ${curRoundPts + points} points.`,
      danger: `❌ Sorry, that's incorrect ❌
    You guessed ${selectedRating} ${starsPlurality}. Correct answer was ${reviews[round].rating} stars.
    You lost ${curRoundPts} points. Total points: ${curRoundPts + points} points.`,
      warning: `😅 So close! 😅
    You guessed ${selectedRating} ${starsPlurality}. Correct answer was ${reviews[round].rating} stars.
    You earned ${curRoundPts} points. Total points: ${curRoundPts + points} points.`,
      success: `✅ That's correct! ✅
      Rating: ${reviews[round].rating} ${starsPlurality}
      You earned ${curRoundPts} points. Total points: ${curRoundPts + points} points.`,
    }
    setResultText(resultTextTmp[variantColorTmp])
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
    axios.put(`${VITE_HOST}/results`, { params })
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    if (round <= 5 && !viewResult) {
      setIsTimerRunning(false)
      calculatePoints()
      setViewResult(true)
    } else if (round < 5 && viewResult) {
      setViewResult(false)
      setRound(round + 1)
      setSelectedRating(0)
      setSeconds(INITIAL_SECONDS)
      setIsTimerRunning(true)
    } else if (round === 5 && viewResult) {
      SendGameResultsToBackend()
      navigate('/results')
    }
  }

  return (
    <Container className="justify-content-center text-center" style={{ maxWidth: '60rem' }}>
      <br />
      {`Round ${round + 1} / 6`}
      <Card
        bg="dark"
        text="white"
        className="mb-2"
      >
        <Card.Header>
          <Timer seconds={seconds} setSeconds={setSeconds} isRunning={isTimerRunning} />
        </Card.Header>

        <Card.Body>
          <Card.Text>
            {reviews[round].reviewText}
          </Card.Text>

          <Stars selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
          <br />
          <Button onClick={handleSubmitAnswer} variant="success" type="submit" size="lg">
            {round === 5 && viewResult ? 'Finish' : 'Next'}
          </Button>

        </Card.Body>

      </Card>

      {viewResult
        ? (
          <Alert
            variant={variantColor}
            className="alert-banner"
          >
            {resultText}
          </Alert>
        )
        : null}

    </Container>
  )
}

export default Play
