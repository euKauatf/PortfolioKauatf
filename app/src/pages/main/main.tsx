import "./main.css";
import video from "../../assets/videos/window.mp4";
import Linkedin from "../../assets/images/linkedin.svg?react";
import Github from "../../assets/images/github.svg?react";

function MainPage() {
  return (
    <div className="container mx-auto items-center justify-center px-45 py-10 flex gap-16">
      <section className="header flex items-center justify-center">
        <div className="header-text flex-1">
          <h1 className="geist-mono text-xl mb-4 header-title">
            Olá, mundo! Eu sou
            <span className="header-title-span block font-extrabold color-special">
              Kauã Fernandes
            </span>
          </h1>

          <p className="geist-mono text-md">
            Desenvolvedor Web, com foco em React e Typescript
          </p>

          <div className="mt-10 flex gap-12 geist-mono">
            <a
              href="/seu-curriculo.pdf"
              download
              className="px-4 py-2 pt-2.5 btn btn-curriculo hover:opacity-90 transition-all"
            >
              Currículo <span className="transition">&gt;</span>
            </a>

            <a
              href="https://github.com/euKauatf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 group flex border-2 rounded-sm btn hover-scale-p transition-all"
            >
              <Github className="w-4 h-4 fill-[#452829] group-hover:fill-white transition mr-2 mt-1" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eukauatf/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 group flex border-2 btn hover-scale-p transition-all"
            >
              <Linkedin className="w-4 h-4 fill-[#452829] group-hover:fill-white transition mr-2 mt-1" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="header-video flex-1 justify-center items-center">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg mask-[radial-gradient(ellipse_farthest-side,black_30%,transparent_105%)]"
          />
        </div>
      </section>
    </div>
  );
}

export default MainPage;
