import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import Home from './components/Home'
import Setup from './components/Setup'
import Play from './components/Play'
import Results from './components/Results'
import Leaderboard from './components/Leaderboard'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'

const { VITE_HOST } = import.meta.env

function App() {
  const [reviews, setReviews] = useState([])
  const [businesses, setBusinesses] = useState([])
  const [selectedRating, setSelectedRating] = useState(0)
  const [points, setPoints] = useState(0)
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [zipcode, setZipcode] = useState(0)

  const SendFBAuthToBackend = () => {
    axios.put(`${VITE_HOST}/auth`, { params: currentUser }, { withCredentials: true })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setCurrentUser({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
        })
        SendFBAuthToBackend()
      } else {
        setIsLoggedIn(false)
        setCurrentUser({})
      }
    })
  }, [])

  return (
    <>
      <AppNavbar
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isLoggedIn={isLoggedIn}
            />
          )}
        />
        <Route
          path="setup"
          element={(
            <Setup
              reviews={reviews}
              setReviews={setReviews}
              setBusinesses={setBusinesses}
              zipcode={zipcode}
              setZipcode={setZipcode}
            />
          )}
        />
        <Route
          path="play"
          element={(
            <Play
              reviews={reviews}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              points={points}
              setPoints={setPoints}
              zipcode={zipcode}
              businesses={businesses}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          path="results"
          element={(
            <Results
              reviews={reviews}
              businesses={businesses}
              points={points}
            />
          )}
        />
        <Route
          path="leaderboard"
          element={(
            <Leaderboard />
          )}
        />
      </Routes>
      <Footer />
    </>

  )
}

export default App
