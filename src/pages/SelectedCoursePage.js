import React, { useState } from 'react'

import "../customCss/SelectedCoursePage.css"
import ReactStars from 'react-rating-star-with-type'

import useScrollPosition from "../hooks/DetectScroll.js"


export default function SelectedCoursePage() {

    const useDetectScroll = useScrollPosition();

    const divStyle = {
        position: useDetectScroll ? 'fixed' : 'relative',
        top: useDetectScroll ? 0 : 'auto',
        backgroundColor: 'inherit',
        width: '22rem',
    };


    // expand subtitles
    const [isExpand, setExpand] = useState(false);

    const expandSubs = () => {
        setExpand(true)
    }



    const [isPersonalOrTeams, setisPersonalOrTeams] = useState(1);

    // Function to handle div click
    const HandlePersonalOrTeams = (divId) => {
        setisPersonalOrTeams(divId);
    };


    return (

        <div style={{ display: 'flex', backgroundColor: '#2d2f31', padding: '0 2rem' }}>
            {/* <div className='sticky-nav'>
                <h4>Javascript for Beginners</h4>
                <div className='rating'>
                    <div className='rating-in-no'>
                        4.7
                    </div>
                    <div className='rating-in-stars'>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                    </div>
                    <div className='no-of-reviews'>
                        (334,170)
                    </div>
                </div>
            </div> */}


            <div className='mx-auto' style={{ minWidth: '80%', padding: '2rem 0', display: 'flex', justifyContent: 'space-evenly' }}>
                <div className='SelectedCoursePage-left'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb SelectedCoursePage-breadcrumb">
                            <li class="breadcrumb-item"><a href="#" style={{ color: '#c0c4fc' }}>Developement</a></li>
                            <li class="breadcrumb-item"><a href="" style={{ color: '#c0c4fc' }}>Web Developement</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ color: '#c0c4fc' }}>JavaScript</li>
                        </ol>
                    </nav>

                    <div className='text-white SelectedCoursePage-course-info'>
                        <h2>The Complete Python Bootcamp From Zero to Hero in Python</h2>
                        <p style={{ maxWidth: '37rem' }}>
                            Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
                        </p>
                        <div className='rating'>
                            <div className='rating-in-no'>
                                4.7
                            </div>
                            <div className='rating-in-stars'>
                                <ReactStars
                                    value={4.5}
                                    edit={false}
                                    style={{ fontSize: '1.1rem', color: 'goldenrod' }}
                                />
                            </div>
                            <div className='no-of-reviews d-flex font-size-point9rem'>
                                <a href=""><span className='selectedCourseLinksColor'>(334,170)</span></a>
                                <div className='no-of-students mx-2'>
                                    1,839,669 students
                                </div>
                            </div>
                        </div>

                        <div className='created-by font-size-point9rem mt-1 mb-1'>
                            Created by <span className='selectedCourseLinksColor'>Jose Portilla</span>
                        </div>

                        <div className='font-size-point9rem' style={{ display: 'flex', alignItems: 'center', gap: '.8rem', flexWrap: 'wrap' }}>
                            <div className='d-flex align-items-center'>
                                <i class="material-symbols-outlined" style={{ fontSize: '15px', marginRight: '.5rem' }}>
                                    release_alert
                                </i>
                                Last updated 7/2023
                            </div>

                            <div className='d-flex align-items-center'>
                                <i class="material-symbols-outlined" style={{ fontSize: '15px', marginRight: '.5rem' }}>
                                    language
                                </i>
                                English
                            </div>

                            <div className='d-flex align-items-center' style={{ flexWrap: 'wrap', textAlign: 'justify' }}>
                                <i class="material-symbols-outlined" style={{ fontSize: '15px', marginRight: '.5rem' }}>
                                    subtitles
                                </i>
                                English [Auto], Arabic [Auto],
                                {!isExpand ?
                                    <span className='selectedCourseLinksColor' onClick={expandSubs} style={{ cursor: 'pointer' }}>
                                        14 more
                                    </span>
                                    : null}

                                {isExpand ? <span>
                                    Dutch [Auto], French [Auto], German [Auto], Indonesian [Auto], Italian [Auto], Japanese [Auto], Korean [Auto], Polish [Auto], Portuguese [Auto], Simplified Chinese [Auto], Spanish [Auto], Thai [Auto], Turkish [Auto], Vietnamese [Auto]
                                </span> : null}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='SelectedCoursePage-right' style={{ marginLeft: '2rem' }}>
                    <div className='SelectedCoursePage-card'>
                        <div className='SelectedCoursePage-card-img-div' style={{ backgroundImage: "url('https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg')" }}>
                            <div className='image-overlay'>
                                <div className='mb-2'>
                                    <span class="material-symbols-outlined"
                                        style={{
                                            fontSize: '2.5rem',
                                            borderRadius: '100%',
                                            backgroundColor: 'white',
                                            padding: '12px',
                                            marginBottom: '1rem',
                                            filter: 'drop-shadow(0px 0px 33px black)'
                                        }}>
                                        play_arrow
                                    </span>
                                    <div style={{ color: 'white', fontWeight: '700' }}>
                                        Preview this course
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={divStyle}>
                            <div className='personal-or-teams'>
                                <div className={`personal ${isPersonalOrTeams === 1 ? 'activePersonalTeam' : 'text-muted'}`}
                                    onClick={() => HandlePersonalOrTeams(1)}>
                                    Personal
                                </div>

                                <div className={`teams ${isPersonalOrTeams === 2 ? 'activePersonalTeam' : 'text-muted'}`}
                                    onClick={() => HandlePersonalOrTeams(2)}>
                                    Teams
                                </div>

                            </div>


                            <div className='purchase-section px-2'>
                                <div className='purchase-section-box1'>
                                    <div className='d-flex align-items-center' style={{ gap: '.5rem' }}>
                                        <span className='purchase-section-box1-price' style={{ fontSize: '1.4rem', fontWeight: '800' }}>₹389</span>
                                        <span className='purchase-section-box1-actual-price text-muted'><del>₹3,199</del></span>
                                        <span className='purchase-section-box1-discount-percentage'>88% off</span>
                                    </div>

                                    <div className='discount-offer-time-left d-flex align-items-center' style={{ gap: '.5rem', color: '#b32d0f' }}>
                                        <span class="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                            alarm
                                        </span>
                                        <span className='font-size-point9rem'><b>3 days</b> left at this price!</span>
                                    </div>

                                    <div className='but-button mt-3'>
                                        <button className='purple-btn w-100'>
                                            Buy this course
                                        </button>
                                    </div>
                                </div>


                                <div className='purchase-section-box2 text-center text-muted' style={{ fontSize: 'small' }}>
                                    <div className='mb-1'>30-Day Money-Back Guarantee</div>
                                    <div className='mb-1'>Full Lifetime Access</div>
                                </div>

                                <div className='share-gift-coupon d-flex text-center font-size-point9rem' style={{ justifyContent: 'space-around', textDecoration: 'underline', fontWeight: '700' }}>
                                    <button className='nostyleButton'>Share</button>
                                    <button className='nostyleButton'>Gift this course</button>
                                    <button className='nostyleButton'>Apply Coupon</button>
                                </div>
                            </div>

                            <div className='custom-divider uk-divider-icon mt-4 mb-4'>
                                <span style={{ backgroundColor: 'white' }}>or</span>
                            </div>

                            <div className='subscribe-section' style={{ padding: '0 2rem' }}>
                                <h3 style={{ fontWeight: '700', fontSize: '1.2rem', margin: '0' }}>Subscribe to Udemy’s top courses</h3>
                                <p className='mt-2' style={{ margin: '0', fontSize: '.8rem' }}>
                                    Get this course, plus 11,000+ of our top-rated courses, with Personal Plan. <a className='purple-dark-link'>Learn more</a>
                                </p>

                                <div>
                                    <button className='light-btn w-100 mt-3 mb-3' style={{ border: '1px solid #282c34' }}>
                                        Start subscription
                                    </button>
                                </div>

                                <div className='cta text-center text-muted' style={{fontSize:'small', padding:'.5rem 0'}}>
                                    <p style={{ margin: '0'}}>
                                        Starting at ₹750 per month
                                    </p>
                                    <p style={{ marginTop: '.2rem'}}>
                                        Cancel anytime
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
