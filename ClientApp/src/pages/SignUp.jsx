import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    zip: '',
    court: 'Fossil Park',
    rating: 0,
    photoURL: '',
  })

  const [isUploading, setIsUploading] = useState(false)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
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


  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)
    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()
    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)
    try {
      setIsUploading(true)
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })
      setIsUploading(false)
      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the user,
      // otherwise show an error
      if (response.ok) {
        const apiResponse = await response.json()
        const url = apiResponse.url
        setNewUser({ ...newUser, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch (error) {
      // Catch any network errors and show the user we could not process their upload
      console.debug(error)
      setErrorMessage('Unable to upload image')
    }
    setIsUploading(false)
  }
  
  let dropZoneMessage = 'Drag a picture of the user here to upload!'
  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }
  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
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
          {newUser.photoURL ? (
            <p>
              <img alt="User Photo" width={200} src={newUser.photoURL} />
            </p>
          ) : null}

          <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneMessage}
            </div>
          </div>
          </p>

          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
    </>
  )
}
