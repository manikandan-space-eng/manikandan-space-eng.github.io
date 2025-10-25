import { useState } from "react";
import App from "./App";

export default function VisitorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    role: "",
    company: "",
    purpose: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xrbozvod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: form.role,
          company: form.company,
          purpose: form.purpose,
        }),
      });
      localStorage.setItem("visitorInfo", JSON.stringify(form));
      setSubmitted(true);
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <App />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-4">Welcome to MANIKANDAN’s Portfolio</h1>
      <p className="text-muted mb-6">
        Please tell us a bit about yourself before entering.
      </p>

      <form
        onSubmit={handleSubmit}
        className="card w-[min(90%,400px)] space-y-4"
      >
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Your Role (HR, Engineer, Student...)"
          className="w-full p-2 rounded-lg bg-bg-elev border border-border"
          required
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company / Organization"
          className="w-full p-2 rounded-lg bg-bg-elev border border-border"
          required
        />
        <input
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          placeholder="Purpose of visit"
          className="w-full p-2 rounded-lg bg-bg-elev border border-border"
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Enter Portfolio"}
        </button>
      </form>
    </div>
  );
}
