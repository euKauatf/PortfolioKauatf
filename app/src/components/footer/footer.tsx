import "./footer.css";

function Footer() {
  return (
    <footer className="w-full bg-[#2c1a12] py-8 mt-16 border-t-4 border-[#4a3732]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 geist">
        <div className="text-center md:text-left">
          {/* Adicionado text-[#dab39e] para forçar a cor clara */}
          <p className="text-sm text-[#dab39e] opacity-90 mb-1">
            Projetado e desenvolvido por{" "}
            <b className="text-[#f6e4d3]">Kauã Fernandes</b>.
          </p>
          <p className="text-xs text-[#dab39e] opacity-60">
            © 2026. Construído com React, Tailwind CSS e Vite.
          </p>
        </div>

        {/* Links rápidos no rodapé */}
        <div className="flex gap-6 text-sm font-bold">
          <a
            href="https://github.com/euKauatf"
            target="_blank"
            rel="noreferrer"
            /* Adicionado text-[#dab39e] aqui também */
            className="text-[#dab39e] hover:text-[#f6e4d3] hover:-translate-y-0.5 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eukauatf/"
            target="_blank"
            rel="noreferrer"
            className="text-[#dab39e] hover:text-[#f6e4d3] hover:-translate-y-0.5 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
