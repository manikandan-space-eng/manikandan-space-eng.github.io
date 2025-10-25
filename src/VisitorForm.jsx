import { useState } from "react";
import App from "./App";
import { motion } from "framer-motion";

export default function VisitorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    role: "",
    company: "",
    purpose: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // ✅ Send email using your Formspree endpoint
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      localStorage.setItem("visitorInfo", JSON.stringify(form));
      setShowThankYou(true);

      // ✅ Wait for 3 seconds before showing portfolio
      setTimeout(() => setSubmitted(true), 3000);
    } catch (error) {
      alert("⚠️ Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <App />;

  // 🌟 Thank You transition screen
  if (showThankYou) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg)] text-[var(--text)] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-[var(--accent)] to-[#a78bfa]"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Thank You, {form.company || "Guest"}! 🚀
        </motion.h1>
        <p className="text-muted text-lg">
          We appreciate your interest as a {form.role || "visitor"}.  
          Loading portfolio...
        </p>
        <motion.div
          className="mt-10 w-12 h-12 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </motion.div>
    );
  }

  // 🌙 Visitor Form (Main Page)
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Soft gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent blur-3xl"></div>

      <motion.div
        className="text-center z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-[var(--accent)] to-[#a78bfa]">
          Welcome to MANIKANDAN’s Portfolio
        </h1>
        <p className="text-muted max-w-md mx-auto mb-8">
          Please share a few details before entering.  
          This helps me understand my audience better ✨
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="card w-[min(90%,420px)] space-y-5 z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="space-y-3">
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Your Role (HR, Engineer, Student...)"
            className="w-full p-3 rounded-xl bg-bg-elev border border-border focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
            required
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company / Organization"
            className="w-full p-3 rounded-xl bg-bg-elev border border-border focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
            required
          />
          <input
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
            placeholder="Purpose of visit"
            className="w-full p-3 rounded-xl bg-bg-elev border border-border focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary w-full py-3 rounded-xl font-semibold tracking-wide 
                     bg-gradient-to-r from-[var(--accent)] to-[#a78bfa] shadow-soft 
                     hover:shadow-[0_0_20px_var(--accent)] transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Enter Portfolio 🚀"}
        </motion.button>
      </motion.form>

      <footer className="text-muted text-sm mt-10 z-10">
        © {new Date().getFullYear()} MANIKANDAN P | Aerospace Engineering Portfolio
      </footer>
    </motion.div>
  );
}
