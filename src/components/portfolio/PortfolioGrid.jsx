import { Link } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ projects }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
         
         <Link to={`/portfolio/${project.slug}`}>
          <PortfolioCard key={project.id} project={project} />
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-20 text-center text-sm text-[var(--color-text-muted)]">
          No projects found in this category.
        </p>
      )}
    </section>
  );
}
