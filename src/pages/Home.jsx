import React from 'react'
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PortfolioPreview from '../components/home/PortfolioPreview'

const Home = () => {
  return (
    <div>
        <Hero/>
        <TrustStrip/>
        <ServicesPreview/>
        <WhyChooseUs/>
        <PortfolioPreview/>
    </div>
  )
}

export default Home