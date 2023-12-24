import React from 'react'

import "../customCss/mobileSearch.css"

export default function mobileSearch({isMobileSearchVisible, hideMobileSearchOnClick}) {



  return (
    <div className='mobile-search-main' style={isMobileSearchVisible}>
      <div className='mobile-search'>
      <div className='search-icon'>
        <i className='material-icons'>search</i>
      </div>
      <form action="" method="get" className='mobile-search-input'>
        <input type="text" placeholder='Search for anything'/>
      </form>
      <div className='close-search-btn' onClick={hideMobileSearchOnClick}>
        <i className='material-icons'>close</i>
      </div>
    </div>
    </div>
  )
}
