import React from 'react'
import ServiceDetailHero from '../components/ServiceDetail/ServiceDetailHero'
import ServiceIntro from '../components/ServiceDetail/ServiceIntro'
import ProblemsWeSolve from '../components/ServiceDetail/ProblemsWeSolve'
import OurSolution from '../components/ServiceDetail/OurSolution'
import WhatYouGet from '../components/ServiceDetail/WhatYouGet'
import ProcessTimeline from '../components/home/ProcessTimeline'
import ServiceFAQs from '../components/ServiceDetail/ServiceFAQ'
import CTA from '../components/home/CTA'
import useSEO from '../hooks/useSEO'
import servicesData from "../data/servicesData";
import { useParams } from "react-router-dom";



const ServiceDetail = () => {
 
  // STEP 1: get slug
  const { slug } = useParams();

  // STEP 2: find service
  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <div>Service Not Found</div>;

  // STEP 3: SEO setup
  useSEO({
    title: `${service.serviceName} | Your Agency Name`,
    description: service.intro.description,
    canonical: `https://yourdomain.com/services/${service.slug}`
  });

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