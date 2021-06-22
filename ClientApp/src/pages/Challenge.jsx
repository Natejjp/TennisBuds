import React, { useState } from 'react'

export function Challenge() {
  const [newChallenge, setNewChallenge] = useState({
    id: 0,
    'player id': 0,
    match: '',
    format: '',
    date: '',
    time: '',
    court: '',
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
              value={newChallenge.match}
              onChange={handleChallenge}
            />
            <label>Singles</label>
            <input
              type="radio"
              name="match"
              value={newChallenge.match}
              onChange={handleChallenge}
            />
            <label>Doubles</label>
          </p>
          <p>
            <label>Type of Format:</label>
            <input
              type="radio"
              name="format"
              value={newChallenge.format}
              onChange={handleChallenge}
            />
            <label>3 Sets of 6</label>
            <input
              type="radio"
              name="format"
              value={newChallenge.format}
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
              min="2021-01-01"
              max="2021-12-31"
              onChange={handleChallenge}
            />
          </p>
          <p>
            <label>Choose a time:</label>
            <input
              type="time"
              min="09:00"
              max="18:00"
              name="time"
              value={newChallenge.time}
              onChange={handleChallenge}
            />
            <small>Contact Player</small>
          </p>
          <p>
            <label>Choose a Court:</label>
            <select id="courts" name="courts" onChange={handleChallenge}>
              <optgroup label="St. Pete">
                <option value={newChallenge.court}>Fossil Park</option>
                <option value={newChallenge.court}>Lakeside Park</option>
              </optgroup>
              <optgroup label="Tampa">
                <option value={newChallenge.court}>
                  Sandra W Freedman Tennis Complex
                </option>
                <option value={newChallenge.court}>HCC Tennis Center</option>
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
