import React from 'react'

import ub from "../images/ub.jpg"

import ub_logo from "../images/ub.svg"

import "../customCss/udemy_business.css"

export default function Udemy_business() {
    return (
        <div className='container ub-main-block'>
            <div className="ub-img">
                <img src={ub} alt="ub" />
            </div>
            <div className='content-section'>

                <div className='ub-logo-container mb-2'>
                    <img src={ub_logo} className='ub-logo' alt="ub-logo" />
                </div>
                <h3 className='mb-3'>Upskill your team with Udemy Business</h3>
                <div className='content mb-4'>

                    <ul>
                        <li>
                            <div className='li-content'>
                                <i className='material-icons bullet'>circle</i>
                                <div>
                                    Unlimited access to 25,000+ top Udemy courses, anytime, anywhere
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='li-content'>
                                <i className='material-icons bullet'>circle</i>
                                <div>
                                    International course collection in 14 languages
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='li-content'>
                                <i className='material-icons bullet'>circle</i>
                                <div>
                                    Top certifications in tech and business
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className='ub-btns'>

                        <a href="https://www.google.com" className='btn-get-ub'>Get Udemy Business</a>


                        <a href="https://www.google.com" className='btn-ub-learn-more'>Learn More</a>

                    </div>

                </div>

            </div>
        </div>
    )
}
