import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'

const { VITE_HOST } = import.meta.env

function Leaderboard() {
  const [topScores, setTopScores] = useState([])
  const logoStyle = {
    width: '250px',
    height: '250px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1px',
  }

  const GetLeaderboardStats = () => {
    axios.get(`${VITE_HOST}/allUsers`)
      .then((response) => {
        setTopScores(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const formatDate = (dateStr) => {
    const OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateStr).toLocaleDateString([], OPTIONS)
  }

  useEffect(() => {
    GetLeaderboardStats()
  }, [])

  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Image src="Rate-the-Review-logos-white.png" style={logoStyle} />
      </Row>
      <Row>
        <h2>🥇 Leaderboard 🥇</h2>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
              <th>Date</th>
              <th>Restaurants</th>
            </tr>
          </thead>
          <tbody>
            {topScores.map((game, index) => (
              // eslint-disable-next-line no-underscore-dangle
              <tr key={game.games._id}>
                <td>{index + 1}</td>
                <td>{game.username}</td>
                <td>{game.games.score}</td>
                <td>{formatDate(game.games.date)}</td>
                <td>
                  <ol style={{ textAlign: 'left' }}>
                    <li>{game.games.restaurants[0].name}</li>
                    <li>{game.games.restaurants[1].name}</li>
                    <li>{game.games.restaurants[2].name}</li>
                  </ol>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Leaderboard
