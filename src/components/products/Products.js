import React, { useState } from 'react';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/products';
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Products = () => {

  const [ Card1, setCard1 ] = useState(0);
  const [ Card2, setCard2 ] = useState(1);
  const [ Card3, setCard3 ] = useState(2);


  const handleNext = () => {
      if (Card3 === (data.items.length-1)) {
        setCard1(0);
        setCard2(1);
        setCard3(2);
      } 
      else {
          setCard1(Card1 + 1);
          setCard2(Card2 + 1);
          setCard3(Card3 + 1);
      }

  }

  const handlePrev = () => {
      if (Card1 === 0) {
      
      }
      else {
          setCard1(Card1 - 1);
          setCard2(Card2 - 1);
          setCard3(Card3 - 1);

      }
  }
  
  return (
    <div className='products'>
        <h1 className='hero-lgheader'>{ data.header }</h1>
        <p className='hero-text'>{ data.content }</p>


        <div className='product-items'>
            <button className='btn-previous' onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <div className='product-item'>
                <div className="products-img"><LazyLoadImage src={ data.items[Card1].icon } className='products-image' alt="Bannerimage" /></div>
                <p className='prod-ico-title'>{ data.items[Card1].title }</p>
                <h6 className='prod-ico-subtitle'>{ data.items[Card1].description }</h6>
            </div>
            <div className='product-item'>
                <div className="products-img"><LazyLoadImage src={ data.items[Card2].icon } className='products-image' alt="Bannerimage" /></div>
                <p className='prod-ico-title'>{ data.items[Card2].title }</p>
                <h6 className='prod-ico-subtitle'>{ data.items[Card2].description }</h6>
            </div>
            <div className='product-item'>
                <div className="products-img"><LazyLoadImage src={ data.items[Card3].icon } className='products-image' alt="Bannerimage" /></div>
                <p className='prod-ico-title'>{data.items[Card3].title }</p>
                <h6 className='prod-ico-subtitle'>{ data.items[Card3].description }</h6>
            </div>
            <button className='btn-next'  onClick={handleNext}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
    </div>
  )
}

