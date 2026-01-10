import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesIntro from '../components/services/ServicesIntro'
import ServicesList from '../components/services/ServicesList'
import WhoItsFor from '../components/services/WhoItsFor'
import WhyOurServices from '../components/services/WhyOurServices'
import ProcessSnapshot from '../components/services/ProcessSnapshot'
import TechStack from '../components/services/TechStack'
import FAQs from '../components/services/FAQ'
import ServicesCTA from '../components/services/ServicesCTA'
import useSEO from '../hooks/useSEO'


const Services = () => {

  useSEO({
    title: "Our Services | Website & Digital Solutions for Indian Businesses",
    description: "Explore TheWebKulture's comprehensive web development services, including custom websites, e-commerce solutions, UI/UX design, and digital marketing for Indian businesses.",
    canonical: "https://thewebkulture.vercel.app/services"
  });
  return (
    <div>
        <ServicesHero/>
        <ServicesIntro/>
        <ServicesList/>   
        <WhoItsFor/>
        <WhyOurServices/>
        <ProcessSnapshot/>
        <TechStack/>
        <FAQs/>
        <ServicesCTA/>
    </div>
  )
}

export default Services