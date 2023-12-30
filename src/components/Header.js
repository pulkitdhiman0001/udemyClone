import React from 'react'

import '../customCss/header.css'

import logo from '../images/logo.svg'

import { Link, useLocation } from "react-router-dom"
import Breadcrumb from './Breadcrumb'

import windwoWidth from "../hooks/useWindowWidth"

export default function Header({ toggleMobileSearch, toggleLanguage, MobileHeaderBtnShow }) {


    const location = useLocation();

    // Check if the current pathname matches the desired page
    const isDesiredPage = location.pathname === '/courses';

    return (

        <>
            <nav className="nav align-items-center" style={{ boxShadow: !isDesiredPage || windwoWidth < 913 ? '0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)' : 'none' }}>
                <button type="button" className="nav-link header-hamburger-btn" onClick={MobileHeaderBtnShow} data-bs-target="#offcanvasMobileHeader" data-bs-toggle="offcanvas" aria-current="page" style={{ display: 'none', color: 'black' }}><i className="material-icons hamburger-icom">menu</i></button>

                <div className='d-flex udemy-header-btn'>
                    <Link to={'/'}><a className="nav-link" aria-current="page"><img className='udemy-logo' src={logo} alt='Udemy' /></a></Link>
                </div>




                <div className='categories-nav-link'>
                    <a className="nav-link header-category-btn" href="https://www.google.com">Categories</a>


                    <div className=' categories-popper-content'>
                        <div className='categories-nav-popper'>
                            <ul>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Developement
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Business
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Finance & Accounting
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            IT & Software
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Office & Producctivity
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Personal Development
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Design
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Marketing
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Lifestyle
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Photography & Video
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Health & Fitness
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Music
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Teaching & Academics
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>


                            </ul>
                        </div>


                        <div className='categories-sub-nav-popper'>
                            <ul>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Developement
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Developement
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Developement
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Developement
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='nav-category-name'>
                                            Developement
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>



                <div className='nav-link searchbox flex-fill'>
                    <form className="search-form d-flex flex-row-reverse">
                        <input type='text' className='search-input' placeholder='Search For Anything' />
                        <button className="material-icons search-icon">search</button>
                    </form>
                </div>
                <div className='ub-nav-link'>
                    <a className="nav-link header-udemy-business" href="https://www.google.com">Udemy Business</a>


                    <div className=' ub-popper-content'>
                        <div className='ub-nav-popper'>
                            <div className='ub-nav-popper-header mb-3'>
                                <span>
                                    Get your team access to over 25,000 top Udemy courses, anytime, anywhere.
                                </span>
                            </div>
                            <div className='ub-nav-popper-btn'>
                                <a href="https://www.google.com">Try Udemy Business</a>
                            </div>
                        </div>
                    </div>
                </div>






                <div className='udemy-tech-nav-link'>
                    <a className="nav-link header-udemy-tech" href="https://www.google.com">Teach on Udemy</a>


                    <div className=' udemy-tech-popper-content'>
                        <div className='udemy-tech-nav-popper'>
                            <div className='udemy-tech-nav-popper-header mb-3'>
                                <span>
                                    Turn what you know into an opportunity and reach millions around the world.
                                </span>
                            </div>
                            <div className='udemy-tech-nav-popper-btn'>
                                <a href="https://www.google.com">Try Udemy Business</a>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='d-flex cart-mobile_search-right'>
                    <a className="nav-link header-search-mobile-btn" onClick={toggleMobileSearch} style={{ display: 'none' }} aria-current="page"><i className="material-icons header-search-mobile-icon">search</i></a>
                    <div className='cart-nav-link'>

                    </div>



                    <div className='cart-nav-link'>
                        <a className="nav-link header-cart-btn" aria-current="page" href="https://www.google.com"><i className="material-icons cart-icon">shopping_cart</i></a>


                        <div className=' cart-popper-content'>
                            <div className='cart-nav-popper'>
                                <div className='cart-nav-popper-header mb-3'>
                                    <span>
                                        Get your team access to over 25,000 top Udemy courses, anytime, anywhere.
                                    </span>
                                </div>
                                <div className='cart-nav-popper-btn'>
                                    <a href="https://www.google.com">Try Udemy Business</a>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                <Link to={'/login'}><a className="nav-link header-login-btn" aria-current="page">Log in</a></Link>

                <Link to={'/signup'}><a className="nav-link header-signup-btn" aria-current="page">Sign up</a></Link>
                <a className="nav-link header-language-btn" aria-current="page" onClick={toggleLanguage}><i className="material-icons header-language-icon">language</i></a>




            </nav>

            {isDesiredPage ?

                <Breadcrumb />
                : null}




        </>




    )
}

