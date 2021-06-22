import React, { useEffect, useState } from 'react'

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
              <a href="/">
                <i className="homeTitle"></i> Tennis Buds
              </a>
            </nav>
          </li>
          <li className="rightHeader">
            <p>Login</p>
            <img src="source" alt="Avatar" height="64" width="64" />
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
          <input type="submit" value="Submit" />
        </form>
      </main>

      <body className="containerSearch">
        <ul className="playerResults">
          {players.map((player) => (
            <li key={player.id}>
              <h2>Name: {player.name}</h2>
              <p>Zip: {player.zip}</p>
              <p>Rating: {player.rating}</p>
              <p>HomeCourt: {player.court}</p>
              <button>Challenge</button>
            </li>
          ))}
        </ul>
      </body>

      <footer>Copyrighted so don't even</footer>
    </>
  )
}
