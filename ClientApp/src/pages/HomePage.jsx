import React from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <main className="homePage">
        <ul className="homeTop">
          <li>
            <h2>Welcome to Tennis Buds</h2>
            <img src="source" alt="Tennis Buds Logo" height="64" width="64" />
          </li>
          <li>
            <Link to="/signin">
              <p>Sign In</p>
            </Link>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </li>
        </ul>

        <ul className="homeBottom">
          <li>
            <p>About lorem</p>
          </li>
          <li>
            <img src="source" alt="Tennis stock pic" height="64" width="64" />
          </li>
        </ul>
      </main>
    </>
  )
}
