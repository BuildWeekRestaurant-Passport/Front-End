import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { getToken } from "./utils/api"
import List from "./components/List/List"
import Description from "./components/Description/Description"
import api from "./utils/api"
import NavTabs from "./components/Navigation/Navigation"


import "./App.css";

function App(props) {
  const signedIn = getToken()
  // const [place, setPlace] = useState({
  //   name: `Zoli's NY Pizza`,
  //   city: 'Dallas',
  //   address: '14910 Midway Rd',
  //   description: 'Now nicely settled in to its new Addison home, Zoli’s is so much more than one of Dallas’s best destinations for cheesy, New York-style pizza. The round and square pies here are still stellar, but look deeper on the menu for one of the city’s best bowls of carbonara and a mighty fine burger.',
  //   city_id: 2
  // })

  // useEffect(() => {
  //   api().post('/cities/restaurants', place)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       throw (err)
  //     })
  // }, [])






  return (
    <div className="App">
      <nav>
        {signedIn && <NavTabs />}

        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/places" render={props => {
        return <List {...props} />
      }} />
      <Route exact path="/places/:id" render={props => {
        return <Description {...props} />
      }} />
    </div>
  );
}




