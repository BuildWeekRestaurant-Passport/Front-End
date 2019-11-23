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
  //   name: `Knife`,
  //   address: '5300 E Mockingbird Ln',
  //   city: 'Dallas',
  //   city_id: 2,
  //   description: 'bbq'
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

      <NavTabs signedIn={signedIn} />


      <Route exact path='/' component={Welcome} />

      <ProtectedRoute exact path='/places' component={List} />
      <Route exact path="/places/:id" render={props => {
        return <Description {...props} setSavedPlace={setSavedPlace} savedPlace={savedPlace} />
      }} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App


