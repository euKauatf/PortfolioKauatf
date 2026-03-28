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
        <h2 className="flex items-center text-3xl">
          <span className="typebar"></span>
          Que tal conhecer um pouco mais sobre mim?
        </h2>

        <div className="about-me-content mt-10 flex gap-16">
          <div className="flex-2 text-md rounded-full border-img overflow-hidden">
            <img src={pic1} alt="Foto de perfil" />
          </div>
          <p className="flex-3 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem
            quidem tempora, quis, totam eveniet eaque aut praesentium sunt,
            natus odio veritatis provident minima esse cum molestias eius harum
            quibusdam beatae consequatur? Quod ipsam soluta illo sint a eos
            minus placeat facilis impedit deleniti nihil molestiae ratione
            adipisci mollitia provident, officia architecto quam corporis
            cupiditate doloremque maxime repellat nesciunt commodi sed! Aperiam
            sunt deserunt illo voluptas. Officia tempora exercitationem, optio
            tenetur quisquam soluta odio, dicta quo quae, vitae quis similique
            est ipsa id facilis. Quas recusandae dolores sit facere perspiciatis
            delectus officiis nesciunt, quos voluptatem mollitia! Quibusdam
            repellendus optio, nemo officia sed, harum praesentium quos fugit
            perspiciatis beatae iste et eveniet quasi ipsa quod aliquid.
            Officiis aliquid, doloribus rerum eveniet reiciendis aut magnam
            accusamus veniam laborum itaque sequi sunt eligendi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Error, iusto. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolor, iste.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem.
            Lorem ipsum dolor sit.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
