import React from 'react'

import "./customCss/companies.css"

import at from "./images/at.svg"
import cisco from "./images/cisco.svg"
import citi from "./images/citi.svg"
import er from "./images/er.svg"
import hp from "./images/hp.svg"
import pg from "./images/pg.svg"
import s from "./images/s.svg"
import w from "./images/w.svg"


export default function Companies() {
    return (
        <div className='w-100 mt-5 companies'>
            <div className='companies-heading mt-5'>
                <h2 className='text-center'>Trusted by over 14,400 companies and millions of learners around the world</h2>
            </div>
            <ul>
                <li><img src={w} alt='company'></img></li>
                <li><img src={s} alt='company'></img></li>
                <li><img src={cisco} alt='company'></img></li>
                <li><img src={at} alt='company'></img></li>
                <li><img src={pg} alt='company'></img></li>
                <li><img src={hp} alt='company'></img></li>
                <li><img src={citi} alt='company'></img></li>
                <li><img src={er} alt='company'></img></li>
                
            </ul>
        </div>
    )
}
