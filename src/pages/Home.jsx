import React from 'react'
import Hero from '../components/home/Hero'
// import TrustStrip from '../components/home/TrustStrip'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Testimonials from '../components/home/Testimonials'
import ProcessTimeline from '../components/home/ProcessTimeline'
import CTA from '../components/home/CTA'
import TrustStats from '../components/about/TrustStats'

const Home = () => {
  return (
    <div>
        <Hero/>
        {/* <TrustStrip/> */}
        <TrustStats/>
        <ServicesPreview/>
        <WhyChooseUs/>
        <PortfolioPreview/>
        <Testimonials/>
        <ProcessTimeline/>
        <CTA/>
    </div>
  )
}

export default Home