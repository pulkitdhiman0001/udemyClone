import React, { useState } from 'react'

import Rating from '@mui/material/Rating';

import course_img from "../images/courses.jpg"

export default function AllCourses() {

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
            <h3 style={{ fontWeight: '700' }}>All 'Development' courses</h3>

            <div className='not-sure-div'>
                <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '2rem', marginRight: '1rem' }}>info</i>
                <span style={{ fontWeight: 900, fontSize: '.9rem' }}>Not sure? All courses have a 30-day money-back guarantee</span>
            </div>

            <div className='filter-sort-results py-4'>
                <div style={{ display: 'flex' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapsFilter" aria-expanded="false">
                    <div className='filter' style={{ fontWeight: 700 }}>
                        <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '1.5rem' }}>filter_list</i>
                        <span>Filter</span>
                    </div>
                    <div className='sort'>
                        <div className='Sort-by'>
                            <div style={{ fontSize: '.9rem', fontWeight: 'lighter' }}>Sort by</div>
                            <div>Most Popular</div>
                        </div>
                        <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '1.5rem', marginLeft: '1rem' }}>keyboard_arrow_down</i>

                    </div>
                </div>
                <div className='results'>
                    10,000 results
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                <div className='left-panel'>
                    <div>
                        <div class="collapse collapse-horizontal show" id="collapsFilter">
                            <div class="card card-body" style={{ width: "20rem", padding: 0 }}>
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

                <div className='right-panel'>
                    right
                </div>
            </div>






        </div>
    )
}