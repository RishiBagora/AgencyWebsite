import React from 'react'
import ServiceDetailHero from '../components/ServiceDetail/ServiceDetailHero'
import ServiceIntro from '../components/ServiceDetail/ServiceIntro'
import ProblemsWeSolve from '../components/ServiceDetail/ProblemsWeSolve'
import OurSolution from '../components/ServiceDetail/OurSolution'
import WhatYouGet from '../components/ServiceDetail/WhatYouGet'
import ProcessTimeline from '../components/home/ProcessTimeline'
import ServiceFAQs from '../components/ServiceDetail/ServiceFAQ'
import CTA from '../components/home/CTA'

const ServiceDetail = () => {
  return (
    <div>
      <ServiceDetailHero/>
      <ServiceIntro/>
      <ProblemsWeSolve/>
      <OurSolution/>
      <WhatYouGet/>
      <ProcessTimeline/>
      <ServiceFAQs/>
      <CTA/>
    </div>
  )
}

export default ServiceDetail