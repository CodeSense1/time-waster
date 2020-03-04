import React from 'react';
import './App.css';
import WasteMeter from "./client"
import Dashboard from "./dashboard"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {


  return (

    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/waste" /></li>
            <li><Link to="/dashboard" /></li>
          </ul>
        </div>

        <hr />

        <Switch>
          <Route path="/waste">
            <WasteMeter />
          </Route>
          <Route>
            <Dashboard />
          </Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App;
