import React from 'react';
import { Styledbutton } from '../Button';

export const ContactForm = () => {
  return (
    <div className='contact-form'>
        <h4 className='contact-head'>Fill in the form below</h4>
        <div className='form-group-contact'>
            <input className='form-control cont-input' type="text" placeholder='Full names'/>
            <input className='form-control cont-input' type="password" placeholder='Email'/>
            <input className='form-control cont-input' type="text" placeholder='Message'/>
            <Styledbutton value="Submit" />
        </div>
    </div>
  )
}
