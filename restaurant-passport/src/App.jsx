import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { getToken } from './utils/api'
import List from './components/List/List'



import "./App.css";

function App(props) {
  const signedIn = getToken()



  return (
    <div className="App">
      <nav>
        {!signedIn && <Link to='/'>Sign In</Link>}
        {signedIn && <Link to='/places'>View Restaurants</Link>}

        <Link to='/signup'>Sign Up</Link>
        <Link to='/'>Login</Link>
      </nav>

      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path='/places' component={List} />
    </div>
  );
}



export default App;
