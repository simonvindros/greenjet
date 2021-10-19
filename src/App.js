import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import FlightSearch from './components/FlightSearch'
import FlightTicket from './components/FlightTicket'


function App() {

  const [currentPage, setCurrentPage] = useState('')
  console.log('currentpage ---  ', currentPage)

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
