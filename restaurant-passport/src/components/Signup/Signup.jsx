import React, { useState } from 'react'
import api from '../../utils/api'

function Signup(props) {
    const [error, setError] = useState();
    const [data, setData] = useState({
        email: '',
        password: '',
        username: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        api()
            .post('users/register', data)
            .then(result => {
                props.history.push('/login')
            })
            .catch(err => {
                setError(err.response.data.message)
            })
    }

    return (
        <div>
            {props.signup === true ? <form onSubmit={handleSubmit}>
                {error && <div className='error'>{error}</div>}

                <input type="email" name='email' placeholder='Enter your email' value={data.email} onChange={handleChange} />
                <input type="username" name='username' placeholder='Enter your username' value={data.username} onChange={handleChange} />
                <input type="password" name='password' placeholder='Enter a password' value={data.password} onChange={handleChange} />

                <button type='submit'>Submit</button>

            </form> : <form onSubmit={handleSubmit} style={props.reveal}>
                    {error && <div className='error'>{error}</div>}

                    <input type="email" name='email' placeholder='Enter your email' value={data.email} onChange={handleChange} />
                    <input type="username" name='username' placeholder='Enter your username' value={data.username} onChange={handleChange} />
                    <input type="password" name='password' placeholder='Enter a password' value={data.password} onChange={handleChange} />

                    <button type='submit'>Submit</button>

                </form>}

        </div>

    )
}

export default Signup