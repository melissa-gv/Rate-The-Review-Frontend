import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Setup from './components/Setup'
import Play from './components/Play'
import Results from './components/Results'
import Login from './components/Login'
import Signup from './components/Signup'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'

function App() {
  const [reviews, setReviews] = useState([])
  const [businesses, setBusinesses] = useState([])
  const [selectedRating, setSelectedRating] = useState(0)
  const [points, setPoints] = useState(0)

  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
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
      {/* <Footer /> */}
    </>

  )
}

export default App
