import React from 'react'
import './supportform.css'
import { Address } from '../contactus/Address'

export const SupportForm = () => {
  return (
    <div className='support-form'>
        <div className='s-form'>
            <p className='hero-header s-header'>Support</p>
            <p className='s-subheader'>Fill out your contact info. We’ll get in touch ASAP.</p>

            <div className='s-inputs'>
                <div className='s-input-names'>
                    <input type='text' placeholder='First name' className='name-control' />
                    <input type='text' placeholder='Middle name' className='name-control' />
                </div>
                <input type='text' placeholder='Email Address' className='s-form-control' />
                <input type='text' placeholder='Telephone/Mobile No.' className='s-form-control' />
                <input type='text' placeholder='Organization Name' className='s-form-control' />
                <input type='text' placeholder='Number of employees ' className='s-form-control' />
                <input type='text' placeholder='Country' className='s-form-control' />
                <textarea type='text' placeholder='Type your message here' className='s-textbox' />
                <button value="Submit" className='s-button'>Submit</button>
            </div>
        </div>
        <div className='s-form s-right'>
            <Address />
        </div>
    </div>
  )
}
