import React from 'react';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from '../../data/products'; 


const Items = () =>  {
    return (
      <>
        {data.items.map(item => (
            <div className='product-item' key={ item.key }>
                <div className="products-img"><LazyLoadImage src={item.icon} className='products-image' alt="Bannerimage" /></div>
                <p className='prod-ico-title'>{ item.title }</p>
                <h6 className='prod-ico-subtitle'>{ item.description }</h6>
            </div>
        ))}
      </>
    );
  };

export const Products = () => {
  
  return (
    <div className='products'>
        <h1 className='hero-lgheader'>{ data.header }</h1>
        <p className='hero-text'>{ data.content }</p>


        <div className='product-items'>
            <button className='btn-previous'><FontAwesomeIcon icon={faAngleLeft} /></button>
            {Items()}
            <button className='btn-next'><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
    </div>
  )
}

