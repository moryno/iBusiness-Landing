import React from 'react';
import './hero.css';
import illustration from '../../assets/illustration.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from '../../data/hero'; 
import { Landingbutton } from '../UI/Button';

export const Hero = () => {
  return (
        <div className="hero-content">
            <div className='info'>
                <h1 className='landing-header'>{ data.title }</h1>
                <p className='lander-page-subtitle'>{ data.subtitle }</p>
                <form>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <Landingbutton value="Sign up" />
                </form>
            </div>
            <div className='hero-image-div'>
                <LazyLoadImage src={illustration} className='hero-image' alt="Bannerimage" />
            </div>
    </div>
  )
}
