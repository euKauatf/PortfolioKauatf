import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 mt-15 mb-20 relative">
      <h2 className="text-4xl font-bold text-[#2c1a12] mb-12 flex items-center justify-center text-center">
        Ops! Você se perdeu?
      </h2>

      {/* MURAL DE MADEIRA BASE */}
      {/* max-w-4xl para dar espaço para as comandas no fundo respirarem */}
      <div className="mural-board max-w-4xl w-full relative flex justify-center items-center py-16 px-4 overflow-hidden md:overflow-visible shadow-2xl">
        {/* ========================================== */}
        {/* DECORAÇÕES DE FUNDO (Comandas espalhadas)    */}
        {/* ========================================== */}

        {/* 1. Esquerda Superior */}
        <div className="absolute top-8 left-4 md:left-12 w-20 h-28 bg-[#fdf8f5] rotate-[-15deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0 flex flex-col items-center pt-4 px-2">
          <div className="absolute -top-2 w-8 h-3 bg-[#d29c73]/60 rotate-[10deg]"></div>
          <div className="w-full h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[80%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[60%] h-1 bg-[#4a3732]/10 rounded-full"></div>
        </div>

        {/* 2. Esquerda Meio */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:left-4 w-16 h-20 bg-[#e6d3c3] rotate-[12deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0 flex flex-col items-center pt-3 px-2">
          <div className="w-[90%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[70%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
        </div>

        {/* 3. Esquerda Inferior */}
        <div className="absolute bottom-12 left-8 md:left-20 w-24 h-24 bg-[#fdf8f5] rotate-[-25deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0 flex flex-col items-center pt-4 px-3">
          <div className="w-[90%] h-1.5 bg-[#4a3732]/10 rounded-full mb-2.5"></div>
          <div className="w-[85%] h-1.5 bg-[#4a3732]/10 rounded-full mb-2.5"></div>
          <div className="w-[50%] h-1.5 bg-[#4a3732]/10 rounded-full"></div>
        </div>

        {/* 4. Direita Superior */}
        <div className="absolute top-6 right-6 md:right-16 w-16 h-24 bg-[rgba(246,228,211,0.9)] rotate-[20deg] shadow-sm border border-[#2c1a12]/5 rounded-sm z-0 flex flex-col items-center pt-3 px-2">
          <div className="absolute -top-2 w-8 h-3 bg-[#d29c73]/60 rotate-[-5deg]"></div>
          <div className="w-[100%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[70%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
        </div>

        {/* 5. Direita Meio */}
        <div className="absolute top-[45%] -right-2 md:right-6 w-20 h-20 bg-[#fdf8f5] rotate-[-10deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0 flex flex-col items-center pt-4 px-3">
          <div className="w-[80%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[90%] h-1 bg-[#4a3732]/10 rounded-full"></div>
        </div>

        {/* 6. Direita Inferior */}
        <div className="absolute bottom-10 right-4 md:right-14 w-20 h-32 bg-[#e6d3c3] rotate-[15deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0 flex flex-col items-center pt-4 px-2">
          <div className="w-[90%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[100%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[60%] h-1 bg-[#4a3732]/10 rounded-full mb-2"></div>
          <div className="w-[80%] h-1 bg-[#4a3732]/10 rounded-full"></div>
        </div>

        {/* 7. Topo Centro Esquerda (Escondida atrás da principal) */}
        <div className="absolute top-3 left-[30%] w-14 h-16 bg-[#e6d3c3] rotate-[-5deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0"></div>

        {/* 8. Topo Centro Direita (Escondida atrás da principal) */}
        <div className="absolute top-2 right-[25%] w-16 h-16 bg-[#fdf8f5] rotate-[8deg] shadow-md border border-[#2c1a12]/10 rounded-sm z-0"></div>

        {/* ========================================== */}
        {/* COMANDA PRINCIPAL 404                        */}
        {/* ========================================== */}

        <div className="comanda-wrapper relative z-10 w-full max-w-lg">
          {/* Fita Adesiva */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-10 bg-[rgba(210,156,115,0.8)] rotate-[3deg] shadow-sm backdrop-blur-sm z-20"></div>

          <div className="w-full comanda-card pt-12 pb-12 px-6 md:px-12 comanda-lines flex flex-col items-center text-center border border-[#2c1a12]/10">
            {/* ADESIVO COM O EMOJI */}
            <div className="w-28 h-28 mb-8 bg-[#fdf8f5] rounded-full shadow-[2px_4px_12px_rgba(44,26,18,0.15)] flex items-center justify-center border-2 border-[#dab39e]/50 relative rotate-[-6deg] z-10">
              {/* Emoji desbotado em escala de cinza */}
              <span className="text-6xl grayscale opacity-30 select-none pb-2">
                🍃
              </span>

              {/* Reflexo no plástico do adesivo */}
              <div className="absolute top-3 left-4 w-6 h-2 bg-white/60 rounded-full rotate-[-45deg]"></div>

              {/* NOVA ETIQUETA #404 */}
              {/* Parece um código de produto/preço pendurado no adesivo */}
              <div className="absolute -bottom-2 -right-4 bg-[#4a3732] text-[#f6e4d3] px-3 py-1 rounded-md text-sm font-black tracking-widest rotate-[15deg] shadow-[2px_2px_0px_#2c1a12] border-2 border-[#fdf8f5] geist-mono z-20">
                404
              </div>
            </div>

            <h3 className="text-3xl font-bold text-[#2c1a12] mb-0 leading-[40px]">
              Página não encontrada
            </h3>

            <p className="geist text-[#4a3732] text-lg font-medium leading-[40px] mb-8">
              Parece que o vento levou esta folha embora ou o seu pedido nunca
              foi anotado.
            </p>

            {/* Botão de Voltar */}
            <Link
              to="/"
              className="mt-2 px-8 py-4 bg-[#4a3732] text-[#f6e4d3] font-bold text-lg hover:bg-[#2c1a12] transition-colors shadow-[4px_4px_0px_#a36a42] hover:shadow-[0px_0px_0px_#a36a42] hover:translate-y-1 hover:translate-x-1 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span className="text-2xl leading-none">&larr;</span> Voltar ao
              Início
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
