import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Challenge } from './pages/Challenge'
import { Profile } from './pages/Profile'
import { SearchPage } from './pages/SearchPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { getUser, isLoggedIn, logout } from './auth'
import { HomePage } from './pages/HomePage'
import { UpdateMatch } from './pages/UpdateMatch'
import twitterIcon from './images/twitterIcon.png'
import instagramIcon from './images/instagramIcon.png'
import facebookIcon from './images/facebookIcon.png'

export function App() {
  const user = getUser()

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
              <nav className="nav">
                <p>
                {isLoggedIn() ? (
                  <Link to="/">
                    <i className="homeTitle"></i> Search<br/>Players
                  </Link>
                ) : null}
                </p>
                <h3>
                <Link to="/homepage"> Home</Link>
                </h3>
              </nav>
            </li>
            <li className="rightHeader">
              {isLoggedIn() ? null : (
                <Link to="/signin">
                  <button className="signInButton">Sign In</button>
                </Link>
              )}
              {isLoggedIn() ? null : (
                <Link to="/signup">
                  <button className="signUpButton">Sign Up</button>
                </Link>
              )}
              {isLoggedIn() ? (
                <Link to={`/profile/${user.id}`}>
                  <img src="source" alt="Avatar" height="64" width="64" />
                </Link>
              ) : null}
              {isLoggedIn() ? (
                <button className="signInButton" onClick={handleLogout}> Logout</button>
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
          <Route exact path="/profile/:test_id">
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
          <Route exact path="/updatematch/:match_id">
            <UpdateMatch />
          </Route>
        </Switch>
        <footer className="footer">
          <p>
          ZipTennis
          </p>
          <p className="socialLinks">
          <img src={instagramIcon} alt="instagram" height = "25" width ="25"/>
          <img src={twitterIcon} alt="twitter" height = "25" width ="25"/>
          <img src={facebookIcon} alt="facebook" height = "25" width ="25"/>
          </p>
          </footer>
      </div>
    </>
  )
}
