import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedDestination from '../components/FeaturedDestination.jsx/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer/ExclusiveOffer'
import Testimonials from '../components/Testimonials/Testimonials'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffer/>
      <Testimonials/>
      <NewsLetter/>
    </>
  )
}

export default Home
