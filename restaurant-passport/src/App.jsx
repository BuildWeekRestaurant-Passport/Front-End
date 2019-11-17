import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { connect } from "react-redux";
import { fetchPlaces } from '../../actions/restaurants'
import {Link, Route} from 'react-router-dom'
import RestCard from './RestCard'
import axios from 'axios'

function List(props) {

    // Calling the api to have access to the array of places
    useEffect(() => {
        props.fetchPlaces()
    }, [])

    // This is your restaurant array
    console.log(props.places)
    return (
        <div>
            {props.places.length === 1 && <h1>Loading...</h1>}
            {props.places.map(place => (
                <>
                <Link to={`/${place.restId}`}>
                <h2>{place.restName} </h2>
                </Link>
                <Route path="/:id" render={props => {
                return <RestCard {...props} id={place.restId} />
            }}/>                                    
                </>
            ))}            
        </div>
    )
 }

function mapStateToProps(state) {
    return {
        places: state.places
    }
}

const mapDispatchToProps = {
    fetchPlaces
}

export default connect(mapStateToProps, mapDispatchToProps)(List)




// import React, { useEffect } from "react";
// import { Link, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import { getToken } from './utils/api'
// import List from './components/List/List'



// import "./App.css";

// function App(props) {
//   const signedIn = getToken()



//   return (
//     <div className="App">
//       <nav>
//         {!signedIn && <Link to='/'>Sign In</Link>}
//         {signedIn && <Link to='/places'>View Restaurants</Link>}

//         <Link to='/signup'>Sign Up</Link>
//         <Link to='/'>Login</Link>
//       </nav>

//       <Route exact path="/" component={Login} />
//       <Route exact path="/signup" component={Signup} />
//       <Route exact path='/places' component={List} />
//     </div>
//   );
// }



// export default App;
