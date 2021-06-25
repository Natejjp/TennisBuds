import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Challenge } from './pages/Challenge'
import { Profile } from './pages/Profile'
import { SearchPage } from './pages/SearchPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { isLoggedIn, logout } from './auth'
import { HomePage } from './pages/HomePage'

export function App() {
  function handleLogout() {
    logout()

    window.location.assign('/homepage')
  }

  return (
    <>
      <div className="container">
        <header>
          <ul className="header">
            <li className="leftHeader">
              <nav>
                {isLoggedIn() ? (
                  <Link to="/">
                    <i className="homeTitle"></i> SearchPlayers
                  </Link>
                ) : null}
                <Link to="/homepage"> Home</Link>
              </nav>
            </li>
            <li className="rightHeader">
              {isLoggedIn() ? null : (
                <Link to="/signin">
                  <p>Sign In</p>
                </Link>
              )}
              {isLoggedIn() ? null : (
                <Link to="/signup">
                  <p>Sign Up</p>
                </Link>
              )}
              {isLoggedIn() ? (
                <Link to="/profile">
                  <img src="source" alt="Avatar" height="64" width="64" />
                </Link>
              ) : null}
              {isLoggedIn() ? (
                <button onClick={handleLogout}> Logout</button>
              ) : null}
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/challenge/:opponent_id">
            <Challenge />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
        </Switch>
        <footer className="footer">ZipTennis</footer>
      </div>
    </>
  )
}
