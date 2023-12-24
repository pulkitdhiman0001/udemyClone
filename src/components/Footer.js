import React from 'react'

import "../customCss/footer.css"

export default function Footer() {
    return (
        <>
            <div className='footer bg-dark'>
                <div className='footer-links'>


                    <a href="https://www.google.com" className='language'>
                        <div className='material-icons globe'>
                            language
                        </div>
                        <div className='ln'>
                            <span>English</span>
                        </div>
                    </a>


                    <div className='links'>
                        <ul>
                            <li><a href="https://www.google.com">Udemy Busines</a></li>
                            <li><a href="https://www.google.com">Teach on Udemy</a></li>
                            <li><a href="https://www.google.com">Get the app</a></li>
                            <li><a href="https://www.google.com">About us</a></li>
                            <li><a href="https://www.google.com">Contact us</a></li>
                        </ul>

                        <ul>
                            <li><a href="https://www.google.com">Careers</a></li>
                            <li><a href="https://www.google.com">Blog</a></li>
                            <li><a href="https://www.google.com">Help and Support</a></li>
                            <li><a href="https://www.google.com">Affiliate</a></li>
                            <li><a href="https://www.google.com">Investors</a></li>
                        </ul>

                        <ul>
                            <li><a href="https://www.google.com">Terms</a></li>
                            <li><a href="https://www.google.com">Privacy policy</a></li>
                            <li><a href="https://www.google.com">Cookie settings</a></li>
                            <li><a href="https://www.google.com">Sitemap</a></li>
                            <li><a href="https://www.google.com">Accessibility statement</a></li>
                        </ul>
                    </div>



                </div>


            </div>
            <div className='udemy-copyright bg-dark'>
                <div className='udemy-copyright-logo'>
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" />
                </div>
                <div className='copyright text-white'>
                    <span>© 2023 Udemy, Inc.</span>
                </div>
            </div>
        </>
    )
}
