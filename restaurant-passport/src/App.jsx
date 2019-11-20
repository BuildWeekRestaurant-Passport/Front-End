import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Logout from './components/Logout/Logut';
import { getToken } from "./utils/api"
import List from "./components/List/List"
import Description from "./components/Description/Description"
import api from "./utils/api"
import NavTabs from "./components/Navigation/Navigation"
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';



import "./App.css";

function App(props) {
  const signedIn = getToken()







  return (
    <div className="App">
      <nav>
        {signedIn && <NavTabs />}

        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        {signedIn && <Link to="/logout">Logout</Link>}
      </nav>

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/places" render={props => {
        return <List {...props} />
      }} />
      <Route exact path="/places/:id" render={props => {
        return <Description {...props} />
      }} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App


