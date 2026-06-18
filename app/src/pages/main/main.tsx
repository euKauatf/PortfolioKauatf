import "./main.css";
import video from "../../assets/videos/window.mp4";
import Linkedin from "../../assets/images/linkedin.svg?react";
import Github from "../../assets/images/github.svg?react";
// import Coffee from "../../assets/images/coffee.svg?react";
import pic1 from "../../assets/images/pic1.jpeg";

function MainPage() {
  return (
    <div className="container geist-mono mx-auto items-center justify-center px-45 py-10 gap-16">
      {/* HEADER */}
      <section className="header flex items-center justify-center">
        <div className="header-text flex-1">
          <h1 className="text-xl mb-4 header-title">
            Olá, mundo! Eu sou
            <span className="header-title-span block font-extrabold color-special">
              Kauã Fernandes
            </span>
          </h1>

          <p className="text-md">
            Desenvolvedor Web, com foco em React e Typescript
          </p>

          {/* Botões para fins profissionais */}
          <div className="mt-10 flex gap-12">
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

        {/* A ideia é fazer uma janela que se mescle ao fundo, dando uma sensação de profundidade numa parede de cafeteria */}
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

      {/* SOBRE MIM (ESTILO MURAL DE AVISOS) */}
      <section className="about-me mt-35">
        <div className="about-me-content">
          <h2 className="flex items-center text-3xl mb-16">
            <span className="typebar"></span>
            Que tal conhecer um pouco mais sobre mim?
          </h2>

          {/* PLACA DE MADEIRA (Contêiner Principal) */}
          <div className="mural-board max-w-5xl mx-auto">
            {/* GRID 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* A1: Foto */}
              <div className="mural-card flex flex-col items-center justify-center text-center">
                <div className="w-56 h-56 mb-6 border-4 border-[#2c1a12] rounded-full overflow-hidden shrink-0 shadow-md">
                  <img
                    src={pic1}
                    alt="Kauã"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="geist font-bold text-[#2c1a12] text-xl">
                  Sim, este sou eu!
                </p>
              </div>

              {/* B1: Resumo */}
              <div className="mural-card flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#2c1a12] mb-4">
                  Olá! Eu sou o Kauã.
                </h3>
                <p className="geist text-[#4a3732] text-lg leading-relaxed">
                  Desde que nasci sou apaixonado por tecnologia e jogos, e esse
                  sonho de criança me trouxe até aqui no desenvolvimento web.
                  Meu divisor de águas foi o ensino médio técnico, onde a paixão
                  reacendeu e desenvolvi meu primeiro site real como TCC. Agora,
                  busco minha primeira grande oportunidade nesse vasto mar dos
                  desenvolvedores!
                </p>
              </div>

              {/* A2: Formação */}
              <div className="mural-card flex flex-col justify-center">
                <h4 className="font-bold text-2xl text-[#2c1a12] mb-6 flex items-center gap-3">
                  Formação
                </h4>
                <ul className="space-y-5">
                  <li className="geist text-[#4a3732] text-lg leading-snug">
                    Técnico em Informática <br />
                    <b className="text-[#2c1a12]">IFRJ</b>
                  </li>
                  <li className="geist text-[#4a3732] text-lg leading-snug">
                    Ciência da Computação <br />
                    <b className="text-[#2c1a12]">UFF</b> (Início em 2026)
                  </li>
                </ul>
              </div>

              {/* B2: Stacks */}
              <div className="mural-card flex flex-col justify-center overflow-hidden">
                <h4 className="font-bold text-2xl text-[#2c1a12] mb-6 flex items-center gap-3">
                  Stacks
                </h4>

                {/* Contêiner com a máscara de esmaecimento */}
                <div className="carousel-container relative w-full overflow-hidden mask-carousel">
                  {/* Trilha que se move */}
                  <div className="carousel-track flex gap-3 w-max">
                    {/* GRUPO 1 */}
                    <div className="flex gap-3">
                      <span className="tag-stack">React</span>
                      <span className="tag-stack">TypeScript</span>
                      <span className="tag-stack">JavaScript</span>
                      <span className="tag-stack">CSS</span>
                      <span className="tag-stack">Tailwind</span>
                      <span className="tag-stack border-dashed bg-transparent text-[#2c1a12] border-[#2c1a12]">
                        Express (Em breve)
                      </span>
                    </div>

                    {/* GRUPO 2 (Cópia exata para o loop infinito) */}
                    <div className="flex gap-3">
                      <span className="tag-stack">React</span>
                      <span className="tag-stack">TypeScript</span>
                      <span className="tag-stack">JavaScript</span>
                      <span className="tag-stack">CSS</span>
                      <span className="tag-stack">Tailwind</span>
                      <span className="tag-stack border-dashed bg-transparent text-[#2c1a12] border-[#2c1a12]">
                        Express (Em breve)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEUS PROJETOS */}
      <section className="projects mt-35">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="flex items-center text-3xl mb-12">
            <span className="typebar"></span>
            Meus Projetos
          </h2>

          {/* Grid de Projetos (3 colunas em telas grandes, 1 no celular) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PROJETO 1 (Placeholder) */}
            <div className="project-card flex flex-col group">
              {/* Espaço da Imagem do Projeto */}
              <div className="project-img-placeholder overflow-hidden">
                {/* Aqui entrará a tag <img src={...} /> no futuro */}
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  Icone
                </span>
              </div>

              {/* Conteúdo do Projeto */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#2c1a12] mb-2">
                  Nome do Projeto 1
                </h3>
                <p className="geist text-[#4a3732] mb-6 flex-1 text-sm leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                {/* Tags das Tecnologias Usadas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-bold bg-[#d29c73] text-[#2c1a12] px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs font-bold bg-[#d29c73] text-[#2c1a12] px-2 py-1 rounded">
                    TypeScript
                  </span>
                </div>

                {/* Link/Botão */}
                <a
                  href="#"
                  className="mt-auto flex items-center gap-2 text-[#2c1a12] font-bold hover:opacity-70 transition-opacity"
                >
                  Ver projeto <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* PROJETO 2 (Placeholder) */}
            <div className="project-card flex flex-col group">
              <div className="project-img-placeholder overflow-hidden">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  Icone
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#2c1a12] mb-2">
                  Nome do Projeto 2
                </h3>
                <p className="geist text-[#4a3732] mb-6 flex-1 text-sm leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-bold bg-[#d29c73] text-[#2c1a12] px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs font-bold bg-[#d29c73] text-[#2c1a12] px-2 py-1 rounded">
                    Express
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-auto flex items-center gap-2 text-[#2c1a12] font-bold hover:opacity-70 transition-opacity"
                >
                  Ver projeto <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* PROJETO 3 (Placeholder) */}
            <div className="project-card flex flex-col group">
              <div className="project-img-placeholder overflow-hidden">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  Icone
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#2c1a12] mb-2">
                  Nome do Projeto 3
                </h3>
                <p className="geist text-[#4a3732] mb-6 flex-1 text-sm leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-bold bg-[#d29c73] text-[#2c1a12] px-2 py-1 rounded">
                    Javascript
                  </span>
                  <span className="text-xs font-bold bg-[#d29c73] text-[#2c1a12] px-2 py-1 rounded">
                    CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-auto flex items-center gap-2 text-[#2c1a12] font-bold hover:opacity-70 transition-opacity"
                >
                  Ver projeto <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
