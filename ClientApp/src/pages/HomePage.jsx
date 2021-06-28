import React from 'react'
import { Link } from 'react-router-dom'
import lightning from '../images/lightning.png'
import blacktennisball from '../images/blacktennisball.png'
import TennisStockPic from '../images/TennisStockPic.jpg'

export function HomePage() {
  return (
    <main className="entireHomePage">
      <section className="homePage">
        <div className="test">
          <ul className="homeTop">
            <li>
              <h2 className="titleHome">Welcome to Zip Tennis</h2>
              <img
                className="logoLightning"
                src={lightning}
                alt="Zip Tennis Logo"
                height="100"
                width="100"
              />
              <img
                className="logoBall"
                src={blacktennisball}
                alt="Zip Tennis Logo"
                height="100"
                width="100"
              />
            </li>
            <li>
              <Link to="/signin">
                <button className="signInButton">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="signUpButton">Sign Up</button>
              </Link>
            </li>
            <li>
              <h3>What is Zip Tennis?</h3>
              <p>Zip Tennis is about connecting tennis players in search for a quick match.
              Using a general zip code search for players view their rating, home court preference, 
              and schedule a match for the near or distant future! Have Fun and Enjoy!</p>
            </li>
            <li>
              <img src={TennisStockPic} alt="Tennis stock pic" height="200" width="200" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
