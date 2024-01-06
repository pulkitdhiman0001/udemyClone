import React, { useState } from 'react'

import Rating from '@mui/material/Rating';

import course_img from "../images/courses.jpg"
import useWindowWidth from '../hooks/useWindowWidth';
import TryUdemyBusiness from './TryUdemyBusiness';

export default function AllCourses() {

    const windowWidth = useWindowWidth();


    // toggle all courses
    const [iscollapsed, setiscollapsed] = useState(true)
    const handleCollapse = () => {
        setTimeout(() => {
            setiscollapsed(!iscollapsed)
        }, 100);
    }

    const [selectedSort, setSelectedSort] = useState('Most Popular');

    const handleSortItemClick = (value) => {
        setSelectedSort(value);
    };

    const [isVideoDurationDivExpanded, setVideoDurationDivExpanded] = useState(false);

    const handlesetVideoDurationDivShowMore = () => {
        setVideoDurationDivExpanded(!isVideoDurationDivExpanded);
    };

    const [isTopicsDivExpanded, setsTopicsDivExpanded] = useState(false);

    const handlesetsTopicsDivShowMore = () => {
        setsTopicsDivExpanded(!isTopicsDivExpanded);
    };

    const [isSubcategorysDivExpanded, setsSubcategorysDivExpanded] = useState(false);

    const handlesetsSubcategorysDivShowMore = () => {
        setsSubcategorysDivExpanded(!isSubcategorysDivExpanded);
    };

    const [isLevelDivExpanded, setsLevelDivExpanded] = useState(false);

    const handlesetsLevelDivShowMore = () => {
        setsLevelDivExpanded(!isLevelDivExpanded);
    };

    const [isLanguageDivExpanded, setsLanguageDivExpanded] = useState(false);

    const handlesetsLanguageDivShowMore = () => {
        setsLanguageDivExpanded(!isLanguageDivExpanded);
    };

    const [isPriceDivExpanded, setsPriceDivExpanded] = useState(false);

    const handlesetsPriceDivShowMore = () => {
        setsPriceDivExpanded(!isPriceDivExpanded);
    };

    const [isSubtitlesDivExpanded, setsSubtitlesDivExpanded] = useState(false);

    const handlesetsSubtitlesDivShowMore = () => {
        setsSubtitlesDivExpanded(!isSubtitlesDivExpanded);
    };

    return (
        <div>

            {/* offcanvas */}
            <div class="offcanvas-lg offcanvas-end allCourses-offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header shadow p-3 bg-body rounded">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">10,000 results</h5>

                </div>
                <div class="offcanvas-body">
                    <div class="card card-body" style={{ padding: 0 }}>
                        <div class="accordion" style={{ borderColor: 'transparent' }}>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Rating
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body px-1 py-1">
                                        <div className='allcourses-rating'>
                                            <div className='rating-filter-one'>
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                <span style={{ marginLeft: '.2rem' }}>4.5 & up</span>
                                                <span className='total-courses'>(10,000)</span>
                                            </div>

                                        </div>

                                        <div className='allcourses-rating'>
                                            <div className='rating-filter-two'>
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                <span style={{ marginLeft: '.2rem' }}>4.0 & up</span>
                                                <span className='total-courses'>(10,000)</span>
                                            </div>

                                        </div>

                                        <div className='allcourses-rating'>
                                            <div className='rating-filter-three'>
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                <span style={{ marginLeft: '.2rem' }}>3.5 & up</span>
                                                <span className='total-courses'>(10,000)</span>
                                            </div>

                                        </div>

                                        <div className='allcourses-rating'>
                                            <div className='rating-filter-four'>
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                <span style={{ marginLeft: '.2rem' }}>3.0 & up</span>
                                                <span className='total-courses'>(10,000)</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Video Duration
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 video-duration-accordion" style={{ maxHeight: isVideoDurationDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                0-1 Hour (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                1-3 Hours (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                3-6 Hours (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                6-17 Hours (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                17+ Hours (801)
                                            </label>
                                        </div>



                                    </div>

                                    <div className={isVideoDurationDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetVideoDurationDivShowMore}>
                                        {isVideoDurationDivExpanded ? 'show less' : 'show more'}
                                    </div>


                                </div>

                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Topic
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isTopicsDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Python (546)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                JavaScript (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Unity (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Java (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                C#
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                React JS (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                PHP (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Machine Learning (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Android Developement (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Google Flutter (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Data Science (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                WordPress (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Laravel (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                SQL (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                iOS D developement (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Angular (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                C++ (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Node.Js (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Unreal Engine (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                ASP.NET Core (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                CSS (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Programming Fundamentals (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Vue JS (801)
                                            </label>
                                        </div>



                                    </div>
                                    <div className={isTopicsDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetsTopicsDivShowMore}>
                                        {isTopicsDivExpanded ? 'show less' : 'show more'}
                                    </div>

                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Subcategory
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isSubcategorysDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Web Developement (546)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Programming Languages (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Data Science (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Mobile Developement (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Game Developement
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Database Design & Developement (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Software Engineering (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Software Developement Tools (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Software Testing (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                No-Code Developement (801)
                                            </label>
                                        </div>




                                    </div>
                                    <div className={isSubcategorysDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetsSubcategorysDivShowMore}>
                                        {isSubcategorysDivExpanded ? 'show less' : 'show more'}
                                    </div>

                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Level
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isLevelDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                All Levels (546)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Beginner (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Intermediate (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Expert (801)
                                            </label>
                                        </div>


                                    </div>

                                    <div className={isLevelDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetsLevelDivShowMore}>
                                        {isLevelDivExpanded ? 'show less' : 'show more'}
                                    </div>
                                </div>
                            </div>


                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Language
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isLanguageDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                English (10,000)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                हिन्दी (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Telugu (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Nederlands (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Português (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Español (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Türkçe (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                日本語 (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Français (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                العربية (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                中文 (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Deutsch (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Русский (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                한국어 (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Polski (801)
                                            </label>
                                        </div>


                                    </div>

                                    <div className={isLanguageDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetsLanguageDivShowMore}>
                                        {isLanguageDivExpanded ? 'show less' : 'show more'}
                                    </div>
                                </div>
                            </div>



                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Price
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isPriceDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Paid (10,000)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Free (801)
                                            </label>
                                        </div>




                                    </div>

                                    <div className={isPriceDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetsPriceDivShowMore}>
                                        {isPriceDivExpanded ? 'show less' : 'show more'}
                                    </div>
                                </div>
                            </div>


                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Subtitles
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
                                    <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isSubtitlesDivExpanded ? '' : '8rem' }}>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                English (10,000)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                हिन्दी (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Telugu (801)
                                            </label>
                                        </div>

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Nederlands (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Português (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Español (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Türkçe (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                日本語 (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Français (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                العربية (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                中文 (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Deutsch (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Русский (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                한국어 (801)
                                            </label>
                                        </div>
                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Polski (801)
                                            </label>
                                        </div>


                                    </div>

                                    <div className={isSubtitlesDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                        onClick={handlesetsSubtitlesDivShowMore}>
                                        {isSubtitlesDivExpanded ? 'show less' : 'show more'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='offcanvas-footer w-100'>
                    <button type='button' data-bs-dismiss="offcanvas" data-bs-target="#offcanvasRight">
                        Done
                    </button>
                </div>
            </div>


            <h3 style={{ fontWeight: '700' }}>All 'Development' courses</h3>

            <div className='not-sure-div'>
                <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '2rem', marginRight: '1rem' }}>info</i>
                <span style={{ fontWeight: 900, fontSize: '.9rem' }}>Not sure? All courses have a 30-day money-back guarantee</span>
            </div>

            <div className='filter-sort-results py-4'>
                <div style={{ display: 'flex' }} type="button">
                    <div className='filter' style={{ fontWeight: 700 }} onClick={handleCollapse} data-bs-toggle="collapse" data-bs-target="#collapsFilter" aria-expanded="false">
                        <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '1.5rem' }}>filter_list</i>
                        <span>Filter</span>
                    </div>
                    <div className='filter-for-mobile' style={{ fontWeight: 700 }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '1.5rem' }}>filter_list</i>
                        <span>Filter</span>
                    </div>
                    <div className='sort'>
                        <div className='Sort-by'>
                            <div style={{ fontSize: '.9rem', fontWeight: 'lighter' }}>Sort by</div>
                            <div className='sort-query'>{selectedSort}</div>
                        </div>
                        <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '1.5rem', marginLeft: '1rem' }}>keyboard_arrow_down</i>
        
                    </div>
                    <div uk-dropdown="mode: hover, click" className='p-0'>
                        <ul class="list-group">
                            <li class="list-group-item" onClick={() => handleSortItemClick('Most Popular')}>Most Popular</li>
                            <li class="list-group-item" onClick={() => handleSortItemClick('Higest Rated')}>Higest Rated</li>
                            <li class="list-group-item" onClick={() => handleSortItemClick('Newest')}>Newest</li>
                        </ul>
                    </div>

                    <div className='clear-filters-btn d-none' style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem', fontSize: '.9rem', fontWeight: '900', color: '#5624d0' }}>
                        <span>Clear filters</span>
                    </div>
                </div>
                <div className='results' style={{fontWeight:'700', color:'#6a6f73'}}>
                    10,000 results
                </div>
            </div>

            <div style={{ display: 'flex', maxHeight: '260rem' }}>
                <div className='left-panel'>
                    <div>
                        <div class="collapse collapse-horizontal show" id="collapsFilter">
                            <div class="card card-body" style={{ width: "16rem", padding: 0 }}>
                                <div class="accordion" style={{ borderColor: 'transparent' }}>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                Rating
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                            <div class="accordion-body px-1 py-1">
                                                <div className='allcourses-rating'>
                                                    <div className='rating-filter-one'>
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                        <span style={{ marginLeft: '.2rem' }}>4.5 & up</span>
                                                        <span className='total-courses'>(10,000)</span>
                                                    </div>

                                                </div>

                                                <div className='allcourses-rating'>
                                                    <div className='rating-filter-two'>
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                        <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                        <span style={{ marginLeft: '.2rem' }}>4.0 & up</span>
                                                        <span className='total-courses'>(10,000)</span>
                                                    </div>

                                                </div>

                                                <div className='allcourses-rating'>
                                                    <div className='rating-filter-three'>
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                        <span style={{ marginLeft: '.2rem' }}>3.5 & up</span>
                                                        <span className='total-courses'>(10,000)</span>
                                                    </div>

                                                </div>

                                                <div className='allcourses-rating'>
                                                    <div className='rating-filter-four'>
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width: '1.2em', height: '1.2em', border: '1px solid black', marginRight: '.5rem' }} />
                                                        <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly style={{ fontSize: '1.2rem', color: 'goldenrod' }} />
                                                        <span style={{ marginLeft: '.2rem' }}>3.0 & up</span>
                                                        <span className='total-courses'>(10,000)</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Video Duration
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 video-duration-accordion" style={{ maxHeight: isVideoDurationDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        0-1 Hour (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        1-3 Hours (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        3-6 Hours (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        6-17 Hours (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        17+ Hours (801)
                                                    </label>
                                                </div>



                                            </div>

                                            <div className={isVideoDurationDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetVideoDurationDivShowMore}>
                                                {isVideoDurationDivExpanded ? 'show less' : 'show more'}
                                            </div>


                                        </div>

                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Topic
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isTopicsDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Python (546)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        JavaScript (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Unity (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Java (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        C#
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        React JS (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        PHP (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Machine Learning (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Android Developement (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Google Flutter (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Data Science (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        WordPress (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Laravel (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        SQL (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        iOS D developement (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Angular (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        C++ (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Node.Js (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Unreal Engine (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        ASP.NET Core (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        CSS (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Programming Fundamentals (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Vue JS (801)
                                                    </label>
                                                </div>



                                            </div>
                                            <div className={isTopicsDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetsTopicsDivShowMore}>
                                                {isTopicsDivExpanded ? 'show less' : 'show more'}
                                            </div>

                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Subcategory
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isSubcategorysDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Web Developement (546)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Programming Languages (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Data Science (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Mobile Developement (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Game Developement
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Database Design & Developement (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Software Engineering (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Software Developement Tools (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Software Testing (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        No-Code Developement (801)
                                                    </label>
                                                </div>




                                            </div>
                                            <div className={isSubcategorysDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetsSubcategorysDivShowMore}>
                                                {isSubcategorysDivExpanded ? 'show less' : 'show more'}
                                            </div>

                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Level
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isLevelDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        All Levels (546)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Beginner (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Intermediate (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Expert (801)
                                                    </label>
                                                </div>


                                            </div>

                                            <div className={isLevelDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetsLevelDivShowMore}>
                                                {isLevelDivExpanded ? 'show less' : 'show more'}
                                            </div>
                                        </div>
                                    </div>


                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Language
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isLanguageDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        English (10,000)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        हिन्दी (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Telugu (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Nederlands (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Português (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Español (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Türkçe (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        日本語 (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Français (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        العربية (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        中文 (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Deutsch (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Русский (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        한국어 (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Polski (801)
                                                    </label>
                                                </div>


                                            </div>

                                            <div className={isLanguageDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetsLanguageDivShowMore}>
                                                {isLanguageDivExpanded ? 'show less' : 'show more'}
                                            </div>
                                        </div>
                                    </div>



                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Price
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isPriceDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Paid (10,000)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Free (801)
                                                    </label>
                                                </div>




                                            </div>

                                            <div className={isPriceDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetsPriceDivShowMore}>
                                                {isPriceDivExpanded ? 'show less' : 'show more'}
                                            </div>
                                        </div>
                                    </div>


                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed px-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Subtitles
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
                                            <div class="accordion-body px-1 py-1 topic-accordion" style={{ maxHeight: isSubtitlesDivExpanded ? '' : '8rem' }}>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        English (10,000)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        हिन्दी (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Telugu (801)
                                                    </label>
                                                </div>

                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Nederlands (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Português (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Español (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Türkçe (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        日本語 (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Français (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        العربية (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        中文 (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Deutsch (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Русский (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        한국어 (801)
                                                    </label>
                                                </div>
                                                <div class="form-check py-1">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Polski (801)
                                                    </label>
                                                </div>


                                            </div>

                                            <div className={isSubtitlesDivExpanded ? `py-3 show_more_btn_after_click` : `py-4 show_more_btn_before_click`}
                                                onClick={handlesetsSubtitlesDivShowMore}>
                                                {isSubtitlesDivExpanded ? 'show less' : 'show more'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right-panel' style={{ minWidth: iscollapsed ? '36rem' : '100%', padding: '0 1rem' }}>
                    <div className='allCourses-card mx-auto'>
                        <div className='allCourses-card-img'>
                            <img src='https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg' alt="" className='' />
                        </div>
                        <div className='allCourses-card-details'>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>The Complete Python Bootcamp From Zero to Hero in Python</h5>
                            <p class="card-text" style={{ marginTop: '.3rem', marginBottom: '.3rem' }}>Learn Python like a Professional  Start from the basics and go all the way to creating your own applications and games</p>
                            <span className='instructor-name'>By Someone</span>


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
                            </div>

                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                                <div className='totalHour-level-subtitles courses-totalHour-level-subtitles' style={{ marginLeft: 0, fontSize: 'smaller' }}>
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

                        </div>

                        <div className='allcourse-card-price' style={{ fontWeight: '700' }}>
                            <span className='allcourse-card-price-span'>₹389</span>
                        </div>
                    </div>

                    <div uk-dropdown="pos: top-center;auto-update: false" style={{width:'30rem'}}>
                        <div className='what-you-will-learn'>
                            <p style={{fontWeight:'700', color:'black'}}>what you'll learn</p>
                        </div>
                        <div className='what-course-provide'>
                            <ul>
                                <li>

                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will learn how to leverage the power of Python to solve tasks.</span>

                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will build games and programs that use Python libraries.</span></li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will be able to use Python for your own work problems or personal projects.</span></li>
                            </ul>
                        </div>

                        <div className='addtocart-like-btn' style={{justifyContent:'space-around'}}>
                            <div className='add-to-cart'>
                                <button style={{width:'20rem'}}>Add to cart</button>
                            </div>
                            <div className='like-btn'>
                                <span class="material-symbols-outlined" style={{ fontSize: '30px' }}>
                                favorite_border
                                </span>
                            
                            </div>
                        </div>
                    </div>

                    <div className='allCourses-card mx-auto'>
                        <div className='allCourses-card-img'>
                            <img src={course_img} alt="" className='' />
                        </div>
                        <div className='allCourses-card-details'>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>The Complete Python Bootcamp From Zero to Hero in Python</h5>
                            <p class="card-text" style={{ marginTop: '.3rem', marginBottom: '.3rem' }}>Learn Go ("Golang") from the ground up & in great depth by building multiple demo projects, incl. a REST API</p>
                            <span className='instructor-name'>By Someone</span>


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
                            </div>

                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                                <div className='totalHour-level-subtitles courses-totalHour-level-subtitles' style={{ marginLeft: 0, fontSize: 'smaller' }}>
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

                        </div>

                        <div className='allcourse-card-price' style={{ fontWeight: '700' }}>
                            <span className='allcourse-card-price-span'>₹389</span>
                        </div>
                    </div>

                    <div uk-dropdown="pos: top-center;auto-update: false" style={{width:'30rem'}}>
                        <div className='what-you-will-learn'>
                            <p style={{fontWeight:'700', color:'black'}}>what you'll learn</p>
                        </div>
                        <div className='what-course-provide'>
                            <ul>
                                <li>

                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will learn how to leverage the power of Python to solve tasks.</span>

                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will build games and programs that use Python libraries.</span></li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will be able to use Python for your own work problems or personal projects.</span></li>
                            </ul>
                        </div>

                        <div className='addtocart-like-btn' style={{justifyContent:'space-around'}}>
                            <div className='add-to-cart'>
                                <button style={{width:'20rem'}}>Add to cart</button>
                            </div>
                            <div className='like-btn'>
                                <span class="material-symbols-outlined" style={{ fontSize: '30px' }}>
                                favorite_border
                                </span>
                            
                            </div>
                        </div>
                    </div>

                    <TryUdemyBusiness />

                    <div className='allCourses-card mx-auto'>
                        <div className='allCourses-card-img'>
                            <img src={course_img} alt="" className='' />
                        </div>
                        <div className='allCourses-card-details'>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>The Complete Python Bootcamp From Zero to Hero in Python</h5>
                            <p class="card-text" style={{ marginTop: '.3rem', marginBottom: '.3rem' }}>Learn Go ("Golang") from the ground up & in great depth by building multiple demo projects, incl. a REST API</p>
                            <span className='instructor-name'>By Someone</span>


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
                            </div>

                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                                <div className='totalHour-level-subtitles courses-totalHour-level-subtitles' style={{ marginLeft: 0, fontSize: 'smaller' }}>
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

                        </div>

                        <div className='allcourse-card-price' style={{ fontWeight: '700' }}>
                            <span className='allcourse-card-price-span'>₹389</span>
                        </div>
                    </div>
                      <div uk-dropdown="pos: top-center;auto-update: false" style={{width:'30rem'}}>
                        <div className='what-you-will-learn'>
                            <p style={{fontWeight:'700', color:'black'}}>what you'll learn</p>
                        </div>
                        <div className='what-course-provide'>
                            <ul>
                                <li>

                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will learn how to leverage the power of Python to solve tasks.</span>

                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will build games and programs that use Python libraries.</span></li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will be able to use Python for your own work problems or personal projects.</span></li>
                            </ul>
                        </div>

                        <div className='addtocart-like-btn' style={{justifyContent:'space-around'}}>
                            <div className='add-to-cart'>
                                <button style={{width:'20rem'}}>Add to cart</button>
                            </div>
                            <div className='like-btn'>
                                <span class="material-symbols-outlined" style={{ fontSize: '30px' }}>
                                favorite_border
                                </span>
                            
                            </div>
                        </div>
                    
                    
                    </div>
                
                    <div className='allCourses-card mx-auto'>
                        <div className='allCourses-card-img'>
                            <img src={course_img} alt="" className='' />
                        </div>
                        <div className='allCourses-card-details'>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>The Complete Python Bootcamp From Zero to Hero in Python</h5>
                            <p class="card-text" style={{ marginTop: '.3rem', marginBottom: '.3rem' }}>Learn Go ("Golang") from the ground up & in great depth by building multiple demo projects, incl. a REST API</p>
                            <span className='instructor-name'>By Someone</span>


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
                            </div>

                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                                <div className='totalHour-level-subtitles courses-totalHour-level-subtitles' style={{ marginLeft: 0, fontSize: 'smaller' }}>
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

                        </div>

                        <div className='allcourse-card-price' style={{ fontWeight: '700' }}>
                            <span className='allcourse-card-price-span'>₹389</span>
                        </div>
                    </div>
                      <div uk-dropdown="pos: top-center;auto-update: false" style={{width:'30rem'}}>
                        <div className='what-you-will-learn'>
                            <p style={{fontWeight:'700', color:'black'}}>what you'll learn</p>
                        </div>
                        <div className='what-course-provide'>
                            <ul>
                                <li>

                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will learn how to leverage the power of Python to solve tasks.</span>

                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will build games and programs that use Python libraries.</span></li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will be able to use Python for your own work problems or personal projects.</span></li>
                            </ul>
                        </div>

                        <div className='addtocart-like-btn' style={{justifyContent:'space-around'}}>
                            <div className='add-to-cart'>
                                <button style={{width:'20rem'}}>Add to cart</button>
                            </div>
                            <div className='like-btn'>
                                <span class="material-symbols-outlined" style={{ fontSize: '30px' }}>
                                favorite_border
                                </span>
                            
                            </div>
                        </div>
                    
                    
                    </div>
                
                    <div className='allCourses-card mx-auto'>
                        <div className='allCourses-card-img'>
                            <img src={course_img} alt="" className='' />
                        </div>
                        <div className='allCourses-card-details'>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>The Complete Python Bootcamp From Zero to Hero in Python</h5>
                            <p class="card-text" style={{ marginTop: '.3rem', marginBottom: '.3rem' }}>Learn Go ("Golang") from the ground up & in great depth by building multiple demo projects, incl. a REST API</p>
                            <span className='instructor-name'>By Someone</span>


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
                            </div>

                            <div className='bestseller-upatedDate courses-bestseller-upatedDate' style={{ marginTop: '.1rem' }}>

                                <div className='totalHour-level-subtitles courses-totalHour-level-subtitles' style={{ marginLeft: 0, fontSize: 'smaller' }}>
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

                        </div>

                        <div className='allcourse-card-price' style={{ fontWeight: '700' }}>
                            <span className='allcourse-card-price-span'>₹389</span>
                        </div>
                    </div>
                      <div uk-dropdown="pos: top-center;auto-update: false" style={{width:'30rem'}}>
                        <div className='what-you-will-learn'>
                            <p style={{fontWeight:'700', color:'black'}}>what you'll learn</p>
                        </div>
                        <div className='what-course-provide'>
                            <ul>
                                <li>

                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will learn how to leverage the power of Python to solve tasks.</span>

                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will build games and programs that use Python libraries.</span></li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                    <span>You will be able to use Python for your own work problems or personal projects.</span></li>
                            </ul>
                        </div>

                        <div className='addtocart-like-btn' style={{justifyContent:'space-around'}}>
                            <div className='add-to-cart'>
                                <button style={{width:'20rem'}}>Add to cart</button>
                            </div>
                            <div className='like-btn'>
                                <span class="material-symbols-outlined" style={{ fontSize: '30px' }}>
                                favorite_border
                                </span>
                            
                            </div>
                        </div>
                    
                    
                    </div>
                </div>
            </div>




            <div className='pagination' style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>

                <span class="material-symbols-outlined" style={{ borderRadius: '100%', border: '1px solid', padding: '7px', cursor: 'pointer' }}>
                    chevron_left
                </span>
                <div className='page' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '12rem' }}>
                    <span style={{ textDecoration: 'underline', textUnderlineOffset: '.4rem' }}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                    <span>625</span>
                </div>
                <span class="material-symbols-outlined" style={{ borderRadius: '100%', border: '1px solid', padding: '7px', cursor: 'pointer' }}>
                    chevron_right
                </span>

            </div>

        </div>
    )
}
