import { useState } from "react";
import "./main.css";
import Intro from "../../components/Intro/Intro";
import video from "../../assets/videos/window.mp4";
import Linkedin from "../../assets/images/linkedin.svg?react";
import Github from "../../assets/images/github.svg?react";
import pic1 from "../../assets/images/pic1.jpeg";
import Footer from "../../components/footer/footer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import planejai from "../../assets/images/planejaai.webp";
import kauaffe from "../../assets/images/kauaffe.webp";

function MainPage() {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem("introSeen") === "true";
  });
  // Estado para controlar a caixa marrom no clique (celular e PC)
  const [isNameActive, setIsNameActive] = useState(false);

  useEffect(() => {
    if (!introFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introFinished]);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {!introFinished && (
        <Intro
          onComplete={() => {
            sessionStorage.setItem("introSeen", "true");
            setIntroFinished(true);
          }}
        />
      )}

      <div className="container geist-mono mx-auto items-center justify-center px-6 md:px-16 lg:px-45 pt-2 pb-10 md:py-10 gap-16">
        {/* HEADER */}
        <section className="header flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-4 mt-2 md:mt-0">
          <div className="header-text flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <h1 className="text-xl md:text-2xl mb-4 header-title w-full flex flex-col items-center md:items-start">
              Olá, mundo! Eu sou
              {/* Adicionei text-center para garantir alinhamento no celular */}
              <div className="relative mt-2 inline-block max-w-full text-center md:text-left">
                <span
                  onClick={() => setIsNameActive(!isNameActive)}
                  // ATENÇÃO AQUI: Troquei 'block' por 'inline-block'
                  className={`header-title-span inline-block font-extrabold color-special text-[3.25rem] sm:text-[4rem] md:text-6xl lg:text-[5rem] leading-[1.1] px-2 ${isNameActive ? "active-bg" : ""}`}
                >
                  Kauã <br className="md:hidden" /> Fernandes
                </span>
              </div>
            </h1>

            <p className="text-base md:text-lg mb-8 md:mb-0 mt-3">
              Desenvolvedor Web, com foco em React e Typescript
            </p>

            {/* BOTÕES: Ajustados para gap-4 homogêneo para consertar o espaçamento no PC */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 w-full justify-center md:justify-start">
              <NavLink
                to="/curriculo"
                className="px-6 py-4 md:px-6 md:py-3 pt-4 md:pt-3.5 btn btn-curriculo hover:opacity-90 transition-all flex justify-center items-center font-bold text-lg md:text-base"
              >
                Currículo <span className="transition ml-2">&gt;</span>
              </NavLink>

              <div className="flex gap-4 w-full md:w-auto">
                <a
                  href="https://github.com/euKauatf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-4 md:px-6 md:py-3 group flex flex-1 justify-center items-center border-2 rounded-sm btn hover-scale-p transition-all text-lg md:text-base"
                >
                  <Github className="w-6 h-6 md:w-5 md:h-5 fill-[#452829] group-hover:fill-white transition mr-2 md:mt-1" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/eukauatf/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-4 md:px-6 md:py-3 group flex flex-1 justify-center items-center border-2 btn hover-scale-p transition-all text-lg md:text-base"
                >
                  <Linkedin className="w-6 h-6 md:w-5 md:h-5 fill-[#452829] group-hover:fill-white transition mr-2 md:mt-1" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="header-video flex justify-center items-center w-full md:w-1/2 max-w-62.5 sm:max-w-sm md:max-w-none">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg mask-[radial-gradient(ellipse_farthest-side,black_30%,transparent_105%)] w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* SOBRE MIM */}
        <section className="other-bg mt-20 md:mt-35">
          <div className="about-me-content">
            <h2 className="flex flex-col sm:flex-row items-center justify-center md:justify-start text-3xl md:text-3xl mb-10 md:mb-16 text-center md:text-left gap-2 sm:gap-0 font-bold md:font-normal">
              <span className="typebar hidden sm:block"></span>
              Que tal conhecer um pouco mais sobre mim?
            </h2>

            <div className="mural-board max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
                <div className="mural-card flex flex-col items-center justify-center text-center p-6">
                  <div className="w-48 h-48 md:w-56 md:h-56 mb-6 border-4 border-[#2c1a12] rounded-full overflow-hidden shrink-0 shadow-md">
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

                <div className="mural-card flex flex-col justify-center p-6 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#2c1a12] mb-4">
                    Olá! Eu sou o Kauã.
                  </h3>
                  <p className="geist text-[#4a3732] text-lg leading-relaxed">
                    Desde que nasci sou apaixonado por tecnologia e jogos, e
                    esse sonho de criança me trouxe até aqui no desenvolvimento
                    web. Meu divisor de águas foi o ensino médio técnico, onde a
                    paixão reacendeu e desenvolvi meu primeiro site real como
                    TCC. Agora, busco minha primeira grande oportunidade nesse
                    vasto mar dos desenvolvedores!
                  </p>
                </div>

                <div className="mural-card flex flex-col justify-center items-center md:items-start p-6 text-center md:text-left">
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

                <div className="mural-card flex flex-col justify-center overflow-hidden items-center md:items-start p-6">
                  <h4 className="font-bold text-2xl text-[#2c1a12] mb-6 flex items-center gap-3">
                    Stacks
                  </h4>

                  <div className="carousel-container relative w-full overflow-hidden mask-carousel">
                    <div className="carousel-track flex gap-3 w-max">
                      <div className="flex gap-3">
                        <span className="tag-stack text-sm md:text-base">
                          React
                        </span>
                        <span className="tag-stack text-sm md:text-base">
                          TypeScript
                        </span>
                        <span className="tag-stack text-sm md:text-base">
                          JavaScript
                        </span>
                        <span className="tag-stack text-sm md:text-base">
                          CSS
                        </span>
                        <span className="tag-stack text-sm md:text-base border-dashed bg-transparent text-[#2c1a12] border-[#2c1a12]">
                          Express (Em breve)
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="tag-stack text-sm md:text-base">
                          React
                        </span>
                        <span className="tag-stack text-sm md:text-base">
                          TypeScript
                        </span>
                        <span className="tag-stack text-sm md:text-base">
                          JavaScript
                        </span>
                        <span className="tag-stack text-sm md:text-base">
                          CSS
                        </span>
                        <span className="tag-stack text-sm md:text-base border-dashed bg-transparent text-[#2c1a12] border-[#2c1a12]">
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
        <section className="projects mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="flex flex-col sm:flex-row items-center justify-center md:justify-start text-3xl mb-12 text-center md:text-left gap-2 sm:gap-0 font-bold md:font-normal">
              <span className="typebar hidden sm:block"></span>
              Meus Projetos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PROJETO 1 */}
              <div className="project-card flex flex-col group">
                <div className="project-img-placeholder overflow-hidden">
                  <img
                    src={planejai}
                    className="w-full rounded-t h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    alt="Projeto PlanejaIA"
                  />
                </div>
                <div className="p-8 md:p-6 flex flex-col flex-1 text-center md:text-left">
                  <h3 className="text-3xl text-center md:text-xl font-bold text-[#2c1a12] mb-3">
                    Planeja.AI
                  </h3>
                  <p className="geist text-[#4a3732] mb-6 flex-1 text-center text-lg md:text-sm lg:text-base leading-relaxed">
                    Um site que faz uso da inteligência artificial para calcular
                    a melhor forma de se planejar para uma meta traçada!
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-2 mb-8 md:mb-6">
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      React
                    </span>
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      TypeScript
                    </span>
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      IA
                    </span>
                  </div>
                  <a
                    href="https://planejaai-kauatf.vercel.app/"
                    target="_blank"
                    className="mt-auto flex items-center justify-center md:justify-start gap-2 text-[#2c1a12] font-bold text-xl md:text-base hover:opacity-70 transition-opacity"
                  >
                    Ver projeto <span>&rarr;</span>
                  </a>
                </div>
              </div>

              {/* PROJETO 2 */}
              <div className="project-card flex flex-col group">
                <div className="project-img-placeholder overflow-hidden">
                  <img
                    src={kauaffe}
                    className="w-full rounded-t h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    alt="Projeto kauaffe"
                  />
                </div>
                <div className="p-8 md:p-6 flex flex-col flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-xl font-bold text-[#2c1a12] mb-3">
                    Kauaffè
                  </h3>
                  <p className="geist text-[#4a3732] mb-6 flex-1 text-lg md:text-sm lg:text-base leading-relaxed">
                    Um sistema de autoatendimento moderno que permite aos
                    clientes fazerem pedidos direto da mesa, com gestão de
                    estoque em tempo real!
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-2 mb-8 md:mb-6">
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      React
                    </span>
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      TypeScript
                    </span>
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      Firebase
                    </span>
                  </div>
                  <a
                    href="https://kauaffe.vercel.app/"
                    target="_blank"
                    className="mt-auto flex items-center justify-center md:justify-start gap-2 text-[#2c1a12] font-bold text-xl md:text-base hover:opacity-70 transition-opacity"
                  >
                    Ver projeto <span>&rarr;</span>
                  </a>
                </div>
              </div>

              {/* PROJETO 3 */}
              <div className="project-card flex flex-col group">
                <div className="project-img-placeholder overflow-hidden">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    N/A
                  </span>
                </div>
                <div className="p-8 md:p-6 flex flex-col flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-xl font-bold text-[#2c1a12] mb-3">
                    Projeto 3
                  </h3>
                  <p className="geist text-[#4a3732] mb-6 flex-1 text-lg md:text-sm lg:text-base leading-relaxed">
                    No momento, o projeto ainda não está disponível! Fique por
                    dentro das atualizações que já já irá sair, fresquinho do
                    forno!
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-2 mb-8 md:mb-6">
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      Javascript
                    </span>
                    <span className="text-base md:text-xs lg:text-sm font-bold bg-[#d29c73] text-[#2c1a12] px-3 py-1.5 rounded">
                      CSS
                    </span>
                  </div>
                  <a
                    href="#"
                    className="mt-auto flex items-center justify-center md:justify-start gap-2 text-[#2c1a12] font-bold text-xl md:text-base hover:opacity-70 transition-opacity"
                  >
                    Ver projeto <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SESSÃO DE CONTATO */}
        <section className="other-bg contact mt-20 md:mt-35 flex flex-col items-center justify-center text-center py-16">
          <div className="max-w-xl px-4">
            <h2 className="text-5xl md:text-5xl font-extrabold text-[#2c1a12] mb-6 leading-tight">
              Vamos trabalhar juntos?
            </h2>
            <p className="geist text-[#4a3732] text-xl md:text-xl leading-relaxed mb-10">
              Atualmente estou em busca da minha primeira oportunidade como
              desenvolvedor júnior ou estagiário. Se você tem um projeto em
              mente, uma vaga na sua equipe ou apenas quer dar um oi, minha
              caixa de entrada está aberta!
            </p>
            <NavLink
              to="/contato"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-[#4a3732] text-[#dab39e] text-xl font-bold rounded-md hover:bg-[#2c1a12] hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              Entrar em Contato
              <span className="text-2xl leading-none">&rarr;</span>
            </NavLink>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
