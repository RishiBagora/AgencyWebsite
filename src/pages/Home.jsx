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
import useSEO from '../hooks/useSEO'
import keywords from '../data/keywords'



const Home = () => {
  useSEO({
  title: "Home - Premium Website Development Agency in India | {TheWebKulture}",
  description: "Professional website development, e-commerce, UI/UX, and business-focused digital solutions for Indian brands. Fast, modern, SEO-friendly websites" + "Services: " + keywords.home.join(", "),
  canonical: "https://thewebkulture.vercel.app/"
});
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