export default function ProjectCard({ title, desc, tags=[] }){
  return (
    <article className="card">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted mt-1">{desc}</p>
      <ul className="flex gap-2 mt-3 flex-wrap">
        {tags.map((t,i)=>(<li key={i} className="badge">{t}</li>))}
      </ul>
    </article>
  )
}
