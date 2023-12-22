import React from 'react'

import "./customCss/top_categories.css"

import design from "./images/design.jpg"
import development from "./images/development.jpg"
import marketing from "./images/marketing.jpg"
import it from "./images/it.jpg"
import personal_development from "./images/personal_development.jpg"
import business from "./images/business.jpg"
import photography from "./images/photography.jpg"
import music from "./images/music.jpg"



export default function Top_categories() {
  return (
    <section className='top_categories_section mx-auto mt-2'>
      <h2 className='top_categories_title'>Top categories</h2>

    <div className='top_categories_mobile_view mx-auto'>
      
      <ul className='top_categories_mobile_view_ul'>
        <li>
          Design
        </li>
        <li>
          Development
        </li>
        <li>
          Marketing
        </li>
        <li>
          IT & Software
        </li>
        <li>
          Personal Development
        </li>
        <li>
          Business
        </li>
        <li>
          Photography
        </li>
        <li>
          Music
        </li>
      </ul>
    </div>

    <div className=' top_categories'>
        
        <a href="https://www.google.com" className='category-card'>
          <div>
              <img src={design} alt='design' className='category'></img>
          </div>
          <div className='category_name'>
            Design
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={development} alt='development' className='category'></img>
          </div>
          <div className='category_name'>
            Development
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={marketing} alt='marketing' className='category'></img>
          </div>
          <div className='category_name'>
            Marketing
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={it} alt='IT' className='category'></img>
          </div>
          <div className='category_name'>
            IT & Software
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={personal_development} alt='personal_development' className='category'></img>
          </div>
          <div className='category_name'>
            Personal Development
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={business} alt='business' className='category'></img>
          </div>
          <div className='category_name'>
            Business
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={photography} alt='photography' className='category'></img>
          </div>
          <div className='category_name'>
            Photography
          </div>
        </a>

        <a href="https://www.google.com" className='category-card'>
          <div >
              <img src={music} alt='music' className='category'></img>
          </div>
          <div className='category_name'>
          Music
          </div>
        </a>
    </div>
    </section>
  )
}
