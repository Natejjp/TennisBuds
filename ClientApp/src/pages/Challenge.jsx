import React, { useState } from 'react'

export function Challenge() {
  const [newChallenge, setNewChallenge] = useState({
    match: '',
    format: '',
    date: '',
    time: '',
    court: 'Fossil Park',
    playerId: 1,
  })

  function handleChallenge(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const newerChallenge = { ...newChallenge, [fieldName]: value }
    setNewChallenge(newerChallenge)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Challenges', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newChallenge),
    })
    if (response.ok) {
      console.log('hello')
    }
  }

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

      <main className="challengeContainer">
        <h1>Challenge Betty Benson</h1>

        <form action="/" onSubmit={handleSubmit}>
          <p>
            <label>Type of Match:</label>
            <input
              type="radio"
              name="match"
              value="Singles"
              onChange={handleChallenge}
            />
            <label>Singles</label>
            <input
              type="radio"
              name="match"
              value="Double"
              onChange={handleChallenge}
            />
            <label>Doubles</label>
          </p>
          <p>
            <label>Type of Format:</label>
            <input
              type="radio"
              name="format"
              value="3 Sets of 6"
              onChange={handleChallenge}
            />
            <label>3 Sets of 6</label>
            <input
              type="radio"
              name="format"
              value="5 Sets of 6"
              onChange={handleChallenge}
            />
            <label>5 Sets of 6</label>
          </p>
          <p>
            <label>Choose a date:</label>
            <input
              type="date"
              name="date"
              id="start"
              value={newChallenge.date}
              onChange={handleChallenge}
            />
          </p>
          <p>
            <label>Choose a time:</label>
            <input
              type="time"
              name="time"
              value={newChallenge.time}
              onChange={handleChallenge}
            />
            <small>Contact Player</small>
          </p>
          <p>
            <label>Choose a Court:</label>
            <select id="court" name="court" onChange={handleChallenge}>
              <optgroup label="St. Pete">
                <option value="Fossil Park">Fossil Park</option>
                <option value="Lakeside Park">Lakeside Park</option>
              </optgroup>
              <optgroup label="Tampa">
                <option value="Sandra W Freedman Tennis Complex">
                  Sandra W Freedman Tennis Complex
                </option>
                <option value="HCC Tennis Center">HCC Tennis Center</option>
              </optgroup>
            </select>
          </p>
          <p>
            <input type="submit" value="submit" />
          </p>
        </form>
      </main>
    </>
  )
}
