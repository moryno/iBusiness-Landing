import React, { useState, useEffect } from 'react'
import './testimonial.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import testimonies from '../../data/testimonial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const TestimonyItem = () => {

  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);
  const data = testimonies.items;
  const [currentItem, setCurrentItem] = useState(testimonies.items[0]);

  useEffect(() => {

    setCurrentItem(data[currentItemIndex]);
    
  }, [currentItemIndex, data]);
  
  const handleNext = () => {
    if (currentItemIndex < data.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    } else if (currentItemIndex === data.length - 1) {
      setCurrentItemIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    } else {
      setCurrentItemIndex(data.length - 1);
    }
  };



  return (
        <div className='testimony-item'>
          <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrevious} className='testimony-btn'/>
            <LazyLoadImage src={ currentItem.imgurl } className='t-profile' alt='profile' />
            <div className='t-info'>
              <p className='t-item-description'>"{ currentItem.description }"</p>
              <p className='t-item-name'><b>{ currentItem.author }</b></p>
              <p className='t-item-role'>{ currentItem.occupation }</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight}  onClick={handleNext} className='testimony-btn'/>
        </div>
  );
};

export default TestimonyItem;
