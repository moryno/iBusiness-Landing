import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Products } from '../components/products/Products'
import { About } from '../components/about/About'
import { Testimonial } from '../components/testimonial/Testimonial'
import { Footer } from '../components/footer/Footer'

export const Home = () => {
  return (
    <>
    <Hero />
    <Products />
    <About />
    <Testimonial />
    <Footer />
    </>
  )
}
