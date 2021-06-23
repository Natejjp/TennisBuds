import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function SearchPage() {
  const [players, setPlayers] = useState([])
  const [searchPlayer, setSearchPlayer] = useState('')

  useEffect(
    function () {
      async function loadPlayers() {
        const url =
          searchPlayer.length === 0
            ? 'api/Players'
            : `api/Players?search=${searchPlayer}`
        const response = await fetch(url)
        if (response.ok) {
          const json = await response.json()
          setPlayers(json)
        }
      }
      loadPlayers()
    },
    [searchPlayer]
  )
  return (
    <>
      <header>
        <ul className="header">
          <li className="leftHeader">
            <nav>
              <Link to="/">
                <i className="homeTitle"></i> Tennis Buds
              </Link>
            </nav>
          </li>
          <li className="rightHeader">
            <Link to="/signin">
              <p>Sign In</p>
            </Link>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
            <Link to="/profile">
              <img src="source" alt="Avatar" height="64" width="64" />
            </Link>
          </li>
        </ul>
      </header>

      <main className="containerSearch">
        <h1 className="titleSearch">Tennis Buds</h1>
        <form className="titleSearch">
          <input
            type="text"
            placeholder="Enter zip code"
            value={searchPlayer}
            onChange={function (event) {
              setSearchPlayer(event.target.value)
            }}
          />
        </form>
      </main>

      <section className="containerSearch">
        <ul className="playerResults">
          {players.map((player) => (
            <li key={player.id}>
              <h2>Name: {player.name}</h2>
              <p>Zip: {player.zip}</p>
              <p>Rating: {player.rating}</p>
              <p>HomeCourt: {player.court}</p>
              <Link to="/new">
                <button>Challenge</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer>Copyrighted so don't even</footer>
    </>
  )
}
