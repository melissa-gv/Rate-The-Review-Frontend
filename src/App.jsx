import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { onAuthStateChanged } from 'firebase/auth'
import Home from './components/Home'
import Setup from './components/Setup'
import Play from './components/Play'
import Results from './components/Results'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'

function App() {
  const [reviews, setReviews] = useState([])
  const [businesses, setBusinesses] = useState([])
  const [selectedRating, setSelectedRating] = useState(0)
  const [points, setPoints] = useState(0)
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
        console.log('logged IN')
      } else {
        setCurrentUser({})
        setIsLoggedIn(false)
        console.log('logged OUT')
      }
      console.log('currentUser:', currentUser)
    })
  }, [])

  return (
    <>
      <AppNavbar
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
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
      </Routes>
      <Footer />
    </>

  )
}

export default App
