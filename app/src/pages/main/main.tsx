import video from "../../assets/videos/window.mp4";
import "./main.css";

function MainPage() {
  return (
    <div className="container mx-auto items-center justify-center px-45 py-10 flex gap-16">
      <section className="header flex items-center justify-center">
        <div className="header-text flex-1">
          <h1 className="geist-mono text-xl mb-4 header-title">
            Olá, mundo! Eu sou
            <span className="block font-extrabold color-special text-7xl">
              Kauã Fernandes
            </span>
          </h1>

          <p className="geist-mono text-md">
            Desenvolvedor Web, com foco em React e Typescript
          </p>

          <div className="mt-10 flex gap-4 geist-mono">
            <a
              href="/seu-curriculo.pdf"
              download
              className="px-6 py-2 btn btn-curriculo hover:opacity-90 transition-all"
            >
              Currículo
            </a>

            <a
              href="https://github.com/euKauatf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border-2 rounded-sm btn transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eukauatf/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border-2 btn transition-all"
            >
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
