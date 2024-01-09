import React, { useEffect, useState } from 'react'

import ReactStars from 'react-rating-star-with-type'



import "../customCss/learners_are_viewing.css"

import course_img from "../images/course-img.jpg"

import { Link } from "react-router-dom"

import ListItem from '../components/ListItemCarousel'

export default function Learner_are_viewing() {




    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update the windowWidth state whenever the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    return (

        <div className='mx-auto learners-are-viewing' style={{ padding: '4rem 1rem 0rem 1rem' }}>


            <div className='learners-are-viewing-title'>
                <h2>
                    Learners are viewing
                </h2>
            </div>

            <section style={{ position: 'relative', padding: '0 1rem' }}>
                <div className='course-cards learners-are-viewing-course-cards'>


                    <div className="uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; finite:true" style={{ marginTop: '-5rem', padding: '6rem 0 5rem 0' }}>

                        <ul className={windowWidth < 1200 ? "uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid uk-grid-small" : windowWidth < 980 ? "uk-slider-items uk-child-width-1-2 uk-child-width-1-2@m uk-grid uk-grid-small" : "uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-grid uk-grid-small"}>
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />


                        </ul>


                        <div className='courses-section-btns'>
                            <a className='courses-section-left-learners-are-viewing-arrow' href uk-slider-item="previous" style={{ position: 'absolute', left: '-1.2rem' }}>
                                <i className='material-icons courses-section-left-learners-are-viewing-arrow-icon' >chevron_left</i>

                            </a>



                            <a className='courses-section-right-learners-are-viewing-arrow' href uk-slider-item="next" style={{ position: 'absolute', right: '0.8rem' }}>
                                <i className='material-icons courses-section-right-learners-are-viewing-arrow-icon' >chevron_right</i>
                            </a>


                        </div>

                    </div>


                </div>

                <div className='learners-are-viewing-mobileview w-100' >



                    <section style={{ position: 'relative' }}>



                        <div class="course-cards uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider={' finite:true'} >

                            <ul class="uk-slider-items uk-grid uk-grid-small">
                                <li class="uk-width-4-5">
                                    <Link to={"course_name"}>
                                        <div className='card-container'>
                                            <div className='course-img'>
                                                <img src={course_img} alt='course-img' />
                                            </div>
                                            <div className='course-details'>
                                                <div className='course-title'>
                                                    <h3><a href="https://www.google.com">The Complete 2023 Web Development Bootcamp</a></h3>
                                                </div>
                                                <div className='instructor-name'>
                                                    Dr. Angela Yu
                                                </div>
                                                <div className='rating'>
                                                    <div className='rating-in-no'>
                                                        4.7
                                                    </div>
                                                    <div className='rating-in-stars'>
                                                        <ReactStars
                                                            value={4.5}
                                                            edit={false}
                                                            style={{ fontSize: '1.1rem', color: 'goldenrod' }}
                                                        />                                                                    </div>
                                                    <div className='no-of-reviews'>
                                                        (334,170)
                                                    </div>
                                                </div>
                                                <div className='course-price'>
                                                    ₹3,199
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div className='seller-badge'>
                                                        <h6><span className="badge text-black">Bestseller</span></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="uk-width-4-5">
                                    <Link to={"course_name"}>
                                        <div className='card-container'>
                                            <div className='course-img'>
                                                <img src={course_img} alt='course-img' />
                                            </div>
                                            <div className='course-details'>
                                                <div className='course-title'>
                                                    <h3><a href="https://www.google.com">The Complete 2023 Web Development Bootcamp</a></h3>
                                                </div>
                                                <div className='instructor-name'>
                                                    Dr. Angela Yu
                                                </div>
                                                <div className='rating'>
                                                    <div className='rating-in-no'>
                                                        4.7
                                                    </div>
                                                    <div className='rating-in-stars'>
                                                        <ReactStars
                                                            value={4.5}
                                                            edit={false}
                                                            style={{ fontSize: '1.1rem', color: 'goldenrod' }}
                                                        />                                                                    </div>
                                                    <div className='no-of-reviews'>
                                                        (334,170)
                                                    </div>
                                                </div>
                                                <div className='course-price'>
                                                    ₹3,199
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div className='seller-badge'>
                                                        <h6><span className="badge text-black">Bestseller</span></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="uk-width-4-5">
                                    <Link to={"course_name"}>
                                        <div className='card-container'>
                                            <div className='course-img'>
                                                <img src={course_img} alt='course-img' />
                                            </div>
                                            <div className='course-details'>
                                                <div className='course-title'>
                                                    <h3><a href="https://www.google.com">The Complete 2023 Web Development Bootcamp</a></h3>
                                                </div>
                                                <div className='instructor-name'>
                                                    Dr. Angela Yu
                                                </div>
                                                <div className='rating'>
                                                    <div className='rating-in-no'>
                                                        4.7
                                                    </div>
                                                    <div className='rating-in-stars'>
                                                        <ReactStars
                                                            value={4.5}
                                                            edit={false}
                                                            style={{ fontSize: '1.1rem', color: 'goldenrod' }}
                                                        />                                                                    </div>
                                                    <div className='no-of-reviews'>
                                                        (334,170)
                                                    </div>
                                                </div>
                                                <div className='course-price'>
                                                    ₹3,199
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div className='seller-badge'>
                                                        <h6><span className="badge text-black">Bestseller</span></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="uk-width-4-5">
                                    <Link to={"course_name"}>
                                        <div className='card-container'>
                                            <div className='course-img'>
                                                <img src={course_img} alt='course-img' />
                                            </div>
                                            <div className='course-details'>
                                                <div className='course-title'>
                                                    <h3><a href="https://www.google.com">The Complete 2023 Web Development Bootcamp</a></h3>
                                                </div>
                                                <div className='instructor-name'>
                                                    Dr. Angela Yu
                                                </div>
                                                <div className='rating'>
                                                    <div className='rating-in-no'>
                                                        4.7
                                                    </div>
                                                    <div className='rating-in-stars'>
                                                        <ReactStars
                                                            value={4.5}
                                                            edit={false}
                                                            style={{ fontSize: '1.1rem', color: 'goldenrod' }}
                                                        />                                                                    </div>
                                                    <div className='no-of-reviews'>
                                                        (334,170)
                                                    </div>
                                                </div>
                                                <div className='course-price'>
                                                    ₹3,199
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div className='seller-badge'>
                                                        <h6><span className="badge text-black">Bestseller</span></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="uk-width-4-5">
                                    <Link to={"course_name"}>
                                        <div className='card-container'>
                                            <div className='course-img'>
                                                <img src={course_img} alt='course-img' />
                                            </div>
                                            <div className='course-details'>
                                                <div className='course-title'>
                                                    <h3><a href="https://www.google.com">The Complete 2023 Web Development Bootcamp</a></h3>
                                                </div>
                                                <div className='instructor-name'>
                                                    Dr. Angela Yu
                                                </div>
                                                <div className='rating'>
                                                    <div className='rating-in-no'>
                                                        4.7
                                                    </div>
                                                    <div className='rating-in-stars'>
                                                        <ReactStars
                                                            value={4.5}
                                                            edit={false}
                                                            style={{ fontSize: '1.1rem', color: 'goldenrod' }}
                                                        />                                                                    </div>
                                                    <div className='no-of-reviews'>
                                                        (334,170)
                                                    </div>
                                                </div>
                                                <div className='course-price'>
                                                    ₹3,199
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div className='seller-badge'>
                                                        <h6><span className="badge text-black">Bestseller</span></h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>




                    </section >
                </div >

            </section >
        </div >
    )
}
