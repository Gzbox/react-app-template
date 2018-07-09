import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { FullRoster, Player } from '../components'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster} />
    <Route path='/roster/:number' component={Player} />
  </Switch>
)


export default Roster
