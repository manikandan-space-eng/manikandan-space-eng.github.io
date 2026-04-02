// src/components/Section.jsx
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-12 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6" style={{ color: "#c9d3ff" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
