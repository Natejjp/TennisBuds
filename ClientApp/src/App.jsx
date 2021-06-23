import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Challenge } from './pages/Challenge'
import { Profile } from './pages/Profile'
import { SearchPage } from './pages/SearchPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { getUser, isLoggedIn } from './auth'

export function App() {
  const user = getUser()

  // function handleLogout() {
  //   logout()

  //   window.location.assign('/')
  // }

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
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route exact path="/new">
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
      </Switch>
    </>
  )
}
