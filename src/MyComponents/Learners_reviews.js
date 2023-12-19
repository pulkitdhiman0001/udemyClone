import React from 'react'

import quote from "./images/quote.svg"

import "./customCss/learners_reviews.css"



export default function Learners_reviews() {



    return (
        <div className='mt-5 learners_reviews'>

            <div className='mx-auto learners-reviews-main' style={{ width: '83%' }}>

               

                <div className='main-title'>
                    <span>How learners like you are achieving their goals</span>
                </div>




                <div className='review-cards mt-4'>


                    <div className=" uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets:true;finite:true">

                        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid">
                            <li>
                                <div className='review-card'>

                                    <div className='review-content'>
                                        <img alt='"' src={quote} style={{ width: '17.78px', height: '16px', marginBottom: '1.6rem' }}></img>
                                        <div style={{ marginBottom: '1.6rem', textAlign: 'justify' }}>
                                            <span>
                                                I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
                                            </span>
                                        </div>
                                        <div className='user heading-sm'>
                                            <div className='user-img'>
                                                WA
                                            </div>
                                            <div className='user-name heading-sm'>
                                                <span>
                                                    Wll A
                                                </span>
                                                <div className='user-info'>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='courses-link'>
                                            <a href="https://www.google.com">
                                                <i className='material-icons play-icon' style={{ width: '3.2rem', height: '3.2rem' }}>play_circle</i>
                                                <span className='link-title'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='review-card'>

                                    <div className='review-content'>
                                        <img src={quote} style={{ width: '17.78px', height: '16px', marginBottom: '1.6rem' }} alt='"'></img>
                                        <div style={{ marginBottom: '1.6rem', textAlign: 'justify' }}>
                                            <span>
                                                I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
                                            </span>
                                        </div>
                                        <div className='user heading-sm'>
                                            <div className='user-img'>
                                                WA
                                            </div>
                                            <div className='user-name heading-sm'>
                                                <span>
                                                    Wll A
                                                </span>
                                                <div className='user-info'>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='courses-link'>
                                            <a href="https://www.google.com">
                                                <i className='material-icons play-icon' style={{ width: '3.2rem', height: '3.2rem' }}>play_circle</i>
                                                <span className='link-title'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='review-card'>

                                    <div className='review-content'>
                                    <img src={quote} style={{ width: '17.78px', height: '16px', marginBottom: '1.6rem' }} alt='"'></img>
                                        <div style={{ marginBottom: '1.6rem', textAlign: 'justify' }}>
                                            <span>
                                                I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
                                            </span>
                                        </div>
                                        <div className='user heading-sm'>
                                            <div className='user-img'>
                                                WA
                                            </div>
                                            <div className='user-name heading-sm'>
                                                <span>
                                                    Wll A
                                                </span>
                                                <div className='user-info'>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='courses-link'>
                                            <a href="https://www.google.com">
                                                <i className='material-icons play-icon' style={{ width: '3.2rem', height: '3.2rem' }}>play_circle</i>
                                                <span className='link-title'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className='review-card'>

                                    <div className='review-content'>
                                    <img src={quote} style={{ width: '17.78px', height: '16px', marginBottom: '1.6rem' }} alt='"'></img>
                                        <div style={{ marginBottom: '1.6rem', textAlign: 'justify' }}>
                                            <span>
                                                I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
                                            </span>
                                        </div>
                                        <div className='user heading-sm'>
                                            <div className='user-img'>
                                                WA
                                            </div>
                                            <div className='user-name heading-sm'>
                                                <span>
                                                    Wll A
                                                </span>
                                                <div className='user-info'>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='courses-link'>
                                            <a href="https://www.google.com">
                                                <i className='material-icons play-icon' style={{ width: '3.2rem', height: '3.2rem' }}>play_circle</i>
                                                <span className='link-title'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className='courses-section-btns' style={{top:'50%'}}>
                            <a className='courses-section-left-learners-are-viewing-arrow' href uk-slider-item="previous" style={{ position: 'absolute', left: '-1.2rem' }}>
                                <i className='material-icons courses-section-left-learners-are-viewing-arrow-icon' >chevron_left</i>

                            </a>



                            <a className='courses-section-right-learners-are-viewing-arrow uk-link-reset' href uk-slider-item="next" style={{ position: 'absolute', right: '-1.2rem' }}>
                                <i className='material-icons courses-section-right-learners-are-viewing-arrow-icon'>chevron_right</i>
                            </a>


                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
