import React from 'react'
import './signin.css'
import data from '../../../data/pages/signin'

export const Header = () => {
  return (
    <div className='signin-header'>
        <div className='signin-info'>
            <p className='si-header'>{ data.header }</p>
            <p className='si-description'>{ data.subheader }</p>
            <ul className='si-list'>
                {data.functions.map(func => (
                    <li key={func}>{func}</li>
                ))}
            </ul>
        </div>
        <div className='signin-form'>
            <p className='s-subheader'>{ data.s_subheader }</p>
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
    </div>
  )
}
