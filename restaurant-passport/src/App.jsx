import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { getToken } from "./utils/api"
import List from "./components/List/List"
import Description from "./components/Description/Description"
import api from "./utils/api"
import NavTabs from "./components/Navigation/Navigation"import "./App.css";function App(props) {
 const signedIn = getToken()  const [data, setData] = useState([])  // Calling the api to have access to the array of places
 useEffect(() => {
   api()
     .get(
       "https://build-restaurant-passport.herokuapp.com/cities/2/restaurants"
     )
     .then(res => {
       console.log(res.data.restaurants)
       setData(res.data.restaurants)
     })
     .catch(err => {
       throw (err)
     })
 }, [])  return (
   <div className="App">
     <nav>
       {signedIn && <NavTabs />}        <Link to="/signup">Sign Up</Link>
       <Link to="/login">Login</Link>
     </nav>      <Route exact path="/login" component={Login} />
     <Route exact path="/signup" component={Signup} />
     <Route exact path="/places" render={props => {
       return <List {...props} data={data} />
     }} />
     <Route exact path="/places/:id" render={props => {
       return <Description {...props} />
     }} />
   </div>
 );
}export default App;
