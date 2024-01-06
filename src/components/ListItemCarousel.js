import React from 'react'


import { useLayer } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";

import Rating from '@mui/material/Rating';

import course_img from "../images/course-img.jpg"

export default function Learner_are_viewing() {



    const [isOpen, setOpen] = React.useState(false);



    const { renderLayer, triggerProps, layerProps } =
        useLayer({
            isOpen,
            overflowContainer: false,
            placement: "right-center",
            auto: true,
            snap: true,
            // arrowOffset: 4,
            triggerOffset: 12, // keep some distance to the trigger
            containerOffset: 16, // give the menu some room to breath relative to the container
            arrowOffset: 16,
            onDisappear: () => setOpen(false)
        });
    return (
        <li onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className='card-container' {...triggerProps}>


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



                {renderLayer(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div {...layerProps}>
                                <div className='card-container-popup'>
                                    <div className='card-container-popup-content'>
                                        <div className='card-container-popup-header'>
                                            <span>The Complete Python Bootcamp From Zero to Hero in Python</span>
                                        </div>

                                        <div className='bestseller-upatedDate'>

                                            <div className='seller-badge' style={{ marginRight: '.5rem' }}>
                                                <h6><span className="badge text-black">Bestseller</span></h6>
                                            </div>


                                            <div className='updatedDate'>
                                                Updated <b>July 2023</b>
                                            </div>
                                        </div>

                                        <div className='totalHour-level-subtitles'>
                                            <div className='totalHour'>
                                                22 total hours
                                            </div>
                                            <div className='level'>
                                                All Levels
                                            </div>
                                            <div className='dubtitles'>
                                                Subtitles
                                            </div>
                                        </div>
                                        <div className='short-desc'>
                                            Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
                                        </div>
                                        <div className='what-course-provide'>
                                            <ul>
                                                <li>

                                                    <i className='material-icons'>done</i>
                                                    <span>You will learn how to leverage the power of Python to solve tasks.</span>

                                                </li>
                                                <li><i className='material-icons'>done</i><span>You will build games and programs that use Python libraries.</span></li>
                                                <li><i className='material-icons'>done</i><span>You will be able to use Python for your own work problems or personal projects.</span></li>
                                            </ul>
                                        </div>

                                        <div className='addtocart-like-btn'>
                                            <div className='add-to-cart'>
                                                <button>Add to cart</button>
                                            </div>
                                            <div className='like-btn'>
                                                <i className='material-icons' style={{ fontSize: '30px' }}>favorite_border</i>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </motion.div>
                        )}
                    </AnimatePresence>
                )}




            </div>
        </li>
    );
}
