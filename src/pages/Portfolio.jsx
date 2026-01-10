import React from 'react'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import PortfolioIntro from '../components/portfolio/PortfolioIntro'
import PortfolioFilter from '../components/portfolio/PortfolioFilter'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import portfolioData from "../data/portfolioData";
import { useState } from 'react'
import PortfolioStats from '../components/portfolio/PortfolioStats'
import PortfolioCTA from '../components/portfolio/PortfolioCTA'
import CTA from '../components/home/CTA'
import useSEO from '../hooks/useSEO'

export default function Portfolio() {


  useSEO({
    title: "Portfolio | Our Website Design & Development Work| TheWebKulture",
    description: "Explore TheWebKulture's portfolio of stunning websites and digital solutions crafted for Indian businesses. See our expertise in action across various industries.",
    canonical: "https://thewebkulture.vercel.app/portfolio"
  });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === activeCategory
        );
      return (
    <div className="mt-20">
      <PortfolioHero/>
      <PortfolioIntro/>
      <PortfolioStats/>
      <PortfolioFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <PortfolioGrid projects={filteredProjects} />
      <CTA/>
    </div>
  )
}
