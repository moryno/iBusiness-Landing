import React from 'react'
import { Socials } from './Socials'
import data from '../../..//data/footer'

export const AboutSec = () => {
  return (
    <div className='contact-info'>
        <h4 className='footer-header blue'>{ data.about.title }</h4>
        <p className='abt-description'>{ data.about.description }</p>
        <br /><br /> 
        <h4 className='footer-header blue'>{ data.socials.title }</h4>
        <br></br>
        <Socials />
    </div>
  )
}
