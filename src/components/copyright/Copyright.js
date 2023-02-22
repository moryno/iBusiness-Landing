import React from 'react'
import data from '../../data/footer'
import './copyright.css'


export const Copyright = () => {
  return (
    <div className='copyright'>
      <div className='copyright-left'>
        &copy; { data.copyright.subtitle }
      </div>
      <div className='copyright-right'>
        <a href='https://ibusiness.azurewebsites.net/PrivacyPolicy/index.htm' className='copyright-link'>Privacy Policy</a>
        <a href='/' className='copyright-link'>Terms of Use</a>
        <a href='/' className='copyright-link'>Email Us</a>
        <a href='/' className='copyright-link'>Call Us</a>
      </div>
    </div>
  )
}
