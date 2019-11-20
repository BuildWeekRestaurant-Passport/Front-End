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
                setError(err.response.data.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}

            <input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

            <button type="submit">Sign In</button>
        </form>
    )
}

export default Signin