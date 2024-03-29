import React from 'react'

import "../customCss/login.css"

import google_logo from "../images/google.svg"
import fb_logo from "../images/fb.svg"
import apple_logo from "../images/apple.svg"

import UfbNotice from '../components/Ufb_notice'
import { Link } from 'react-router-dom'

export default function Login() {
  return (

    <div className='login-form'>

      <div className='container mx-auto login-container'>
        <p className='login-heading'>Log in to your Udemy account</p>
        <div className='login-options'>
          <div className='third-party-login'>
            <div>
              <img src={google_logo} alt="Google" />
            </div>
            <span>Continue with Google</span>
          </div>

          <div className='third-party-login'>
            <div>
              <img src={fb_logo} alt="Facebook" />
            </div>
            <span>Continue with Facebook</span>
          </div>

          <div className='third-party-login'>
            <div>
              <img src={apple_logo} alt="Apple" />
            </div>
            <span>Continue with Apple</span>
          </div>

          <form action="/login" method="">
            <div className="form-floating" style={{ marginBottom: '.5rem' }}>
              <input type="email" className="form-control" id="floatingInput" required placeholder='Email'/>
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating" style={{ marginBottom: '.5rem' }}>
              <input type="password" className="form-control" id="floatingPassword" required placeholder='Password'/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className='login-container-login-button'>
              <button type='submit'>Log In</button>
            </div>
          </form>

          <div className='login-container-other-options text-center'>
            <div className='forgot-passowrd' >
              <span>or <a href="https://www.google.com">Forgot Password</a></span>
            </div>

            <hr style={{ borderTop: '1px solid black', marginTop: '0' }} />

            <div className='login-container-signup mb-2'>
              <span>Don't have an account?  <Link to={'/signup'}><a>Sign Up</a></Link></span>
            </div>


            <div className='organization-login'>
              <span><a href="https://www.google.com">Log in with your organization</a></span>
            </div>
          </div>


        </div>
      </div>

      <UfbNotice />
    </div>
  )
}
