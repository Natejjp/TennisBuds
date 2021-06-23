import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    zip: '',
    court: 'Fossil Park',
    rating: 0,
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
  }

  return (
    <>
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
            <label>Choose a Home Court:</label>
            <select
              id="court"
              name="court"
              value={newUser.court}
              onChange={handleStringFieldChange}
            >
              <optgroup label="St. Pete">
                <option value="Fossil Park">Fossil Park</option>
                <option value="Lakeside Park">Lakeside Park</option>
              </optgroup>
              <optgroup label="Tampa">
                <option value="Sandra W Freedman Tennis Complex">
                  Sandra W Freedman Tennis Complex
                </option>
                <option value="HCC Tennis Center">HCC Tennis Center</option>
              </optgroup>
            </select>
          </p>

          <p>
            <label>Rating:</label>
            <input
              type="text"
              name="rating"
              placeholder="1.0 - 7.0"
              value={newUser.rating}
              onChange={handleStringFieldChange}
            />
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
