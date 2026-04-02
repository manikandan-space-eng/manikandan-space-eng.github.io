// src/components/ProjectCard.jsx
export default function ProjectCard({ title, desc, tags }) {
  return (
    <div className="card hover:shadow-soft transition-shadow">
      <h3 className="font-semibold mb-2 text-base sm:text-lg">{title}</h3>
      <p className="subtle text-sm">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((t, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: "var(--border)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
