/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Setup({ setReviews, setBusinesses }) {
  const [zipcode, setZipcode] = useState(0)
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setZipcode(e.target.value)
  }

  const handleZipcodeSubmit = (e) => {
    e.preventDefault()
    axios.get('http://localhost:3000/businesses', { params: { location: zipcode } })
      .then((response) => {
        console.log('Setup response:', response.data.businesses)
        setReviews(response.data.reviews)
        setBusinesses(response.data.businesses)
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        navigate('/play')
      })
  }

  return (
    <div className="col-lg-6 offset-lg-3">
      <h2>How To Play:</h2>
      <ol>
        <li>Enter your zip code</li>
        <li>Read random review of random local restaurant</li>
        <li>You have 15 seconds to guess the review rating</li>
        <li>5 rounds total!</li>
        <li>Enjoy!</li>
      </ol>
      <h2>Scoring</h2>
      <ul>
        <li>5 points for accurate guess</li>
        <li>3 points for being 1 point away</li>
        <li>-3 for being 2+ points away</li>
      </ul>

      <h2>Choose Your Location</h2>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Zip Code</label>
          <input onChange={handleChange} type="text" maxLength="5" className="form-control" />
        </div>

        <button onClick={handleZipcodeSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Setup
