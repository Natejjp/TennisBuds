import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Challenge } from './pages/Challenge'
import { Profile } from './pages/Profile'
import { SearchPage } from './pages/SearchPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

export function App() {
  return (
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
  )
}
