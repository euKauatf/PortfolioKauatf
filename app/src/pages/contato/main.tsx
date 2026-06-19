import { useState, useRef, useEffect } from "react";
import "./main.css";
import Footer from "../../components/footer/footer";

function Contato() {
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // ---------------------------------------------------------
  // NOVA LÓGICA DE SCROLL PARA O TEXTAREA
  // ---------------------------------------------------------
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [scrollInfo, setScrollInfo] = useState({
    canScrollUp: false,
    canScrollDown: false,
  });

  const handleScroll = () => {
    if (textareaRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = textareaRef.current;
      setScrollInfo({
        canScrollUp: scrollTop > 0,
        // Usamos Math.ceil para evitar bugs de arredondamento em telas com zoom
        canScrollDown: Math.ceil(scrollTop + clientHeight) < scrollHeight,
      });
    }
  };

  // Atualiza os indicativos sempre que a mensagem mudar de tamanho
  useEffect(() => {
    handleScroll();
  }, [formData.message]);
  // ---------------------------------------------------------

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("kauafvr1612@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Ei, qual o seu nome?";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Preciso de um email!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ops, email inválido!";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Escreva algo para mim!";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      e.currentTarget.submit();
    }
  };

  return (
    <>
      <section className="contact mt-15 mb-24 flex flex-col items-center justify-center relative">
        <div className="max-w-3xl w-full px-4 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-[#2c1a12] mb-16 flex items-center justify-center">
            <span className="typebar"></span>
            Vamos trabalhar juntos?
          </h2>

          <div className="comanda-wrapper">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-10 bg-[rgba(210,156,115,0.8)] -rotate-3 shadow-sm backdrop-blur-sm z-20"></div>

            <div className="w-full comanda-card pt-10 pb-10 px-8 md:px-12 comanda-lines">
              <form
                action="https://formspree.io/f/xkoadjlw"
                method="POST"
                className="flex flex-col gap-0 relative z-10"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col md:flex-row md:h-20">
                  {/* Input Nome */}
                  <div className="flex-1 flex flex-col h-20">
                    <label
                      className={`h-10 flex items-end pb-1 font-bold text-xs geist-mono uppercase tracking-widest pl-1 transition-colors ${errors.name ? "text-[#c63031]" : "text-[#4a3732]"}`}
                    >
                      Nome{" "}
                      {errors.name && (
                        <span className="ml-2 normal-case font-medium text-[10px] animate-pulse">
                          ({errors.name})
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sua identidade secreta"
                      className={`h-10 leading-10 bg-transparent border-none font-medium text-lg focus:outline-none focus:font-extrabold focus:text-xl focus:-translate-y-1 transition-all duration-300 ${errors.name ? "text-[#c63031] placeholder-[#c63031]/50" : "text-[#4a3732] placeholder-[#4a3732]/40 focus:text-[#1a0f0a]"}`}
                    />
                  </div>

                  {/* Input Email */}
                  <div className="flex-1 flex flex-col h-20 md:pl-6">
                    <label
                      className={`h-10 flex items-end pb-1 font-bold text-xs geist-mono uppercase tracking-widest pl-1 transition-colors ${errors.email ? "text-[#c63031]" : "text-[#4a3732]"}`}
                    >
                      Email{" "}
                      {errors.email && (
                        <span className="ml-2 normal-case font-medium text-[10px] animate-pulse">
                          ({errors.email})
                        </span>
                      )}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Prometo não enviar spam"
                      className={`h-10 leading-10 bg-transparent border-none font-medium text-lg focus:outline-none focus:font-extrabold focus:text-xl focus:-translate-y-1 transition-all duration-300 ${errors.email ? "text-[#c63031] placeholder-[#c63031]/50" : "text-[#4a3732] placeholder-[#4a3732]/40 focus:text-[#1a0f0a]"}`}
                    />
                  </div>
                </div>

                <div className="h-10 hidden md:block"></div>

                {/* Input Mensagem */}
                <div className="flex flex-col w-full relative">
                  <label
                    className={`h-10 flex items-end pb-1 font-bold text-xs geist-mono uppercase tracking-widest pl-1 transition-colors ${errors.message ? "text-[#c63031]" : "text-[#4a3732]"}`}
                  >
                    Mensagem{" "}
                    {errors.message && (
                      <span className="ml-2 normal-case font-medium text-[10px] animate-pulse">
                        ({errors.message})
                      </span>
                    )}
                  </label>

                  {/* Container relativo para posicionar os indicativos visuais */}
                  <div className="relative w-full">
                    {/* Indicativo de que tem texto pra CIMA */}
                    {scrollInfo.canScrollUp && (
                      <div className="absolute top-1 right-2 text-[#a36a42] text-xs font-bold geist-mono animate-bounce z-10 pointer-events-none bg-[#fdf8f5]/90 px-2 rounded-full shadow-sm">
                        &uarr; Rolar
                      </div>
                    )}

                    {/* Textarea com a classe customizada e onScroll ativado */}
                    <textarea
                      ref={textareaRef}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onScroll={handleScroll}
                      placeholder="Me pergunte algo ou me convide para um café :)"
                      className={`h-40 w-full leading-10 bg-transparent border-none font-medium text-lg focus:outline-none focus:font-bold focus:text-xl transition-all duration-300 resize-none overflow-y-auto comanda-scrollbar pr-2 ${errors.message ? "text-[#c63031] placeholder-[#c63031]/50" : "text-[#4a3732] placeholder-[#4a3732]/40 focus:text-[#1a0f0a]"}`}
                    ></textarea>

                    {/* Indicativo de que tem texto pra BAIXO */}
                    {scrollInfo.canScrollDown && (
                      <div className="absolute bottom-1 right-2 text-[#a36a42] text-xs font-bold geist-mono animate-bounce z-10 pointer-events-none bg-[#fdf8f5]/90 px-2 rounded-full shadow-sm">
                        &darr; Mais
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-10"></div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2 bg-[#fdf8f5]">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#4a3732] text-[#f6e4d3] font-bold text-lg hover:bg-[#2c1a12] transition-colors shadow-[4px_4px_0px_#a36a42] hover:shadow-[0px_0px_0px_#a36a42] hover:translate-y-1 hover:translate-x-1"
                  >
                    Fazer Pedido &rarr;
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-6 py-4 flex items-center justify-center gap-3 border-2 border-[#4a3732] text-[#4a3732] font-bold hover:bg-[#4a3732] hover:text-[#f6e4d3] transition-colors shadow-[4px_4px_0px_#d29c73] hover:shadow-[0px_0px_0px_#d29c73] hover:translate-y-1 hover:translate-x-1"
                    title="Copiar email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copiar Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* POPUP DE NOTIFICAÇÃO */}
        <div
          className={`fixed bottom-6 right-6 bg-[#2c1a12] text-[#f6e4d3] px-6 py-4 shadow-[4px_4px_0px_#d29c73] font-bold flex items-center gap-3 z-50 transition-all duration-500 ease-in-out ${
            copied
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-10 opacity-0 invisible"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#27c93f"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Email copiado com sucesso!
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contato;
