import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lightningthree from '../images/lightningthree.png'


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
        <h1 className="titleSearch">Zip Tennis  <img
                src={lightningthree}
                alt="Zip Tennis Logo"
                height="40"
                width="40"
              /></h1>
        <form>
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
              <p>
              <img className="searchPic" src={user.photoURL} alt={`${user.fullName}'s Avatar`} height="100" />
              </p>
              <h3>{user.name}</h3>
              <p>Zip: {user.zip} </p>
              <p>Rating: {user.rating}</p>
              <p>HomeCourt: {user.court}</p>
              <Link to={`/challenge/${user.id}`}>
                <button className="signInButton">Challenge<img
                src={lightningthree}
                alt="Zip Tennis Logo"
                height="20"
                width="20"
              /></button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
