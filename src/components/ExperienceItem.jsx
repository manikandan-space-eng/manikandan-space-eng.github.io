export default function ExperienceItem({ role, org, time, children }){
  return (
    <div className="card">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">{role} <span className="subtle">· {org}</span></h3>
        {time && <span className="text-xs subtle">{time}</span>}
      </div>
      <ul className="list-disc ml-5 mt-3 space-y-1 subtle">{children}</ul>
    </div>
  );
}