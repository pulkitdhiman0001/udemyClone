import React from 'react'

import "../customCss/mobile_header.css"
import { Link, useNavigate } from 'react-router-dom'
import Login from '../pages/Login'

export default function MobileHeader({ toggleLanguage, isScaled, MobileHeaderBtnHide }) {


    return (
        <>
            <div style={isScaled ? { 'left': '-100%' } : { 'left': '0' }}>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMobileHeader">
                    <div className='offcanvas-body'>
                        <div className='mobile-login-signup-btns'>
                            <div className='mobile-login-btn mb-3' data-bs-target="#offcanvasMobileHeader" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                                <Link to={'/login'} > <a>Log in</a></Link>


                            </div>
                            <div className='mobile-signup-btn' data-bs-target="#offcanvasMobileHeader" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                                <Link to={'/signup'}><a>Sign up</a></Link>
                            </div>
                        </div>
                        <hr />

                        <div className='mobile-header-links'>
                            <div className='mobile-header-heading'>
                                <span>Most popular</span>
                            </div>



                            <div className='mobile-header-categories-links mt-3'>
                                <ul>
                                    <Link to={'courses'}>
                                        <li >
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Web Developement</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Mobile Developement</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Game Developement</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Entrepreneurship</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Business Analytics & Intelligence</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Finance</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">IT Cretifications</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Personal Transformation</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Graphic Design & Illustration</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">Digital Marketing</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#categorySubMenu" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <li>
                                        <div className='mobile-header-category-name'>
                                            <a href="#offcanvasAllCategories" data-bs-toggle="offcanvas">All Categories</a>
                                        </div>
                                        <div className='arrow'>
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>



                                </ul>
                            </div>

                        </div>
                        <hr />

                        <div className='more-from-udemy'>
                            <div className='more-from-udemy-heading mb-3'>
                                <span>
                                    More from Udemy
                                </span>
                            </div>

                            <div className='more-from-udemy-links'>
                                <ul>
                                    <li>
                                        <a href="https://www.google.com">Udemy Business</a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com">Get the app</a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com">Invite friends</a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com">Help</a>
                                    </li>
                                    <li>
                                        <a className='mobile-header-language' onClick={toggleLanguage}>
                                            <div className='material-icons globe'>
                                                language
                                            </div>
                                            <div className='ln'>
                                                <span>English</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className={isScaled ? 'close-btn-after' : 'close-btn-before'} data-bs-target="#offcanvasMobileHeader" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                        <span className="material-icons">
                            close
                        </span>
                    </div>

                </div>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="categorySubMenu">
                    <div className='offcanvas-body'>
                        <div className='mobile-sub-menu-header'>
                            <div className='mobile-sub-menu-btn mb-3' data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                <i className="material-icons me-3">
                                    chevron_left
                                </i>
                                <span>Menu</span>
                            </div>

                        </div>

                        <div className='mobile-header-links'>




                            <div className='mobile-header-categories-links mt-3'>
                                <ul>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Web Developement</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Mobile Developement</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Game Developement</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Entrepreneurship</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Business Analytics & Intelligence</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Finance</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">IT Cretifications</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Personal Transformation</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Graphic Design & Illustration</a>
                                            </div>

                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="https://www.google.com">Digital Marketing</a>
                                            </div>

                                        </li>
                                    </Link>




                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={isScaled ? 'close-btn-after' : 'close-btn-before'} data-bs-target="#categorySubMenu" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                        <span className="material-icons">
                            close
                        </span>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasAllCategories">
                    <div className='offcanvas-body'>
                        <div className='mobile-all-categories-sub-menu-header'>
                            <div className='mobile-all-categories-sub-menu-btn mb-3' data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                <i className="material-icons me-3">
                                    chevron_left
                                </i>
                                <span>Menu</span>
                            </div>

                        </div>

                        <div className='mobile-header-links'>




                            <div className='mobile-header-categories-links mt-3'>
                                <ul>
                                    <Link to={'courses'}>
                                        <li>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                                <a href="#categorySubMenu">all Web Developement</a>
                                            </div>
                                            <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                                <span className="material-icons">
                                                    chevron_right
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Mobile Developement</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Game Developement</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Entrepreneurship</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Business Analytics & Intelligence</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Finance</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all IT Cretifications</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Personal Transformation</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a >all Graphic Design & Illustration</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>all Digital Marketing</a>
                                        </div>
                                        <div className='arrow' data-bs-target="#offcanvasAllSubCategories" data-bs-toggle="offcanvas">
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
                    <div className={isScaled ? 'close-btn-after' : 'close-btn-before'} data-bs-target="#offcanvasAllCategories" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                        <span className="material-icons">
                            close
                        </span>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasAllSubCategories" >
                    <div className='offcanvas-body'>
                        <div className='mobile-sub-sub-menu-header'>
                            <div className='mobile-sub-menu-btn mb-3' data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                <i className="material-icons me-3">
                                    chevron_left
                                </i>
                                <span>Menu</span>
                            </div>
                            <div className='mobile-back-to-all-categories-sub-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasAllCategories">
                                <i className="material-icons me-3">
                                    chevron_left
                                </i>
                                <span>All Categories</span>
                            </div>
                        </div>

                        <div className='mobile-header-links'>

                            <div className='mobile-header-sub-sub-heading mt-4'>
                                <span>All categories sub-cat name</span>
                            </div>


                            <div className='mobile-header-categories-links mt-3'>
                                <ul>
                                <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>Web Developement</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>Mobile Developement</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a >Game Developement</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a >Entrepreneurship</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a >Business Analytics & Intelligence</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a >Finance</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a >IT Cretifications</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>Personal Transformation</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>Graphic Design & Illustration</a>
                                        </div>

                                    </li>
                                    </Link>
                                    <Link to={'courses'}>
                                    <li>
                                        <div className='mobile-header-category-name' data-bs-dismiss="offcanvas">
                                            <a>Digital Marketing</a>
                                        </div>

                                    </li>
                                    </Link>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={isScaled ? 'close-btn-after' : 'close-btn-before'} data-bs-target="#offcanvasAllSubCategories" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                        <span className="material-icons">
                            close
                        </span>
                    </div>

                </div>
            </div>
        </>





    )
}
