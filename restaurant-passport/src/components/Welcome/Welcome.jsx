import React from 'react'
import { Route } from 'react-router-dom';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";


function Welcome(props) {
    return (
        <section className='welcome'>
            <h1>Restaurant Passport</h1>
            <h3>Discover new places to dine in a few clicks.</h3>


        </section>
    )
}

export default Welcome