import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import FlightSearch from './components/FlightSearch'
import FlightTicket from './components/FlightTicket'
import ChosenOption from './components/ChosenOption'
import TravelProfile from './components/TravelProfile'


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/flight-search">
            <FlightSearch />
          </Route>
          <Route path="/flight-ticket">
            <FlightTicket />
          </Route>
          <Route path="/chosen-option">
            <ChosenOption />
          </Route>
          <Route path="/travel-profile">
            <TravelProfile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
