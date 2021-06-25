import React from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="entireHomePage">
      <section className="homePage">
        <div className="test">
          <ul className="homeTop">
            <li>
              <h2>Welcome to Zip Tennis</h2>
              <img
                className="pineapple"
                src="images/TennisLogo.png"
                alt="Zip Tennis Logo"
                height="100"
                width="100"
              />
            </li>
            <li>
              <Link to="/signin">
                <button>Sign In</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </li>
            <li>
              <p>About lorem</p>
            </li>
            <li>
              <img src="source" alt="Tennis stock pic" height="64" width="64" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
