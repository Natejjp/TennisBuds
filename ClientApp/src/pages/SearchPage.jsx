import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function SearchPage() {
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')

  useEffect(
    function () {
      async function loadUsers() {
        const url =
          searchUser.length === 0
            ? 'api/Users'
            : `api/Users?search=${searchUser}`
        const response = await fetch(url)
        if (response.ok) {
          const json = await response.json()
          setUsers(json)
        }
      }
      loadUsers()
    },
    [searchUser]
  )

  return (
    <>
      <main className="containerSearch">
        <h1 className="titleSearch">Tennis Buds</h1>
        <form className="titleSearch">
          <input
            type="text"
            placeholder="Enter zip code"
            value={searchUser}
            onChange={function (event) {
              setSearchUser(event.target.value)
            }}
          />
        </form>
      </main>

      <section className="containerSearch">
        <ul className="playerResults">
          {users.map((user) => (
            <li key={user.id}>
              <h2>Name: {user.name}</h2>
              <p>Zip: {user.zip}</p>
              <p>Rating: {user.rating}</p>
              <p>HomeCourt: {user.court}</p>
              <Link to={`/challenge/${user.id}`}>
                <button>Challenge</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
