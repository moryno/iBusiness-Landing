import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Address = () => {
  return (
    <div>
      <div className='adr-head'>
        <FontAwesomeIcon icon={faLocationDot} />
        <h2 className='adr-header'>Location</h2>
      </div>
      <div className='adr-subtext'>
        <p>Golf View Office Suites<br /><br />Muthaiga, Nairobi<br /><br />Kenya</p>
      </div>
      <div className='adr-head'>
        <FontAwesomeIcon icon={faMobileButton} />
        <h2 className='adr-header'>Phone Number</h2>
      </div>
      <div className='adr-head'>
        <FontAwesomeIcon icon={faEnvelope} />
        <h2 className='adr-header'>Email Address</h2>
      </div>
    </div>
  )
}
