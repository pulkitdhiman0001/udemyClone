import React, { useEffect, useState } from 'react'

import "../customCss/courses_section.css"

import course_img from "../images/course-img.jpg"

import ReactStars from 'react-rating-star-with-type'

import ListItem from '../components/ListItemCarousel'

export default function Courses_section() {


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
        <div className='courses_section mt-5'>
            <div className='main-title'>
                <h2>
                    A broad selection of courses
                </h2>
                <p className='sub-title'>
                    Choose from over 210,000 online video courses with new additions published every month
                </p>
            </div>

            <div class="course-categories-btns mt-5 mb-3" tabindex="-1" style={{ overflow: 'hidden' }}>
                <div className='uk-visible-toggle uk-dark' uk-slider={'dragable:true;'} style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <ul class={windowWidth > 920 ? "uk-slider-items uk-width-1-5 uk-grid uk-grid-small" : "uk-slider-items uk-width-1-3 uk-grid uk-grid-small"}>
                        <li>
                            <button className='course-categories-btn'>Pyhon</button>
                        </li>
                        <li>
                            <button className='course-categories-btn'>Excel</button>

                        </li>
                        <li>
                            <button className='course-categories-btn'>Web Developement</button>
                        </li>
                        <li>

                            <button className='course-categories-btn'>JavaScript</button>
                        </li>
                        <li>

                            <button className='course-categories-btn'>Data Science</button>
                        </li>
                        <li>

                            <button className='course-categories-btn'>Amazon AWS</button>
                        </li>
                        <li>

                            <button className='course-categories-btn'>Drawing</button>
                        </li>


                    </ul>

                    <a class="" href uk-slider-item="next" style={{ zIndex: 1, filter: 'drop-shadow(-10px 0px 6px white)', backgroundColor: 'white', color: '#5624d0' }}>
                        <i className='material-icons'>arrow_forward_ios</i>
                    </a>

                </div>



            </div>



            <div className='courses-section-content' >

                <div className='course-desc'>

                    <h4 className='course-section-heading'>Expand your career opportunities with Python</h4>
                    <p className='course-section-detail-desc mb-4'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
                    <a href="https://www.google.com" className='course-section-explore-btn'>Explore Python</a>
                </div>

                <div className='learners-are-viewing w-100' >


                    <section style={{ position: 'relative' }}>
                        <div className='course-cards'>


                            <div className="uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; finite: true" style={{ padding: '6rem 0 5rem 0', marginTop: '-2rem' }}>

                                <ul className={windowWidth < 1200 ? "uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid uk-grid-small" : windowWidth < 980 ? "uk-slider-items uk-child-width-1-2 uk-child-width-1-2@m uk-grid uk-grid-small" : "uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-grid uk-grid-small"}>
                                    <ListItem />
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



                                    <a className='courses-section-right-learners-are-viewing-arrow' href uk-slider-item="next" style={{ position: 'absolute', right: '-1.2rem' }}>
                                        <i className='material-icons courses-section-right-learners-are-viewing-arrow-icon'>chevron_right</i>
                                    </a>


                                </div>

                            </div>




                        </div>


                    </section >
                </div >

                <div className='learners-are-viewing-mobileview w-100' style={{ padding: '4rem 0rem 4rem 0' }}>

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Python
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">

                                    <div className='learners-are-viewing-mobileview w-100' >



                                        <section style={{ position: 'relative' }}>

                                            <div class="course-cards uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider={' finite:true'} >

                                                <ul class="uk-slider-items uk-grid uk-grid-small">
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                </ul>
                                            </div>

                                        </section >
                                    </div >
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Excel
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">

                                    <div className='learners-are-viewing-mobileview w-100' >



                                        <section style={{ position: 'relative' }}>

                                            <div class="course-cards uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider={' finite:true'} >

                                                <ul class="uk-slider-items uk-grid uk-grid-small">
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                </ul>
                                            </div>

                                        </section >
                                    </div >
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Web Development
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">

                                    <div className='learners-are-viewing-mobileview w-100' >



                                        <section style={{ position: 'relative' }}>

                                            <div class="course-cards uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider={' finite:true'} >

                                                <ul class="uk-slider-items uk-grid uk-grid-small">
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                    <li class="uk-width-4-5">
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
                                                    </li>
                                                </ul>
                                            </div>

                                        </section >
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
