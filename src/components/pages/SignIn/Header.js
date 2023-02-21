import React from 'react'
import './signin.css'
import data from '../../../data/pages/signin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className='signin-header'>
        <div className='signin-info'>
            <p className='si-header'>{ data.header }</p>
            <p className='si-description'>{ data.subheader }</p>
            <ul className='si-list'>
                {data.functions.map(func => (
                   <li key={func}><FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp;{func}</li>
                ))}
            </ul>
        </div>
        <div className='signin-form'>
            <p className='si-subheader'>{ data.s_subheader }</p>
            <div className='s-inputs'>
                    <input type='text' placeholder='First name' className='sf-form-control' />
                    <input type='text' placeholder='Last name' className='sf-form-control' />
                    <input type='text' placeholder='Email Address' className='sf-form-control' />
                    <input type='text' placeholder='Telephone/Mobile No.' className='sf-form-control' />
                    <input type='text' placeholder='Organization Name' className='sf-form-control' />
                    <input type='text' placeholder='Number of employees ' className='sf-form-control' />
                    <input type='text' placeholder='Country' className='sf-form-control' />
                    <button value="Submit" className='sf-button'>{ data.btn_text }</button>
            </div>
        </div>
    </div>
  )
}
