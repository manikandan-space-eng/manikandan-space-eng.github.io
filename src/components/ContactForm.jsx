import { useState } from "react";
export default function ContactForm(){
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e)=>{
    e.preventDefault(); setLoading(true);
    try{
      await fetch("https://formspree.io/f/xrbozvod", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ ...form, context:"Corporate portfolio contact" })
      });
      setDone(true);
    } finally { setLoading(false); }
  };

  if(done) return <div className="card text-green-300">Thank you! I’ll get back to you shortly.</div>;

  return (
    <form onSubmit={onSubmit} className="card space-y-3 max-w-xl w-full">
      <input name="name" value={form.name} onChange={handle} placeholder="Your Name" className="w-full p-3 rounded-lg bg-[rgba(255,255,255,0.06)] border" style={{borderColor:'var(--border)'}} required/>
      <input type="email" name="email" value={form.email} onChange={handle} placeholder="Email" className="w-full p-3 rounded-lg bg-[rgba(255,255,255,0.06)] border" style={{borderColor:'var(--border)'}} required/>
      <textarea name="message" value={form.message} onChange={handle} rows="4" placeholder="Message" className="w-full p-3 rounded-lg bg-[rgba(255,255,255,0.06)] border" style={{borderColor:'var(--border)'}} required/>
      <button className="btn btn-primary w-full" disabled={loading}>{loading?"Sending…":"Send Message"}</button>
    </form>
  );
}