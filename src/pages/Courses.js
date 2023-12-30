import React, { useState } from 'react'

import TopicsUnitCarousel from "../components/TopicsUnitCarousel"
import Breadcrumb from "../components/Breadcrumb"
import Ufb_notice from "../components/Ufb_notice"

import "../customCss/courses.css"
import "../customCss/learners_are_viewing.css"

import course_img from "../images/courses.jpg"

import ListItem from "../components/ListItemCarousel"

import useWindowWidth from '../hooks/useWindowWidth'
import Rating from '@mui/material/Rating';

import BubbleMobileView from "../components/BubbleMobileView"

export default function Courses() {

  const windowWidth = useWindowWidth();

  const [activeDiv, setActiveDiv] = useState(1);

  // Function to handle div click
  const handleDivClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <>

      <div className='courses mx-auto'>

        <h2 className='courseName-heading' style={{fontWeight:'700'}}>Development Courses</h2>
        <h3 className='courseName-subHeading'>Courses to get you started</h3>


        <div uk-slider={"sets:true; draggable:true; finite:true"} className='courses-section-desktop'>

          <div className="uk-position-relative">

            <div className="uk-slider-container">
              <div className='slider-menus'>
                <div className={`${activeDiv === 1 ? 'active-div' : ''}`}
                  onClick={() => handleDivClick(1)}>Most Popular</div>

                <div className={`${activeDiv === 2 ? 'active-div' : ''}`}
                  onClick={() => handleDivClick(2)}>New</div>
                <div className={`${activeDiv === 3 ? 'active-div' : ''}`}
                  onClick={() => handleDivClick(3)}>Trending</div>
              </div>

              <ul className={"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l   uk-grid uk-grid-small"}>
                <ListItem />
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
            </div>


            <a className="uk-position-center-left uk-position-small" href uk-slidenav-previous uk-slider-item="previous" style={{ marginTop: '-2rem', left: '-2rem' }}><i className='material-icons'>chevron_left</i></a>
            <a className="uk-position-center-right uk-position-small" href uk-slidenav-next uk-slider-item="next" style={{ marginTop: '-2rem', right: '-2rem' }}><i className='material-icons'>chevron_right</i></a>


          </div>

        </div>

        <div className='learners-are-viewing-mobileview w-100'>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Python
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body p-0">

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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                <button className="accordion-button collapsed  py-3 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Excel
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body p-0">

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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                <button className="accordion-button collapsed  py-3 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Web Development
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body p-0">

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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                                  </div>
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

        <div className='featured-courses' style={{ margin: '4rem 0 4rem 0' }}>
          <h3 style={{ fontWeight: '700' }}>Featured courses</h3>

          <div uk-slider={'draggable:true; autoplay:true'}>
            <div className='uk-position-relative'>
              <div class="uk-slider-container" style={{ border: '1px solid #d1d7dc' }}>
                <ul class="uk-slider-items uk-child-width-1-1">
                  <li>
                    <div class="card course-card-main" style={{ padding: '2rem', borderRadius: '0', cursor: 'pointer' }}>
                      <div class="row g-0">
                        <div class="col-md-5">
                          <img src={course_img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-7">
                          <div class="card-body course-card-main-body" style={{ padding: '0 2rem', maxWidth: '30rem' }}>
                            <h3 class="card-title" style={{ fontWeight: 'bold' }}>Go - The Complete Guide</h3>
                            <p class="card-text" style={{ marginTop: 0, marginBottom: '.3rem' }}>Learn Go ("Golang") from the ground up & in great depth by building multiple demo projects, incl. a REST API</p>
                            <span className='instructor-name'>By Someone</span>
                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                              <div className='updatedDate'>
                                Updated <b>July 2023</b>
                              </div>

                              <div className='totalHour-level-subtitles courses-totalHour-level-subtitles'>
                                <div className='totalHour'>
                                  22 total hours
                                </div>
                                <div className='totalLecture'>
                                  127 lectures
                                </div>
                                <div className='level'>
                                  All Levels
                                </div>
                                <div className='dubtitles'>
                                  Subtitles
                                </div>
                              </div>

                            </div>

                            <div className='rating' style={{ alignItems: 'unset' }}>
                              <div className='rating-in-no'>
                                4.7
                              </div>
                              <div className='rating-in-stars'>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                              </div>
                              <div className='no-of-reviews'>
                                (334,170)
                              </div>

                              <div className='seller-badge' style={{ marginLeft: '.5rem' }}>
                                <h6><span className="badge text-black">Bestseller</span></h6>
                              </div>
                            </div>

                            <p class="courses-course-price card-text mt-5"><b class="text-body-dark" style={{ fontSize: '1.2rem' }}>₹1,999</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="card course-card-main" style={{ padding: '2rem', borderRadius: '0', cursor: 'pointer' }}>
                      <div class="row g-0">
                        <div class="col-md-5">
                          <img src="https://img-b.udemycdn.com/course/480x270/5682894_e112.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-7">
                          <div class="card-body course-card-main-body" style={{ padding: '0 2rem', maxWidth: '30rem' }}>
                            <h3 class="card-title" style={{ fontWeight: 'bold' }}>Go - The Complete Guide</h3>
                            <p class="card-text" style={{ marginTop: 0, marginBottom: '.3rem' }}>Learn Go ("Golang") from the ground up & in great depth by building multiple demo projects, incl. a REST API</p>
                            <span className='instructor-name'>By Someone</span>
                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                              <div className='updatedDate'>
                                Updated <b>July 2023</b>
                              </div>

                              <div className='totalHour-level-subtitles courses-totalHour-level-subtitles'>
                                <div className='totalHour'>
                                  22 total hours
                                </div>
                                <div className='totalLecture'>
                                  127 lectures
                                </div>
                                <div className='level'>
                                  All Levels
                                </div>
                                <div className='dubtitles'>
                                  Subtitles
                                </div>
                              </div>

                            </div>

                            <div className='rating' style={{ alignItems: 'unset' }}>
                              <div className='rating-in-no'>
                                4.7
                              </div>
                              <div className='rating-in-stars'>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{ fontSize: '1.1rem' }} />
                              </div>
                              <div className='no-of-reviews'>
                                (334,170)
                              </div>

                              <div className='seller-badge' style={{ marginLeft: '.5rem' }}>
                                <h6><span className="badge text-black">Bestseller</span></h6>
                              </div>
                            </div>

                            <p class="courses-course-price card-text"><b class="text-body-dark" style={{ fontSize: '1.2rem' }}>₹1,999</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <a className="uk-position-center-left uk-position-small" href uk-slidenav-previous uk-slider-item="previous" style={{ marginTop: '1rem', left: '-2rem' }}><i className='material-icons'>chevron_left</i></a>
                <a className="uk-position-center-right uk-position-small" href uk-slidenav-next uk-slider-item="next" style={{ marginTop: '1rem', right: '-2rem' }}><i className='material-icons'>chevron_right</i></a>
              </div>
            </div>
          </div>
        </div>

        

        <div className='TopicsUnitCarousel'>
          <h3 style={{fontWeight:'700'}}>Popular topics</h3>
          {windowWidth > 600 ?
          <TopicsUnitCarousel />
        : <BubbleMobileView />}
        </div>
      </div>

      {/* <section style={{ position: 'relative' }}>
          <div className='course-cards'>


            <div className="uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; finite: true" style={{ padding: '6rem 0 5rem 0', marginTop: '-2rem' }}>

              <ul className={windowWidth < 1200 ? "uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid uk-grid-small" : windowWidth < 980 ? "uk-slider-items uk-child-width-1-2 uk-child-width-1-2@m uk-grid uk-grid-small" : "uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-grid-small"}>
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


        </section > */}



      <Ufb_notice />
    </>
  )
}
