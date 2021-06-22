import React from 'react'

export function SearchPage() {
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

      <main className="containerSearch">
        <h1 className="titleSearch">Tennis Buds</h1>
        <form className="titleSearch">
          <input type="text" placeholder="Enter zip code" name="search" />
          <input type="submit" value="Submit" />
        </form>
      </main>

      <body className="containerSearch">
        <ul className="playerResults">
          <li>
            <h3>Name: Alex Andre</h3>
            <p>Rating: 4.0</p>
            <p>HomeCourt: Fossil Park</p>
            <button>Challenge</button>
          </li>
          <li>
            <h3>Name: Betty Benson</h3>
            <p>Rating: 3.5</p>
            <p>HomeCourt: Lazarillo Park</p>
            <button>Challenge</button>
          </li>
          <li>
            <h3>Name: Carl Clark</h3>
            <p>Rating: 3.0</p>
            <p>HomeCourt: Fossil Park</p>
            <button>Challenge</button>
          </li>
          <li>
            <h3>Name: Dennis Dent</h3>
            <p>Rating: 5.0</p>
            <p>HomeCourt: Lakeside Park</p>
            <button>Challenge</button>
          </li>
        </ul>
      </body>
    </>
  )
}
