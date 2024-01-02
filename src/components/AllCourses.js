import React, { useState } from 'react'


export default function AllCourses() {

    return (
        <div>
            <h3 style={{ fontWeight: '700' }}>All 'Development' courses</h3>

            <div className='not-sure-div'>
                <i className='material-icons' style={{ padding: 0, background: 'transparent', color: 'black', fontSize: '2rem', marginRight: '1rem' }}>info</i>
                <span style={{ fontWeight: 900, fontSize: '.9rem' }}>Not sure? All courses have a 30-day money-back guarantee</span>
            </div>

            <div className='filter-sort-results py-4'>
                <div style={{ display: 'flex' }}>
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
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Rating
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    ratings....section
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Video Duration
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    video....section
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Topic
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    topic....section
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
