import React from 'react'
import './signin.css'
import data from '../../../data/pages/signin'
import { Link } from 'react-router-dom'

export const Card = () => {
  return (
    <div className='signin-container'>
        <div className='signin-info'>
            <p className='signin-header'>{ data.header }</p>
            <p className='signin-description'>{ data.subheader }</p>
            <div className='info-footer'>
              <p className='signin-text'>New here?</p>
              <Link to='/get-started'><button className='signin-gs-btn'>Get Started</button></Link>
            </div>
        </div>
        <div className='signin-form'>
            <p className='signin-subheader'>{ data.s_subheader }</p>
            <div className='signin-inputs'>
                    <input type='text' placeholder='Email Address' className='signin-form-control' />
                    <input type='password' placeholder='Password' className='signin-form-control' />
                    <button value="Submit" className='signin-button'>{ data.btn_text }</button>
                    <p className='signin-text-center'>or</p>
                    <button className='login-microsoft'><img src="https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png" className="signin-btn-logo" alt="" /> &nbsp; Log in with Microsoft</button>
            </div>
        </div>
    </div>
  )
}
