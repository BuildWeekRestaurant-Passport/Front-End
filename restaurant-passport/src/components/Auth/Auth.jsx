import React, { useState } from 'react'
import api from '../../utils/api'

function Auth(props) {
    // const [signupError, setSignupError] = useState();
    // const [signupData, setSignupData] = useState({
    //     email: '',
    //     password: '',
    //     username: ''
    // })

    // const [loginError, setLoginError] = useState()
    // const [loginData, setLoginData] = useState({
    //     password: '',
    //     username: ''
    // })

    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(true);

    // const handleSignupChange = (event) => {
    //     setSignupData({
    //         ...signupData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    // const handleSignupSubmit = (event) => {
    //     event.preventDefault()

    //     api()
    //         .post('users/register', signupData)
    //         .then(result => {
    //             props.history.push('/login')
    //         })
    //         .catch(err => {
    //             setSignupError(err.response.data.message)
    //         })
    // }

    // const handleLoginChange = (event) => {
    //     setLoginData({
    //         ...loginData,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    // const handleLoginSubmit = (event) => {
    //     event.preventDefault()

    //     // We are using are axios instance with predefined values,
    //     // rather than just plain old axios
    //     api()
    //         .post("users/login", loginData)
    //         .then(result => {
    //             // Store our new token in local storage so it persists
    //             localStorage.setItem("token", result.data.token)
    //             // Redirect the user to their account page after logging in
    //             props.history.push("/places")
    //         })
    //         .catch(err => {
    //             throw (err)
    //         })

    // }

    // const toggle = e => {
    //     e.preventDefault()
    //     setLogin(!login)
    //     setSignup(!signup)
    // }

    const reveal = {
        display: 'none'
    }

    return (
        // <div className='form'>
        //     <div className='signup'>
        //         <button onClick={toggle}>Signup</button>
        //         {signup === true ? <form onSubmit={handleSignupSubmit}>
        //             {signupError && <div className='error'>{signupError}</div>}

        //             <input type="email" name='email' placeholder='Enter your email' value={signupData.email} onChange={handleSignupChange} />
        //             <input type="username" name='username' placeholder='Enter your username' value={signupData.username} onChange={handleSignupChange} />
        //             <input type="password" name='password' placeholder='Enter a password' value={signupData.password} onChange={handleSignupChange} />

        //             <button type='submit'>Register</button>

        //         </form> : <form onSubmit={handleSignupSubmit} style={reveal}>
        //                 {signupError && <div className='error'>{signupError}</div>}

        //                 <input type="email" name='email' placeholder='Enter your email' value={signupData.email} onChange={handleSignupChange} />
        //                 <input type="username" name='username' placeholder='Enter your username' value={signupData.username} onChange={handleSignupChange} />
        //                 <input type="password" name='password' placeholder='Enter a password' value={signupData.password} onChange={handleSignupChange} />

        //                 <button type='submit'>Register</button>

        //             </form>}

        //     </div>

        //     <div className='login'>
        //         <button onClick={toggle}>Login</button>
        //         {login === true ? <form onSubmit={handleLoginSubmit}>
        //             {loginError && <div className="error">{loginError}</div>}

        //             <input type="username" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} />
        //             <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />

        //             <button type="submit">Sign In</button>
        //         </form> : <form onSubmit={handleLoginSubmit} style={reveal}>
        //                 {loginError && <div className="error">{loginError}</div>}

        //                 <input type="username" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} />
        //                 <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />

        //                 <button type="submit">Sign In</button>
        //             </form>}

        //     </div>


        // </div>
        <div>

        </div>

    )
}

export default Auth;