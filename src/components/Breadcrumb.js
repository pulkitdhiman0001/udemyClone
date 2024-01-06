import React from 'react'

import "../customCss/breadcrumb.css"


export default function Breadcrumb() {
    return (
        <div className='breadcrumb'>
            <ul>
                <li>
                    Development
                    <a href=""><img src="https://s.udemycdn.com/browse_components/link-bar/large-next.svg" alt="" srcset="" /></a>
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
                <li>
                    Development
                </li>
            </ul>

            <div className='popover-more' style={{ cursor: 'pointer' }}>
                <i className='material-icons'>more_vert</i>
            </div>
            <div uk-dropdown="mode: click; pos: bottom-left" style={{minWidth:'20rem', padding:'1rem'}}>
                <div className='popover-more-item'>
                    Software Engineer
                </div>
                <div className='popover-more-item'>
                    Software Developement Tools
                </div>
                <div className='popover-more-item'>
                    No-Code Developement
                </div>
            </div>

        </div>
    )
}
