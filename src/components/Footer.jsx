export default function Footer(){
  return (
    <footer className="container py-10 text-center text-sm subtle">
      <hr className="hr mb-6" />
      © {new Date().getFullYear()} Manikandan P · Built with React + Tailwind · Hosted on GitHub Pages
    </footer>
  );
}