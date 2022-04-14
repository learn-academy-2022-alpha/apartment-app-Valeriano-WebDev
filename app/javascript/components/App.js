import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navbar'
import Apartments from './pages/Apartments'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import SearchListings from './pages/SearchListings'
import Join from './pages/CreateAccount'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return(

          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path="/listings" component={Apartments} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/findahome" component={SearchListings} />
              <Route path="/createanaccount" component={Join} />
            </Switch>
          </Router>
    )
  }
}

export default App