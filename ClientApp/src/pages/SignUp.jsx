import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    zip: '',
    rating: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const newerUser = { ...newUser, [fieldName]: value }
    setNewUser(newerUser)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
    console.log('hi')
  }

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
      <main className="signUpContainer">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {errorMessage ? <p>{errorMessage}</p> : null}

          <p>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={newUser.name}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={newUser.email}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={newUser.password}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <label>Telephone:</label>
            <input
              type="tel"
              name="telephone"
              placeholder="1234567890"
              value={newUser.telephone}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <label>Zip:</label>
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={newUser.zip}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <label>Rating:</label>
            <select id="court" name="court" onChange={handleStringFieldChange}>
              <option value="1.0">1.0</option>
              <option value="1.5">1.5</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
              <option value="3.0">3.0</option>
              <option value="3.5">3.5</option>
              <option value="4.0">4.0</option>
              <option value="4.5">4.5</option>
            </select>
          </p>
          <p>
            <input type="file" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
    </>
  )
}
