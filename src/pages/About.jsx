import React from 'react'
import AboutHero from '../components/about/AboutHero'
import CompanyIntro from '../components/about/CompanyIntro'
import OurStory from '../components/about/OurStory'
import MissionVision from '../components/about/MissionVision'
import OurValues from '../components/about/OurValues'
import WhyWeExist from '../components/about/WhyWeExist'
import ProcessSnapshot from '../components/about/ProcessSnapshot'
import TrustStats from '../components/about/TrustStats'
import AboutCTASection from '../components/about/AboutCTASection'
import useSEO from '../hooks/useSEO'

const About = () => {
  useSEO({
    title: "About Us | {The Web Kulture} – India’s Trusted Web Development Agency",
    description: "Discover TheWebKulture, a top website development agency in India. Learn about our mission, values, and commitment to delivering exceptional digital solutions.",
    canonical: "https://thewebkulture.vercel.app/about"
  });
  return (
    <div>
        <AboutHero/>
        <CompanyIntro/>
        <OurStory/>
        <MissionVision/>
        <OurValues/>
        <WhyWeExist/>
        <ProcessSnapshot/>
        <TrustStats/>
        <AboutCTASection/>
    </div>
  )
}

export default About