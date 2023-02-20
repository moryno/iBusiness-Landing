import React from 'react'
import './company.css'
import illustration from '../../../assets/ill4.jpg'

export const CompanyInfo = () => {
  return (
    <div className='c-info' id='c-info'>
        <p className='c-header'>Passionate about customer delight and driven by customer success.</p>
            <div className='c-description'>
                <img src={illustration} alt='illustration' /> 
                <p className='c-description-text'>
                We develop high quality software through intensive research and collaboration with various domain experts. Our products are designed to unleash the untapped potential of individuals and businesses around the world. We are customer centric with a mission to unlock quantum human and business potential through innovation. We are committed to develop cutting edge software that provides better solutions to our customers and meets their changing requirements.
                </p>
        </div>
    </div>
  )
}
