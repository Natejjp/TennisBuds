import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../auth'

export function Profile() {
  const user = getUser()

  const [challenges, setChallenges] = useState([])
  const [incomingChallenges, setIncomingChallenges] = useState([])

  useEffect(
    function () {
      async function loadChallenges() {
        const response = await fetch(`api/Challenges?filter=${user.id}`)
        if (response.ok) {
          const json = await response.json()
          setChallenges(json)
        }
      }
      loadChallenges()
    },
    [challenges]
  )


  useEffect(
    function () {
      async function loadChallenges() {
        const response = await fetch(`api/Challenges?filterTwo=${user.id}`)
        if (response.ok) {
          const json = await response.json()
          setIncomingChallenges(json)
        }
      }
      loadChallenges()
    },
    [incomingChallenges]
  )

  return (
    <>
      <main className="containerProfile">
        <section>
          <ul className="profileStats">
            <li className="profilePic">
              <img src="source" alt="ProfilePic" height="100" width="100" />
            </li>
            <li>Name: {user.name}</li>
            <li>Rating: {user.rating}</li>
            <li>HomeCourt: {user.court}</li>
            <li>ZipCode Area: {user.zip}</li>
            <button>Profile Settings</button>
          </ul>
        </section>
        <section>
          <h1>Latest Matches</h1>
          <ul className="profileMatches">
            {challenges.map((challenge) => (
              <li key={challenge.id}>
                <p>
                  {user.name} vs. {challenge.opponentName}
                  <button>Accpet Match</button>
                  <button>Decline Match</button>
                </p>
                <p>Win or loss: {challenge.outcome}</p>
                <p>Score: {challenge.firstSet} {challenge.secondSet} {challenge.thirdSet} {challenge.fourthSet} {challenge.fifthSet}</p>
                <Link to={`/updatematch/${challenge.id}`}>
                  <button>Update Match</button>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="profileMatches">
            {incomingChallenges.map((incomingChallenge) => (
              <li key={incomingChallenge.id}>
                <p>
                  {user.name} vs. {incomingChallenge.userName}
                  <button>Accpet Match</button>
                  <button>Decline Match</button>
                </p>
                <p>Win or loss: {incomingChallenge.outcome}</p>
                <p>Score: {incomingChallenge.firstSet} {incomingChallenge.secondSet} {incomingChallenge.thirdSet} {incomingChallenge.fourthSet} {incomingChallenge.fifthSet}</p>
                <Link to={`/updatematch/${incomingChallenge.id}`}>
                  <button>Update Match</button>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
