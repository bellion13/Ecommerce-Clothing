import React from 'react'
import './LoginSignup.css'
const Login = () => {
  return (
    <div>
      <div className='login_signup'>
        <div className='login_signup__container'>
          <h1>Sign Up</h1>
          <div className='login_signup__form'>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
          </div>
          <button type='submit'>Continue</button>
          <p className='login_signup__login'>Already have an account ? <span>Login here</span></p>
          <div className='login_signup__agree'>
            <input type="checkbox" />
            <p>By continuing , i agree to the terms of use & privacy policy</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login