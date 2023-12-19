import React from 'react'

import instructor from "./images/instructor.jpg"

import "./customCss/instructor.css"

export default function BecomeAnInstructor() {
    return (
        <div className='mx-auto instructor-block-main'>
            <div className='container instructor-block'>
                <div className='instructor-img'>
                    <img src={instructor} alt="instructor" />
                </div>


                <div className='instructor-content'>
                    <div className='instructor-head mb-3'>
                        <span><h1>Become an instructor</h1></span>
                    </div>
                    <div className='instructor-desc mb-5'>
                        <span>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</span>
                    </div>
                    <div className='start-teaching-btn'>
                        <a href="https://www.google.com">Start teaching today</a>
                    </div>
                </div>
            </div>
         </div>
    )
}
