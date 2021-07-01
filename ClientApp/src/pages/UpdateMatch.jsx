import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser, getUserId } from '../auth'

export function UpdateMatch() {
  const user = getUser()
  const [match, setMatch] = useState({
    id: null,
    match: '',
    format: '',
    date: '',
    time: '',
    court: '',
    createdAt: '',
    opponentName: '',
    userName: '',
    score: '',
    outcome: '',
  })

  const { match_id } = useParams()

  useEffect(
    function () {
      async function loadMatch() {
        const response = await fetch(`api/Challenges/${match_id}`)
        if (response.ok) {
          const json = await response.json()
          setMatch(json)
        }
      }
      loadMatch()
    },
    [match_id]
  )

  function handleUpdate(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const newerChallenge = { ...match, [fieldName]: value }
    setMatch(newerChallenge)
  }

  async function handleSubmit() {
    const response = await fetch(`/api/Challenges/${match_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(match),
    })
    if (response.ok) {
      window.location.assign(`/profile/${user.id}`)
    }
  }

  async function handleDelete() {
    const response = await fetch(`api/Challenges/${match.id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(match),
    })
    if (response.ok) {
      window.location.assign(`/profile/${user.id}`)
    }
  }
  return (
    <>
      <main className="updateContainer">
        <h1 className="titleUpdate">Update Match</h1>
        <section className="updateMenu">
          <form>
            <ul>
              <p>
                <label>Outcome:</label>
                <input
                  type="radio"
                  name="outcome"
                  value={`${match.userName} Defeats ${match.opponentName}`}
                  onChange={handleUpdate}
                />
                <label>Win</label>
                <input
                  type="radio"
                  name="outcome"
                  value={`${match.opponentName} Defeats ${match.userName}`}
                  onChange={handleUpdate}
                />
                <label>Loss</label>
              </p>
            </ul>

            <ul>
              <li>Score:</li>
              <li>
                <label>1st Set:</label>
                <input
                  name="firstSet"
                  type="text"
                  placeholder="Ex: 6-4"
                  onChange={handleUpdate}
                  required
                />
              </li>
              <li>
                <label>2nd Set:</label>
                <input
                  name="secondSet"
                  type="text"
                  placeholder="Ex: 6-4"
                  onChange={handleUpdate}
                  required
                />
              </li>
              <li>
                <label>3rd Set:</label>
                <input
                  name="thirdSet"
                  type="text"
                  placeholder="Ex: 6-4"
                  onChange={handleUpdate}
                />
              </li>
              <li>
                <label>4th Set:</label>
                <input
                  name="fourthSet"
                  type="text"
                  placeholder="Ex: 6-4"
                  onChange={handleUpdate}
                />
              </li>
              <li>
                <label>5th Set:</label>
                <input
                  name="fifthSet"
                  type="text"
                  placeholder="Ex: 6-4"
                  onChange={handleUpdate}
                />
              </li>
            </ul>
            <ul className="joinNow">
              <button className="signInButton" onClick={handleSubmit}>
                Submit
              </button>
              <button className="deleteButton" onClick={handleDelete}>
                Delete
              </button>
            </ul>
          </form>
        </section>
      </main>
    </>
  )
}
