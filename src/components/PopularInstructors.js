import React from 'react'

import instructor_img from "../images/customer.jpg"

import Rating from '@mui/material/Rating';
import { transform } from 'framer-motion';

export default function PopularInstructors() {
    return (
        <div>
            <div className='popular-instructors' style={{ margin: '4rem 0 4rem 0' }}>
                <h3 style={{ fontWeight: '700' }}>Popular Instructors</h3>

                <div uk-slider={'draggable:true; finite:true'}>
                    <div className='uk-position-relative'>
                        <div class="uk-slider-container py-2" >
                            <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid uk-grid-small">
                                {/* <li >
                                    <div class="card popular-instructors-card-main" style={{ padding: '1rem 0 0 1rem', borderRadius: '0', cursor: 'pointer', border: '1px solid #d1d7dc', minHeight: '10rem', minWidth: '18rem' }}>
                                        <div class="row g-0">
                                            <div class="col-md-3 popular-instructors-card-col-img">
                                                <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                            </div>
                                            <div class="col-md-9 popular-instructors-card-col">
                                                <div class="card-body course-card-main-body" style={{ padding: '0 2rem' }}>
                                                    <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                    <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                    <span className='instructor-rating'>4.7
                                                        <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                        <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                    </span>
                                                    <span className='student-count' style={{ fontWeight: 'lighter', fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                    <p className='total-courses' style={{ fontWeight: 'lighter', fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> students</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div class="card popular-instructors-card-main" style={{ padding: '1rem 0 0 1rem', borderRadius: '0', cursor: 'pointer', border: '1px solid #d1d7dc', minHeight: '10rem', minWidth: '18rem' }}>
                                        <div class="row g-0">
                                            <div class="col-md-3 popular-instructors-card-col-img">
                                                <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                            </div>
                                            <div class="col-md-9 popular-instructors-card-col">
                                                <div class="card-body course-card-main-body" style={{ padding: '0 2rem' }}>
                                                    <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                    <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                    <span className='instructor-rating'>4.7
                                                        <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                        <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                    </span>
                                                    <span className='student-count' style={{ fontWeight: 'lighter', fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                    <p className='total-courses' style={{ fontWeight: 'lighter', fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> students</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div class="card popular-instructors-card-main" style={{ padding: '1rem 0 0 1rem', borderRadius: '0', cursor: 'pointer', border: '1px solid #d1d7dc', minHeight: '10rem', minWidth: '18rem' }}>
                                        <div class="row g-0">
                                            <div class="col-md-3 popular-instructors-card-col-img">
                                                <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                            </div>
                                            <div class="col-md-9 popular-instructors-card-col">
                                                <div class="card-body course-card-main-body" style={{ padding: '0 2rem' }}>
                                                    <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                    <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                    <span className='instructor-rating'>4.7
                                                        <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                        <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                    </span>
                                                    <span className='student-count' style={{ fontWeight: 'lighter', fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                    <p className='total-courses' style={{ fontWeight: 'lighter', fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> students</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div class="card popular-instructors-card-main" style={{ padding: '1rem 0 0 1rem', borderRadius: '0', cursor: 'pointer', border: '1px solid #d1d7dc', minHeight: '10rem', minWidth: '18rem' }}>
                                        <div class="row g-0">
                                            <div class="col-md-3 popular-instructors-card-col-img">
                                                <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                            </div>
                                            <div class="col-md-9 popular-instructors-card-col">
                                                <div class="card-body course-card-main-body" style={{ padding: '0 2rem' }}>
                                                    <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                    <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                    <span className='instructor-rating'>4.7
                                                        <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                        <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                    </span>
                                                    <span className='student-count' style={{ fontWeight: 'lighter', fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                    <p className='total-courses' style={{ fontWeight: 'lighter', fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> students</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}

                                <div class="card" style={{ minWidth: "auto", cursor: 'pointer', borderRadius:'0' }}>
                                    <div class="row g-0" style={{border: '1px solid #d1d7dc', padding:'1rem'}}>
                                        <div class="col-md-3">
                                            <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card-body py-0">
                                                <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                <span className='instructor-rating'>4.7
                                                    <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                    <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                </span>
                                                <span className='student-count' style={{fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                <p className='total-courses' style={{fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ minWidth: "auto", cursor: 'pointer', borderRadius:'0' }}>
                                    <div class="row g-0" style={{border: '1px solid #d1d7dc', padding:'1rem'}}>
                                        <div class="col-md-3">
                                            <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card-body py-0">
                                                <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                <span className='instructor-rating'>4.7
                                                    <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                    <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                </span>
                                                <span className='student-count' style={{ fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                <p className='total-courses' style={{  fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ minWidth: "auto", cursor: 'pointer', borderRadius:'0' }}>
                                    <div class="row g-0" style={{border: '1px solid #d1d7dc', padding:'1rem'}}>
                                        <div class="col-md-3">
                                            <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card-body py-0">
                                                <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                <span className='instructor-rating'>4.7
                                                    <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                    <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                </span>
                                                <span className='student-count' style={{fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                <p className='total-courses' style={{ fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ minWidth: "auto", cursor: 'pointer', borderRadius:'0' }}>
                                    <div class="row g-0" style={{border: '1px solid #d1d7dc', padding:'1rem'}}>
                                        <div class="col-md-3">
                                            <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card-body py-0">
                                                <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                <span className='instructor-rating'>4.7
                                                    <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                    <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                </span>
                                                <span className='student-count' style={{ fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                <p className='total-courses' style={{ fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ minWidth: "auto", cursor: 'pointer', borderRadius:'0' }}>
                                    <div class="row g-0" style={{border: '1px solid #d1d7dc', padding:'1rem'}}>
                                        <div class="col-md-3">
                                            <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card-body py-0">
                                                <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                <span className='instructor-rating'>4.7
                                                    <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                    <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                </span>
                                                <span className='student-count' style={{  fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                <p className='total-courses' style={{  fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ minWidth: "auto", cursor: 'pointer', borderRadius:'0' }}>
                                    <div class="row g-0" style={{border: '1px solid #d1d7dc', padding:'1rem'}}>
                                        <div class="col-md-3">
                                            <img src={instructor_img} class="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card-body py-0">
                                                <h6 class="card-title" style={{ fontWeight: 'bold' }}>Dr. Angela Yu</h6>
                                                <p class="card-text" style={{ marginTop: 0, marginBottom: '.1rem', fontSize: '.9rem' }}>Python, Data Science</p>
                                                <span className='instructor-rating'>4.7
                                                    <i className='material-icons' style={{ background: 'transparent', color: 'goldenrod' }}>star</i>
                                                    <span style={{ fontWeight: 'lighter', fontSize: '.8rem' }}>Instructor Rating</span>
                                                </span>
                                                <span className='student-count' style={{ fontSize: '.8rem' }}><span style={{ fontWeight: '700' }}>2,469,139</span> students</span>
                                                <p className='total-courses' style={{ fontSize: '.8rem', marginTop: '.1rem' }}><span style={{ fontWeight: '700' }}>7</span> Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                               


                            </ul>

                            <a className="uk-position-center-left uk-position-small" href uk-slidenav-previous uk-slider-item="previous" style={{ marginTop: '1rem', left: '-2rem' }}><i className='material-icons'>chevron_left</i></a>
                            <a className="uk-position-center-right uk-position-small" href uk-slidenav-next uk-slider-item="next" style={{ marginTop: '1rem', right: '-2rem' }}><i className='material-icons'>chevron_right</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
