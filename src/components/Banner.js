import React, { useState, useEffect } from 'react'

import '../customCss/banner.css';


import banner_img from '../images/banner-img.jpg';

import mobile_banner from '../images/mobile-banner.jpg';

import mobile_banner2 from '../images/mobile-banner2.jpg';

import banner2 from '../images/banner2.jpg';
import useWindowWidth from '../hooks/useWindowWidth';

export default function Banner({ toggleMobileSearch }) {

    const windowWidth = useWindowWidth();


    return (

        <>
            <div className='container banner'>


                <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {windowWidth > 700 ? (<img src={banner_img} loading='lazy' className="d-block w-100" alt="banner" />) : (<img src={mobile_banner} loading='lazy' className="d-block w-100 image-fluid" alt="Mobile-Banner" />)}
                            <div className='banner-heading shadow bg-body rounded'>
                                <h1>Last day to save!</h1>
                                <p style={{ marginTop: 0 }}>Enjoy the freedom to learn the way you want (for less). Log in for special savings on courses.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {windowWidth > 700 ? (<img src={banner2} loading="lazy" className="d-block w-100" alt="banner" />) : (<img src={mobile_banner2} loading='lazy' className="d-block w-100 image-fluid" alt="Mobule-Banner" />)}
                            <div className='banner-heading shadow bg-body rounded'>
                                <h1>Skills that drive you forward</h1>
                                <p style={{ marginTop: 0 }}>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
                                <div className='banner-heading-buttons' style={{ display: 'flex', gap: '1rem' }}>
                                    <a className='plan-for-individuals' href='https://www.google.com'>Plan for Individuals</a>
                                    <a className='plan-for-organizations' href='https://www.google.com'>Plan for Organizations</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className='banner-heading shadow bg-body rounded'>
                            <h1>Last day to save!</h1>
                            <p>Enjoy the freedom to learn the way you want (for less). Log in for special savings on courses.</p>
                        </div> */}
                    </div>

                    <button className="carousel-control-prev" style={{ justifyContent: 'start', marginLeft: '1rem' }} type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">

                        <i className='material-icons arrow_back_btn'>chevron_left</i>

                    </button>
                    <button className="carousel-control-next" style={{ justifyContent: 'end', marginRight: '1rem' }} type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                        <i className='material-icons arrow_forward_btn'>chevron_right</i>
                    </button>

                </div>
                <div className='banner-mobile-heading mt-3' style={{ display: 'none' }}>
                    <h1>Last day to save!</h1>
                    <p>Enjoy the freedom to learn the way you want (for less). Log in for special savings on courses.</p>
                </div>

                <div className='banner-search-mobile-div mt-5 mb-5' style={{ display: 'none' }}>
                    <button type='button' onClick={toggleMobileSearch} className='w-100 banenr-search-mobile-btn'>What do you want to learn?<i className="material-icons banenr-search-mobile-icon">search</i></button>
                </div>

            </div>



        </>
    )
}
