import React, { useState } from 'react';
import Brand from '../UI/Brand';
import { Navbutton } from '../UI/Button'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/navbar';




export const Navbar = () => {
  const [ toggleSidebar, setToggleNav ] = useState(false);

  const handleToggle = () => {
    if ( toggleSidebar === false ){
      document.getElementById('nav-mobile').style.right = "0";
      setToggleNav(true);
    } else {
      document.getElementById('nav-mobile').style.right = "100vw";
      setToggleNav(false);
    }
  }

  return (
    <>
      <div className='nav-mobile' id='nav-mobile'>
        <div className='nav-mobile-content'>
          {data.navmobilecontent.links.map(link => (
            <button className='nav-mobile-link' key={ link }>{ link }<span className='nav-mobile-icon'><FontAwesomeIcon icon={faAngleRight} /></span></button>
          ))}
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
              {data.navlinks.map(link => (
                <Navbutton className="brand-left" key={ link } value={ link } /> 
              ))}
          </div>
          <div className='brand-links'>  
              <button className='nav-button'><FontAwesomeIcon icon={faUser} />&nbsp; {data.signuptext}</button>
              <button className='nav-styled-button' id='br-link'>{data.actionbutton}</button>
              <FontAwesomeIcon icon={toggleSidebar ? faTimes : faBars } id='burger' onClick={handleToggle}/>
          </div>    
      </div>
    </>
  )
}
