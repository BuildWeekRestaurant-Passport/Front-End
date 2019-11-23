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
        <div className='center'>
            {props.signup === true ? <div className='signupSection'>
                <form onSubmit={handleSubmit} className='signupForm'>
                    {error && <div className='error'>{error}</div>}
                    <h2>Sign Up</h2>
                    <ul className='noBullet'>
                        <li>
                            <label htmlFor="email"></label>
                            <input type="email" name='email' placeholder='Enter your email' value={data.email} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="username"></label>
                            <input type="username" name='username' placeholder='Enter your username' value={data.username} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="password"></label>
                            <input type="password" name='password' placeholder='Enter a password' value={data.password} onChange={handleChange} className='inputFields' />
                        </li>
                        <li id='center-btn'>
                            <button id='join-btn' type='submit'>Submit</button>
                        </li>
                    </ul>


                </form>
            </div> : <form onSubmit={handleSubmit} style={props.reveal}>
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