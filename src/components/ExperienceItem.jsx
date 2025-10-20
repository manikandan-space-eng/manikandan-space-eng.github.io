export default function ExperienceItem({ org, role, children }){
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{org}</h3>
      <p className="text-muted">{role}</p>
      <ul className="list-disc ml-5 mt-3 space-y-1 text-muted">
        {children}
      </ul>
    </div>
  )
}
