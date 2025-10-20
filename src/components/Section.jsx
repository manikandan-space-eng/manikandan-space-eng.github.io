export default function Section({ id, title, children }){
  return (
    <section id={id} className="section container" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  )
}
