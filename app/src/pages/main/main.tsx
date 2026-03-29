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

      {/* SOBRE MIM */}
      <section className="about-me mt-35">
        <div>
          <h2 className="flex items-center text-3xl">
            <span className="typebar"></span>
            Que tal conhecer um pouco mais sobre mim?
          </h2>

          <div className="about-me-content mt-10 flex gap-16">
            <div className="flex-2 text-md relative rounded-full border-img overflow-hidden">
              <img src={pic1} alt="Foto de perfil" />
            </div>
            <div className="flex-3 geist text-lg">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olá! Eu sou o
                Kauã e estou tentando a sorte nesse vasto mar dos
                desenvolvedores. No entanto, o caso já é antigo: Desde que nasci
                sou apaixonado por jogos e meu sonho era publicar o meu proprio!
                Em 2019 eu tive meu primeiro contato com a programação, mas
                acabei achando muito difícil e deixei ela de lado, até que, em
                2023, ingressei no{" "}
                <b className="font-semibold color-special-green">IFRJ</b> como
                futuro{" "}
                <b className="font-semibold color-special-green">
                  técnico de informática
                </b>
                .
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O ensino médio
                técnico foi algo muito importante pra mim, pois aquela chama
                apagada voltou a queimar em meu peito. Desde então, fui traçando
                meus gostos e, ano passado, decidi focar no desenvolvimento web.
                Desenvolvi, durante meus últimos 2 períodos no técnico, um
                website como Trabalho de Conclusão de Curso como primeira
                experiência de fato, mas ainda era algo muito simples, tendo
                servido como aprendizado nessa jornada.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hoje, aos 18
                anos, venho buscando ampliar o meu conhecimento em{" "}
                <b className="font-semibold color-special-green">
                  React, Typescript, Javascript, CSS e (ainda sem início)
                  Express.
                </b>{" "}
                Ingressei, no início de 2026,{" "}
                <b className="font-semibold color-special-green">na UFF</b> e,
                desde então,{" "}
                <b className="font-semibold color-special-green">
                  curso Ciência da Computação
                </b>{" "}
                lá. O que era um sonho bobo de criança, agora se torna uma
                realidade alternativa e experiência única!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
