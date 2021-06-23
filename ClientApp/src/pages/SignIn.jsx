import React from 'react'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <>
      <header>
        <ul className="header">
          <li className="leftHeader">
            <nav>
              <Link to="/">
                <i className="homeTitle"></i> Tennis Buds
              </Link>
            </nav>
          </li>
          <li className="rightHeader">
            <Link to="/signin">
              <p>Sign In</p>
            </Link>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
            <Link to="/profile">
              <img src="source" alt="Avatar" height="64" width="64" />
            </Link>
          </li>
        </ul>
      </header>
      <main className="signInContainer">
        <h1>Sign In</h1>
        <form action="#">
          <p>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email Address" />
          </p>
          <p>
            <label>Password</label>
            <input type="text" name="password" placeholder="Password" />
          </p>
          <p>
            <input type="submit" name="submit"></input>
          </p>
        </form>
      </main>
    </>
  )
}
