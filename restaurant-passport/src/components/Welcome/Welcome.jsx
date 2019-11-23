import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";


function Welcome(props) {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(true);
    console.log(props)

    const toggle = e => {
        e.preventDefault()
        setLogin(!login)
        setSignup(!signup)
    }

    const reveal = {
        display: 'none'
    }

    return (
        <section className='welcome'>
            <h3>Discover new places to dine in a few clicks.</h3>
            <div className="form">
                <div>
                    <button onClick={toggle}>Login</button>
                    <button onClick={toggle}>Signup</button>
                </div>





            </div>
            <div className='form'>
                <Signup signup={signup} setSignup={setSignup} toggle={toggle} reveal={reveal} history={props.history} />
                <Login login={login} setLogin={setLogin} toggle={toggle} reveal={reveal} history={props.history} />
            </div>

        </section>
    )
}

export default Welcome