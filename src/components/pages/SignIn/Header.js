import React from 'react'
import './signin.css'

export const Header = () => {
  return (
    <div className='signin-header'>
        <div className='signin-info'>
            <p className='si-header'>Start using iBusiness today</p>
            <p className='si-description'>Join us today and benefit by using our platform and enjoy services such as:</p>
            <ul className='si-list'>
                <li>Company definition and cost centers</li>
                <li>Create users and employees</li>
                <li>Define your accounts and ledgers</li>
                <li>Manage inventory transactions</li>
                <li>Manage procure to pay processes</li>
                <li>Manage order to cash processes</li>
                <li>Generate reports and analytics</li>
            </ul>
        </div>
        <div className='signin-form'>
            <p className='s-subheader'>Enter your information here and click submit</p>
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
