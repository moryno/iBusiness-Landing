import React from 'react';
import './footer.css';
import { AboutSec } from './components/AboutSec';
import { Navigation } from './components/Navigation';
import { Copyright } from './components/Copyright';



export const Footer = () => {
  return (
    <>
      <div className='footer'>
        <AboutSec />
        <Navigation />
      </div>  
      <Copyright />
    </>
  )
}
