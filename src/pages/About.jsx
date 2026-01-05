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

const About = () => {
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