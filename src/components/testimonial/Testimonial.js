import React from 'react'
import './testimonial.css'
import image1 from '../../assets/avatar-1.jpg'
import data from '../../data/testimonial'


import TestimonyItem from './testimony-item'

export const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className='test-main'>
          <h4 className='hero-header'>{ data.testimony.title }</h4>
          <h1 className='hero-lgheader test-text'>{ data.testimony.subtitle }</h1>
          <p className='hero-text' id="test-text">{ data.testimony.description }</p>
        </div>

          <div className='testimony-items'>
              <TestimonyItem imgurl={image1}
               text="I commend the team for such an excellent piece of software. Running my business has never been easier."
              author="James Karanja"
               occ="Entrepreneur" />

          </div>
    </div>
  )
}
