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
import defaultProfile from './images/defaultProfile.png'
import { EditUser } from './pages/EditUser'

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
                      <i className="homeTitle"></i> Search
                      <br />
                      Players
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
              {isLoggedIn() && user.photoURL ? (
                <Link to={`/profile/${user.id}`}>
                  <div className="avatar">
                    <img
                      className="avatarPic"
                      src={user.photoURL}
                      alt={`${user.fullName}'s Avatar`}
                      height="50"
                      width="50"
                    />
                  </div>
                </Link>
              ) : null}

              {isLoggedIn() && user.photoURL == null ? (
                <Link to={`/profile/${user.id}`}>
                  <img src={defaultProfile} alt="defaultAvatar" height="64" />
                </Link>
              ) : null}

              {isLoggedIn() ? (
                <button className="signInButton" onClick={handleLogout}>
                  {' '}
                  Logout
                </button>
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
          <Route exact path="/profile">
            <EditUser />
          </Route>
        </Switch>
        <footer className="footer">
          <Link to="/homepage">
            <p>ZipTennis</p>
          </Link>
          <p className="socialLinks">
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} alt="instagram" height="25" width="25" />
            </a>
            <a href="https://www.twitter.com/">
              <img src={twitterIcon} alt="twitter" height="25" width="25" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebookIcon} alt="facebook" height="25" width="25" />
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}
