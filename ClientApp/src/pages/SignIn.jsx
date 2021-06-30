import React, { useState } from 'react'
import { recordAuthentication } from '../auth'

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const newerUser = { ...user, [fieldName]: value }
    setUser(newerUser)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      recordAuthentication(apiResponse)
      window.location.assign('/')
    }
  }

  return (
    <>
      <main className="signInContainer">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {errorMessage ? <p>{errorMessage}</p> : null}
          <p>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <input className="signInButton" type="submit" name="submit"></input>
          </p>
        </form>
      </main>
    </>
  )
}
