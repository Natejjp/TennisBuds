import React, { useState, useEffect } from 'react'

export function Profile() {
  return (
    <>
      <header>
        <ul className="header">
          <li className="leftHeader">
            <nav>
              <a href="/">
                <i className="homeTitle"></i> Tennis Buds
              </a>
            </nav>
          </li>
          <li className="rightHeader">
            <p>Login</p>
            <img src="source" alt="Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>

      <main className="containerProfile">
        <div>
          <ul className="profileStats">
            <li className="profilePic">
              <img src="source" alt="ProfilePic" height="100" width="100" />
            </li>
            <li>Name: Alex Andre</li>
            <li>Rating: 4.0</li>
            <li>HomeCourt: Fossil Park</li>
            <li>ZipCode Area: 33713</li>
            <button>Profile Settings</button>
          </ul>
        </div>
        <div>
          <h1>Latest Matches</h1>
          <ul className="profileMatches">
            <li>
              <p>Alex Andre vs. Betty Benson</p>
              <p>Win or loss: Win</p>
              <p>Score: 6-4, 6-2</p>
            </li>
            <li>
              <p>Alex Andre vs. Carl Clark</p>
              <p>Win or loss: Loss</p>
              <p>Score: 4-6, 2-6</p>
            </li>
            <li>
              <p>Alex Andre vs. Dennis Dent</p>
              <p>Win or loss: Win</p>
              <p>Score: 6-2, 2-6, 6-4</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
