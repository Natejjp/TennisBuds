import React from 'react'

export function SignUp() {
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
      <main className="signUpContainer">
        <h1>Sign Up</h1>
        <form action="#">
          <p>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Full Name" />
          </p>
          <p>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email Address" />
          </p>
          <p>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </p>
          <p>
            <label>Telephone:</label>
            <input type="tel" name="telephone" placeholder="1234567890" />
          </p>
          <p>
            <label>Rating:</label>
            <input type="text" name="rating" placeholder="1.0 - 7.0" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
    </>
  )
}
