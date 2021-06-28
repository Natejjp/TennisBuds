import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function UpdateMatch() {
  const [match, setMatch] = useState({
    match: '',
    format: '',
    date: '',
    time: '',
    court: '',
    createdAt: '',
    opponent: '',
    score: '',
    outcome: '',
  })

  const { match_id } = useParams()

  useEffect(function () {
    async function loadMatch() {
      const response = await fetch(`api/Challenges/${match_id}`)
      if (response.ok) {
        const json = await response.json()
        setMatch(json)
      }
    }
    loadMatch()
  }, [])

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
      console.log('hi')
    }
  }
  return (
    <>
      <main>
        <h1>Update Match</h1>
        <section>
     
        <form>

          <ul>

          <p>
            <label>Outcome:</label>
            <input
              type="radio"
              name="outcome"
              value="Win"
              onChange={handleUpdate}
            />
            <label>Win</label>
            <input
              type="radio"
              name="outcome"
              value="Loss"
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
          <p>
            <button onClick={handleSubmit}>Submit</button>
          </p>
                </form>
        </section>
      </main>
    </>
  )
}
