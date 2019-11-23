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
import Welcome from './components/Welcome/Welcome'
import Header from "./components/List/Header"



import "./App.css";

function App(props) {
  const signedIn = getToken()
  const [savedPlace, setSavedPlace] = useState([
    {
      name: ''
    }
  ])
  console.log(savedPlace)
  // const [place, setPlace] = useState({
  //   name: `Zoli's NY Pizza`,
  //   address: '14910 Midway Rd',
  //   city: 'Dallas',
  //   city_id: 2,
  //   description: 'pizza'
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
        {!signedIn && <Link to="/signup">Sign Up</Link>}
        {!signedIn && <Link to="/login">Login</Link>}
        {/* {signedIn && <Link to="/logout">Logout</Link>} */}
      </nav>

      {/* <Welcome /> */}
      {/* <Route exact path='/' component={Welcome} /> */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      <ProtectedRoute exact path='/places' component={List} />
      <Route exact path="/places/:id" render={props => {
        return <Description {...props} setSavedPlace={setSavedPlace} savedPlace={savedPlace} />
      }} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App


