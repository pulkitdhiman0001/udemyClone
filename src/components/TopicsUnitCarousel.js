import React from 'react'

import "../customCss/TopicsUnitCarousel.css"

export default function TopicsUnitCarousel() {
  return (

    // <div className="uk-position-relative uk-visible-toggle uk-dark topics-unit-carousel mx-auto" tabIndex="-1" uk-slider={'sets:true;draggable:true;finite:true'}>
    <div uk-slider={'sets:true; finite:true'}>

    <div class="uk-position-relative">

        <div class="uk-slider-container topics-unit-carousel">
          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid uk-grid-small">
            <li>
              <div className='topic'>
                Python
              </div>
              <div className='topic'>
                Data Science
              </div>
            </li>
            <li>
              <div className='topic'>
                React JS
              </div>
              <div className='topic'>
                Java
              </div>
            </li>
            <li>
              <div className='topic'>
                C# (Programming language)
              </div>
              <div className='topic'>
                Web Developement
              </div>
            </li>
            <li>
              <div className='topic'>
                JavaScript
              </div>
              <div className='topic'>
                Unreal Engine
              </div>
            </li>
            <li>
              <div className='topic'>
                Machine Learning
              </div>
              <div className='topic'>
                Unity
              </div>
            </li>
            <li>
              <div className='topic'>
                Deep Learning
              </div>
              <div className='topic'>
                SQL
              </div>
            </li>

          </ul>

          {/* <a className="uk-position-center-left " href uk-slider-item="previous"><i className='material-icons'>chevron_left</i></a>
          <a className="uk-position-center-right " href uk-slider-item="next"><i className='material-icons'>chevron_right</i></a> */}

          <a className="uk-position-center-left uk-position-small" href uk-slidenav-previous uk-slider-item="previous" style={{ marginTop: '-.8rem', left: '-2rem' }}><i className='material-icons'>chevron_left</i></a>
          <a className="uk-position-center-right uk-position-small" href uk-slidenav-next uk-slider-item="next" style={{ marginTop: '-.8rem', right: '-2rem' }}><i className='material-icons'>chevron_right</i></a>
        </div>
      </div>
    </div>



  )
}
