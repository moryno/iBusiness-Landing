import React from 'react';
import data from '../../../data/footer';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className='navigation'>
        <h4 className='footer-header'>{ data.navlinks.title }</h4>
        <br></br>
        <div className='navigation-links'>
            {data.navlinks.links.map(link => (
              <Link to={ link.to} className='navigation-link' key={ link.key }>{ link.value }</Link>
            ))}
        </div>
    </div>
  )
}
