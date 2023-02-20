import React from 'react'
import './company.css'
import illustration from '../../../assets/ill3.png'
import { Landingbutton } from '../../UI/Button';

export const Header = () => {
  return (
    <div className='company'>
        <div className='company-illustration'>
            <img src={illustration} alt='company-illustration'/>
        </div>
        <div className='company-info'>
            <h4 className='info-header'>Our Company</h4>
            <p className='info-description'>We are a trail-blazing software company whose main aim is to develop exceptional and intelligent cloud-based software products that help you stay ahead of competition.</p>
            <Landingbutton value="Read more"/>
        </div>
    </div>
  )
}
