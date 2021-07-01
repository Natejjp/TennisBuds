import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../auth'
import swords from '../images/swords.png'
import shield from '../images/shield.png'

export function Profile() {
  const user = getUser()

  const [challenges, setChallenges] = useState([])
  const [incomingChallenges, setIncomingChallenges] = useState([])

  useEffect(function () {
    async function loadChallenges() {
      const response = await fetch(`api/Challenges?filter=${user.id}`)
      if (response.ok) {
        const json = await response.json()
        setChallenges(json)
      }
    }
    loadChallenges()
  }, [])

  useEffect(function () {
    async function loadChallenges() {
      const response = await fetch(`api/Challenges?filterTwo=${user.id}`)
      if (response.ok) {
        const json = await response.json()
        setIncomingChallenges(json)
      }
    }
    loadChallenges()
  }, [])

  return (
    <>
      <main className="containerProfile">
        <section className="profileTop">
          <ul>
            <li className="profilePic">
              <img
                className="profileAvatar"
                src={user.photoURL}
                alt={`${user.fullName}'s Avatar`}
                height="150"
                width="150"
              />
            </li>
          </ul>
          <ul className="profileStats">
            <li>Name: {user.name}</li>
            <li>Rating: {user.rating}</li>
            <li>HomeCourt: {user.court}</li>
            <li>ZipCode Area: {user.zip}</li>
            <Link to="/profile">
              <button className="signInButton">Edit Profile</button>
            </Link>
          </ul>
        </section>

        <section className="profileBottom">
          <h1 className="profileTitle">
            <img src={swords} alt="Zip Tennis Logo" height="40" width="40" />
            Challenge Matches
            <img src={swords} alt="Zip Tennis Logo" height="40" width="40" />
          </h1>
          <ul className="profileMatches">
            {challenges.map((challenge) => (
              <li key={challenge.id}>
                <p>
                  {user.name} vs. {challenge.opponentName}
                </p>
                <p>Result: {challenge.outcome}</p>
                <p>
                  Score: {challenge.firstSet} {challenge.secondSet}{' '}
                  {challenge.thirdSet} {challenge.fourthSet}{' '}
                  {challenge.fifthSet}
                </p>
                <Link to={`/updatematch/${challenge.id}`}>
                  <button className="signInButton">Update Match</button>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="profileBottom">
          <h1 className="profileTitle">
            <img src={shield} alt="Zip Tennis Logo" height="40" width="40" />
            Defending Matches
            <img src={shield} alt="Zip Tennis Logo" height="40" width="40" />
          </h1>
          <ul className="profileMatches">
            {incomingChallenges.map((incomingChallenge) => (
              <li key={incomingChallenge.id}>
                <p>
                  {user.name} vs. {incomingChallenge.userName}
                </p>
                <p>Result: {incomingChallenge.outcome}</p>
                <p>
                  Score: {incomingChallenge.firstSet}
                  {incomingChallenge.secondSet} {incomingChallenge.thirdSet}{' '}
                  {incomingChallenge.fourthSet} {incomingChallenge.fifthSet}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
