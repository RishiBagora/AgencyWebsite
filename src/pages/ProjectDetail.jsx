import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import useSEO from "../hooks/useSEO";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ProjectChallenge from "../components/project/ProjectChallenge";
import ProjectSolution from "../components/project/ProjectSolution";
import ProjectProcess from "../components/project/ProjectProcess";
import ProjectTechStack from "../components/project/ProjectTechStack";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectResults from "../components/project/ProjectResults";
import ProjectCTA from "../components/project/ProjectCTA";

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
     <ProjectSolution project={project} />
     <ProjectProcess project={project} />
     <ProjectTechStack project={project}/>
     <ProjectGallery project={project} />
     <ProjectResults project={project} />
     <ProjectCTA project={project} />
    </div>
  );
};

export default ProjectDetail;
