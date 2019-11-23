import React, { useState } from "react"
import api from "../../utils/api"

function Signin(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        password: '',
        username: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // We are using are axios instance with predefined values,
        // rather than just plain old axios
        api()
            .post("users/login", data)
            .then(result => {
                // Store our new token in local storage so it persists
                localStorage.setItem("token", result.data.token)
                // Redirect the user to their account page after logging in
                props.history.push("/places")
            })
            .catch(err => {
                throw (err)
            })

    }

    return (
        <div className='form'>
            {props.login === true ? <div className='signupSection'>
                <form onSubmit={handleSubmit} className='signupForm'>
                    {error && <div className="error">{error}</div>}
                    <h2>Login</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="username"></label>
                            <input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="password"></label>
                            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} className='inputFields' />

                        </li>
                        <li id='center-btn'>
                            <button type="submit" id='join-btn'>Sign In</button>

                        </li>
                    </ul>

                </form>
            </div> : <form onSubmit={handleSubmit} style={props.reveal}>
                    {error && <div className="error">{error}</div>}

                    <input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

                    <button type="submit">Sign In</button>
                </form>}

        </div>

    )
}

export default Signin