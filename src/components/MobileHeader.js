import React from 'react'

import "../customCss/mobile_header.css"
import { Link, useNavigate } from 'react-router-dom'
import Login from '../pages/Login'

export default function MobileHeader({ toggleLanguage, isScaled, MobileHeaderBtnHide }) {


    return (
        <>
            <div style={isScaled ? { 'left': '-100%' } : { 'left': '0' }}>
                <div className="offcanvas-lg offcanvas-start offcanvasMobileHeader" tabIndex="-1" id="offcanvasMobileHeader">
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

                                    <li >
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Web Developement</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Mobile Developement</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Game Developement</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Entrepreneurship</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Business Analytics & Intelligence</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Finance</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">IT Cretifications</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Personal Transformation</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Graphic Design & Illustration</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to={'courses'}>
                                            <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                <a href="#categorySubMenu">Digital Marketing</a>
                                            </div>
                                        </Link>
                                        <div className='arrow' data-bs-target="#collapseSubMenu" data-bs-toggle="collapse">
                                            <span className="material-icons">
                                                chevron_right
                                            </span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='mobile-header-category-name'>
                                            <a href="#collapseAllCategories" data-bs-toggle="collapse">All Categories</a>
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


                    <div>
                        <div class="collapse collapse-horizontal" id="collapseSubMenu" style={{ width: "15rem", position: 'absolute', top: 0, left: 0, overflow: 'auto', transition: 'all 0.2s ease-in-out 0.3s' }}>

                            <div style={{ backgroundColor: 'white', height: '100vh' }}>
                                <div className='mobile-sub-menu-header'>
                                    <div className='mobile-sub-menu-btn' data-bs-toggle="collapse" data-bs-target="#collapseSubMenu">
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
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Web Developement</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Mobile Developement</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Game Developement</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Entrepreneurship</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Business Analytics & Intelligence</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Finance</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">IT Cretifications</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Personal Transformation</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Graphic Design & Illustration</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="https://www.google.com">Digital Marketing</a>
                                                    </div>

                                                </li>
                                            </Link>




                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div>
                        <div class="collapse collapse-horizontal multi-collapse" id="collapseAllCategories" style={{ width: "15rem", position: 'absolute', top: 0, left: 0, overflow: 'auto', transition: 'all 0.2s ease-in-out 0.3s' }}>

                            <div style={{ backgroundColor: 'white', height: '100vh' }}>
                                <div className='mobile-all-categories-sub-menu-header'>
                                    <div className='mobile-all-categories-sub-menu-btn' data-bs-toggle="collapse" data-bs-target="#collapseAllCategories">
                                        <i className="material-icons me-3">
                                            chevron_left
                                        </i>
                                        <span>Menu</span>
                                    </div>

                                </div>

                                <div className='mobile-header-links'>
                                    <div className='mobile-header-categories-links mt-3'>
                                        <ul>

                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="collapse" data-bs-target="#offcanvasMobileHeader">
                                                        <a href="#AllcategorySubMenu">all Web Developement</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>
                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Mobile Developement</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Game Developement</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Entrepreneurship</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Business Analytics & Intelligence</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Finance</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all IT Cretifications</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Personal Transformation</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a >all Graphic Design & Illustration</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>


                                            <li>
                                                <Link to={'courses'}>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>all Digital Marketing</a>
                                                    </div>
                                                </Link>
                                                <div className='arrow' data-bs-target="#collapseAllcategorySubMenu" data-bs-toggle="collapse">
                                                    <span className="material-icons">
                                                        chevron_right
                                                    </span>
                                                </div>

                                            </li>





                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div class="collapse collapse-horizontal multi-collapse" id="collapseAllcategorySubMenu" style={{ width: "15rem", position: 'absolute', top: 0, left: 0, overflow: 'auto', transition: 'all 0.2s ease-in-out 0.3s' }}>

                            <div style={{ backgroundColor: 'white', height: '100vh' }}>
                                <div className='mobile-sub-sub-menu-header'>
                                    <div className='mobile-sub-menu-btn mb-3' data-bs-toggle="collapse" data-bs-target=".multi-collapse">
                                        <i className="material-icons me-3">
                                            chevron_left
                                        </i>
                                        <span>Menu</span>
                                    </div>
                                    <div className='mobile-back-to-all-categories-sub-btn' data-bs-toggle="collapse" data-bs-target="#collapseAllcategorySubMenu">
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
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>Web Developement</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>Mobile Developement</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a >Game Developement</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a >Entrepreneurship</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a >Business Analytics & Intelligence</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a >Finance</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a >IT Cretifications</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>Personal Transformation</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>Graphic Design & Illustration</a>
                                                    </div>

                                                </li>
                                            </Link>
                                            <Link to={'courses'}>
                                                <li>
                                                    <div className='mobile-header-category-name' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMobileHeader">
                                                        <a>Digital Marketing</a>
                                                    </div>

                                                </li>
                                            </Link>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={isScaled ? 'close-btn-after' : 'close-btn-before'} data-bs-target="#offcanvasMobileHeader" data-bs-dismiss="offcanvas" onClick={MobileHeaderBtnHide}>
                    <span className="material-icons">
                        close
                    </span>
                </div>
                </div>

                

            </div>


        </>





    )
}