import React from 'react'
import { getUser } from '../auth'

export function Profile() {
  const user = getUser()

  return (
    <>
      <main className="containerProfile">
        <div>
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
        </div>
        <div>
          <h1>Latest Matches</h1>
          <ul className="profileMatches">
            <li>
              <p>{user.name} vs. Opponent</p>
              <p>Win or loss: Win</p>
              <p>Score: 6-4, 6-2</p>
            </li>
            <li>
              <p>{user.name} vs. Opponent</p>
              <p>Win or loss: Loss</p>
              <p>Score: 4-6, 2-6</p>
            </li>
            <li>
              <p>{user.name} vs. Opponent</p>
              <p>Win or loss: Win</p>
              <p>Score: 6-2, 2-6, 6-4</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
