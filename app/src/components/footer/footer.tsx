import "./footer.css";

function Footer() {
  return (
    <footer className="footer-class w-full bg-[#2c1a12f3] py-8 mt-16 border-t-4 border-[#4a3732]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 geist">
        <div className="text-center md:text-left">
          <p className="text-sm opacity-90 mb-1">
            Projetado e desenvolvido por <b>Kauã Fernandes</b>.
          </p>
          <p className="text-xs opacity-60">
            © 2026. Construído com React, Tailwind CSS e Vite.
          </p>
        </div>

        {/* A div dos links também força a cor clara */}
        <div className="flex gap-6 text-sm font-bold">
          <a
            href="https://github.com/euKauatf"
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-0.5 hover:scale-105 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eukauatf/"
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-0.5 hover:scale-105 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
