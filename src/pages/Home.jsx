import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedDestination from '../components/FeaturedDestination.jsx/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer/ExclusiveOffer'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffer/>
      <Testimonials/>
    </>
  )
}

export default Home
