import React from 'react'
import { Link } from 'react-router-dom'
import lightningthree from '../images/lightningthree.png'
import tennisballtwo from '../images/tennisballtwo.png'
import TennisStockPic from '../images/TennisStockPic.jpg'

export function HomePage() {
  return (
    <main className="entireHomePage">
      <section className="homePage">
          <ul className="homeTop">
            <li>
              <h2 className="titleHome">Welcome to Zip Tennis</h2>
              <img
                className="logoLightning"
                src={lightningthree}
                alt="Zip Tennis Logo"
                height="150"
                width="150"
              />
              <img
                className="logoBall"
                src={tennisballtwo}
                alt="Zip Tennis Logo"
                height="150"
              />
            </li>
            <li>
              <h3>Join Now</h3>
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
          </ul>
          <ul className="homeBottom">
            <li>
              <img src={TennisStockPic} alt="Tennis stock pic" height="250" width="250" />
            </li>
            <li>
              <img src={TennisStockPic} alt="Tennis stock pic" height="250" width="250" />
            </li>
            <li>
              <img src={TennisStockPic} alt="Tennis stock pic" height="250" width="250" />
            </li>
            <li>
              <img src={TennisStockPic} alt="Tennis stock pic" height="250" width="250" />
            </li>
          </ul>
      </section>
    </main>
  )
}
