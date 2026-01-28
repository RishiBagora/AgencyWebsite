export default function PortfolioCard({ project }) {
  return (
    
    <article
      className="
        group overflow-hidden rounded-2xl
        border border-[var(--color-border)]
        bg-[var(--color-surface)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 p-5">
        {/* INDUSTRY TAG */}
        <span className="w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
          {project.industry}
        </span>

        {/* TITLE */}
        <h3 className="text-lg font-semibold leading-snug text-[var(--color-text)] line-clamp-2">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)] line-clamp-3">
          {project.short_description}
        </p>

        {/* CTA */}
        {(project.case_study_slug || project.project_url) && (
          <div className="mt-3">
            <a
              href={
                project.case_study_slug
                  ? `/portfolio/${project.case_study_slug}`
                  : project.project_url
              }
              target={project.project_url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-sm font-medium text-[var(--color-accent)]
                hover:underline
              "
            >
              View Project →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
