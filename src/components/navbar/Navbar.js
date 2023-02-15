import React, { useState } from 'react';
import Brand from '../UI/Brand';
import { Navbutton } from '../UI/Button'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';




export const Navbar = () => {
  const [ toggleSidebar, setToggleNav ] = useState(false);

  const handleToggle = () => {
    if ( toggleSidebar === false ){
      document.getElementById('nav-mobile').style.right = "0";
      document.getElementById('burger').icon = faTimes;
      setToggleNav(true);
    } else {
      document.getElementById('nav-mobile').style.right = "100vw";
      document.getElementById('burger').icon = faBars;
      setToggleNav(false);
    }
  }

  return (
    <>
      <div className='nav-mobile' id='nav-mobile'>
        <div className='nav-mobile-content'>
          <button className='nav-mobile-link'>Products</button>
          <button className='nav-mobile-link'>Company</button>
          <button className='nav-mobile-link'>Support</button>
          <button className='nav-mobile-link'>Sign In</button>
          <button className='nav-mobile-link'>Get started</button>
        </div>
      </div>
      <div className="navbar" style={{
          display : 'flex',
          flexDirection : 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingTop: '1.2rem',
      }}>
          <div className='brand'>
              <Brand className="brand-logo" />
              <Navbutton className="brand-left" value="Products" />
              <Navbutton className="brand-left" value="Company" /> 
              <Navbutton className="brand-left"value="Support" /> 
          </div>
          <div className='brand-links'>  
              <button className='nav-button'><FontAwesomeIcon icon={faUser} />&nbsp; Sign In</button>
              <button className='nav-styled-button' id='br-link'>Get started</button>
              <FontAwesomeIcon icon={faBars} id='burger' onClick={handleToggle}/>
          </div>    
      </div>
    </>
  )
}
