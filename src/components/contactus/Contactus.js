import React from 'react'
import './contactus.css'
import { ContactForm } from './ContactForm'
import { Address } from './Address'

export const ContactField = () => {
  return (
    <div className='contactus'>
        <h4 className='hero-header'>Contact Us</h4>
        <h1 className='hero-lgheader'>Fill out your contact information and we’ll get in touch ASAP.</h1>
        <div className='contact-field'>
            <ContactForm />
            <Address />
        </div>
    </div>
  )
}
