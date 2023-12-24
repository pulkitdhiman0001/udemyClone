import React from 'react'

import "../customCss/customer_stories.css"

import quote from "../images/quote.svg"

import customer from "../images/customer.jpg"
import hunter from "../images/hunter.jpg"

export default function CustomerStories() {

    return (
        <>


            <section className='w-100 customer-stories-section' style={{ background: '#f7f9fa', padding: '5rem 0' }}>
                <div class="uk-position-relative uk-visible-toggle uk-dark mx-auto" tabindex="-1" uk-slider="finite:true" style={{ maxWidth: '50rem', padding: '0 1rem' }}>

                    <ul class="uk-slider-items uk-grid">
                        <li class="uk-width-3-3">

                            <div className=' customer-stories'>
                                <div className='customer-story'>

                                    <div className='customer-review'>
                                        <div>
                                            <img className="customer-stories-quote" src={quote} style={{ width: '17.78px', height: '16px' }} alt='"'></img>
                                        </div>
                                        <span>
                                            Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
                                        </span>

                                        <div className='mt-5 read-more-desktop'>
                                            <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                        </div>
                                    </div>

                                </div>

                                <div className='customer-profile'>
                                    <div className='customer-img'>
                                        <img src={customer} alt='customer-img' />
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

                        </li>
                        <li class="uk-width-3-3">
                            <div className=' customer-stories'>
                                <div className='customer-story'>

                                    <div className='customer-review'>
                                        <div>
                                            <img className="customer-stories-quote" src={quote} style={{ width: '17.78px', height: '16px' }} alt='"'></img>
                                        </div>
                                        <span>
                                            With Udemy Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.
                                        </span>

                                        <div className='mt-5 read-more-desktop'>
                                            <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                        </div>
                                    </div>

                                </div>

                                <div className='customer-profile'>
                                    <div className='customer-img'>
                                        <img src={customer} alt='customer-img' />
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

                        </li>
                        <li class="uk-width-3-3">
                            <div className=' customer-stories'>
                                <div className='customer-story'>

                                    <div className='customer-review'>
                                        <div>
                                            <img className="customer-stories-quote" src={quote} style={{ width: '17.78px', height: '16px' }} alt='"'></img>
                                        </div>
                                        <span>
                                            Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace.
                                        </span>
                                        <div className='mt-5 read-more-desktop'>
                                            <a href="https://www.google.com" className='read-full-story'>Read full story</a>
                                        </div>
                                    </div>

                                </div>

                                <div className='customer-profile'>
                                    <div className='customer-img'>
                                        <img src={hunter} alt='customer-img' />
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

                        </li>

                    </ul>
                    <div className='more-customer-stories'>
                        <span><a href="https://www.google.com">View more customer stories</a></span>
                        <i className='material-icons'>chevron_right</i>
                    </div>


                    <a className='uk-position-center-left uk-link-reset left-customer-stories-arrow' href uk-slider-item="previous" style={{ marginTop: '-2rem' }}>
                        <i className='material-icons left-customer-stories-arrow-icon' >chevron_left</i>
                    </a>

                    <a className='uk-position-center-right  uk-link-reset right-customer-stories-arrow' href uk-slider-item="next" style={{ marginTop: '-2rem' }}>
                        <i className='material-icons right-customer-stories-arrow-icon'>chevron_right</i>
                    </a>

                </div>

            </section>

        </>
    )
}
