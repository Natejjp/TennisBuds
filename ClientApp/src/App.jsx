import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Challenge } from './pages/Challenge'
import { SearchPage } from './pages/SearchPage'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>
      <Route exact path="/new">
        <Challenge />
      </Route>
    </Switch>
  )
}
