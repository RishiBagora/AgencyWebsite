const filters = [
  "All",
  "Business Websites",
  "Hotels & Resorts",
  "E-Commerce",
  "Corporate",
  "Landing Pages",
];

export default function PortfolioFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <nav className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex gap-3 overflow-x-auto">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActiveCategory(item)}
            className={`
              whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium
              transition-colors
              ${
                activeCategory === item
                  ? "bg-[var(--color-accent)] text-white"
                  : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
