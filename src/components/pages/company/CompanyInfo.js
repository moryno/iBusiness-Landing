import React from 'react'
import './company.css'
import illustration from '../../../assets/ill4.jpg'

export const CompanyInfo = () => {
  return (
    <div className='c-info' id='c-info'>
        <p className='c-header'>Passionate about customer delight and driven by customer success.</p>
            <div className='c-description'>
            <p className='c-description-text'>
            We focus on customer values and zoom into their uniqueness as we execute their business centric requirements with precision. We engage with every stakeholder and execute their expectations remarkably well for enhanced efficiency and improved performance. Our intense enthusiasm towards providing cloud based solutions to our customers is our primary drive. We believe in showing respect, honesty and dignity to our customers and partners which strengthens our relationships on a long term basis. When it comes to timeliness we believe that a little late is much too late. We are committed to ensure we deliver our products and services in accordance to the customer’s time specifications.
            </p>
            <img src={illustration} alt='illustration' className='c-illustration'/> 
        </div>
    </div>
  )
}
