import React from 'react'

import "../customCss/SelectedCoursePage.css"
import ReactStars from 'react-rating-star-with-type'


export default function SelectedCoursePage() {
    return (

        <div style={{ display: 'flex' }} className='bg-dark mx-auto'>
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


            <div className='mx-auto' style={{ width: '68%', padding: '2rem 0' }}>
                <div className='SelectedCoursePage-left'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb SelectedCoursePage-breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Developement</a></li>
                            <li class="breadcrumb-item"><a href="">Web Developement</a></li>
                            <li class="breadcrumb-item active" aria-current="page">JavaScript</li>
                        </ol>
                    </nav>

                    <div className='text-white SelectedCoursePage-course-info'>
                        <h3>The Complete Python Bootcamp From Zero to Hero in Python</h3>
                        <p>
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
                                    style={{fontSize:'1.1rem', color:'goldenrod'}}
                                />
                            </div>
                            <div className='no-of-reviews'>
                                (334,170)
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SelectedCoursePage-right'>

                </div>
            </div>
        </div>

    )
}
