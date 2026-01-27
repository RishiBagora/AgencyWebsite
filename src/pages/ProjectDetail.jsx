import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import useSEO from "../hooks/useSEO";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ProjectChallenge from "../components/project/ProjectChallenge";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Find project using slug
  const project = portfolioData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <div style={{ padding: "40px" }}>Project Not Found</div>;
  }

  // SEO for project page
  useSEO({
    title: project.seo.title,
    description: project.seo.description,
    canonical: `https://yourdomain.com/portfolio/${project.slug}`
  });

  return (
    <div className="mt-20">
     <ProjectHero project={project} />
     <ProjectOverview project={project} />
     <ProjectChallenge project={project} />
    </div>
  );
};

export default ProjectDetail;
