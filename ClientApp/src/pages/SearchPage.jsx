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
    <main className="searchPage">
      <section className="containerSearch">
        <h1 className="titleSearch">Zip Tennis</h1>
        <form className="titleSearch">
          <input
            className="inputSearch"
            type="text"
            placeholder="Enter zip code"
            value={searchUser}
            onChange={function (event) {
              setSearchUser(event.target.value)
            }}
          />
        </form>
      </section>

      <section className="containerSearchList">
        <ul className="playerResults">
          {users.map((user) => (
            <li key={user.id} className="playerDetails">
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
    </main>
  )
}
