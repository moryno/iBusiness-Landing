import React, { useRef, useEffect } from 'react';
import data from '../../../data/footer';
import { Link } from 'react-router-dom';

export const Navigation = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [scrollRef]);
  return (
    <div className='navigation'>
        <h4 className='footer-header'>{ data.navlinks.title }</h4>
        <br></br>
        <div className='navigation-links'>
            {data.navlinks.links.map(link => (
              <Link to={ link.to} className='navigation-link' ref={scrollRef} key={ link.key }>{ link.value }</Link>
            ))}
        </div>
    </div>
  )
}
