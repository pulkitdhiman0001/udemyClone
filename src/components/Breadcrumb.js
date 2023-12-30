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

            <div className='popover-more'>
                <i className='material-icons'>more_vert</i>
            </div>
        </div>
    )
}
