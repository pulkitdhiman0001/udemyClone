import React from 'react'

import course_img from "../images/course-img.jpg"

import ReactStars from 'react-rating-star-with-type'
import { Link } from 'react-router-dom'

export default function CoursesAccrodion() {
    return (
        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
