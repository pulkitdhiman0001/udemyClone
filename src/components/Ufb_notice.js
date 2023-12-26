import React from 'react'

import "../customCss/ufb_notice.css"

export default function Ufb_notice() {
  return (
    <div>
      <div className='ufb-notice'>
        <span>Top companies choose <a href='https://www.google.com'> Udemy Business </a> to build in-demand career skills.</span>
        <div className='login-container-top-companies'>
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
