import React from 'react'
import data from '../../../data/footer'

export const Navigation = () => {
  return (
    <div className='navigation'>
        <h4 className='footer-header'>{ data.navlinks.title }</h4>
        <br></br>
        <div className='navigation-links'>
            {data.navlinks.links.map(link => (
              <a className='navigation-link' key={ link } href='/'>{ link }</a>
            ))}
        </div>
    </div>
  )
}
