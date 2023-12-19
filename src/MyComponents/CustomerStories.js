import React from 'react'

import "./customCss/customer_stories.css"

import quote from "./images/quote.svg"

import customer from "./images/customer.jpg"
import hunter from "./images/hunter.jpg"

export default function CustomerStories() {

    return (
        <>


            <section className='w-100 customer-stories-section' style={{ background: '#f7f9fa', padding: '5rem 5rem 0rem 5rem' }}>
                <div className='mx-auto customer-stories-main'>





                    <div id="customer-stories-carousel" className="carousel slide customer-stories-block mx-auto">

                    

                        <div className='customer-stories-btns'>
                            <div className='customer-stories-left-arrow' data-bs-target="#customer-stories-carousel" data-bs-slide="prev" style={{ position: 'absolute', left: '-1.2rem' }}>
                                <i className='material-icons customer-stories-left-arrow-icon' >chevron_left</i>

                            </div>



                            <div className='customer-stories-right-arrow' data-bs-target="#customer-stories-carousel" data-bs-slide="next" style={{ position: 'absolute', right: '-1.2rem' }}>
                                <i className='material-icons customer-stories-right-arrow-icon' >chevron_right</i>
                            </div>


                        </div>

                        <div className="carousel-inner" style={{ height: '30rem' }}>
                            <div className="carousel-item active">
                                <div className=' customer-stories'>
                                    <div className='customer-story'>
                                        <img className="customer-stories-quote" src={quote} style={{ width: '17.78px', height: '16px' }} alt='"'></img>
                                        <div>
                                            <span>
                                                Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
                                            </span>
                                        </div>
                                        <div className='mt-5 read-more-desktop'>
                                            <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                        </div>
                                    </div>

                                    <div className='customer-profile'>
                                        <div className='customer-img'>
                                            <img src={customer}  alt='customer-img' />
                                        </div>
                                        <div className='customer-details'>
                                            <div className='customer-name mt-4'>
                                                Jim Hemgen
                                            </div>
                                            <div className='customer-designation'>
                                                Principal
                                            </div>
                                            <div className='customer-location'>

                                            </div>
                                            <div className='customer-company mt-2'>
                                                Booz Allen Hamilton

                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 read-more-mobile'>
                                        <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className=' customer-stories'>
                                    <div className='customer-story'>
                                        <img className='customer-stories-quote' src={quote} style={{ width: '17.78px', height: '16px' }} alt='"'></img>
                                        <div>
                                            <span>
                                                With Udemy Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.
                                            </span>
                                        </div>
                                        <div className='mt-5 read-more-desktop'>
                                            <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                        </div>
                                    </div>

                                    <div className='customer-profile'>
                                        <div className='customer-img'>
                                            <img src={customer}  alt='customer-img'/>
                                        </div>
                                        <div className='customer-details'>
                                            <div className='customer-name mt-4'>
                                                Ian Stevens
                                            </div>
                                            <div className='customer-designation'>
                                                Global Head of Capability Development
                                            </div>
                                            <div className='customer-location'>
                                                North America
                                            </div>
                                            <div className='customer-company mt-2'>
                                                Publicis Sapient

                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 read-more-mobile'>
                                        <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className=' customer-stories'>
                                    <div className='customer-story'>
                                        <img className='customer-stories-quote' src={quote} style={{ width: '17.78px', height: '16px' }} alt='"'></img>
                                        <div>
                                            <span>
                                                Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace.
                                            </span>
                                        </div>
                                        <div className='mt-5 read-more-desktop'>
                                            <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                        </div>
                                    </div>

                                    <div className='customer-profile'>
                                        <div className='customer-img'>
                                            <img src={hunter}  alt='customer-img' />
                                        </div>
                                        <div className='customer-details'>
                                            <div className='customer-name mt-4'>
                                                Karen Hunter
                                            </div>
                                            <div className='customer-designation'>
                                                America's Team Lead
                                            </div>
                                            <div className='customer-location'>
                                                Learning & Development
                                            </div>
                                            <div className='customer-company mt-2'>
                                                Steelcase

                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 read-more-mobile'>
                                        <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                    </div>
                                </div>
                            </div>



                        </div>



                        <div className='more-customer-stories'>
                            <span><a href="https://www.google.com">View more customer stories</a></span>
                            <i className='material-icons'>chevron_right</i>
                        </div>

                    </div>





                </div>
            </section>

        </>
    )
}
