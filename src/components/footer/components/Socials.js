import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

export const Socials = () => {
  return (
      <div className='socials-icons'>
          <FontAwesomeIcon icon={faFacebook} className='social-icon' />
          <FontAwesomeIcon icon={faTwitter} className='social-icon' />
          <FontAwesomeIcon icon={faInstagram} className='social-icon' />
          <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
      </div>
  )
}
