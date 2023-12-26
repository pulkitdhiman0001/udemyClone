import React, { useState } from 'react'

import "../customCss/signup.css"
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'

import PasswordStrengthBar from 'react-password-strength-bar';
import Footer from '../components/Footer';
import Ubf_notice from '../components/Ufb_notice';



export default function Signup() {


    const [password, setPassword] = useState('');

    return (
        <div>
            <Header />
            <MobileHeader />

            <div className='container mx-auto signup-container'>
                <p className='signup-heading' style={{fontWeight: 900}}>Sign up and start learning</p>

                <form action="/signup" method="">

                    <div className="form-floating" style={{ marginBottom: '.5rem' }}>
                        <input type="text" className="form-control" id="floatingInput" required placeholder='Full Name' />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>

                    <div className="form-floating" style={{ marginBottom: '.5rem' }}>
                        <input type="email" className="form-control" id="floatingInput" required placeholder='Email' />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating" style={{ marginBottom: '.5rem' }}>
                        <input type="password" className="form-control" id="floatingPassword" required value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {password.length > 0 ?
                        <PasswordStrengthBar password={password} className='password-strength-checker' scoreWords={['Too weak', 'Could be stronger', 'Strong password', 'Very strong password']} />
                        : null}



                    <div class="form-check mt-3 mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault" style={{fontWeight:'lighter'}}>
                            Send me special offers, personalized recommendations, and learning tips.
                        </label>
                    </div>
                        
                   

                    <div className='login-container-login-button mb-3'>
                        <button type='submit'>Log In</button>
                    </div>

                    <div className='more-auth-helpers text-center' >
                        <div className='terms-privicy'>
                            <span style={{fontSize:'.7rem'}}>By signing up, you agree to our <a href="https://www.google.com">Terms of Use</a> and <a href="https://www.google.com">Privacy Policy.</a></span>
                        </div>

                        <hr style={{borderTop:'1px solid black'}}/>

                        <div className='signup-container-login' style={{fontSize:'.9rem'}}>
                            <span>Already have an account? <a href="/login">Log in</a></span>
                        </div>
                    </div>
                </form>

            </div>

            <Ubf_notice />
            <Footer />
        </div>
    )
}
