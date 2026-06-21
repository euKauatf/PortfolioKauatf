import { useState, useEffect } from "react";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Trava a rolagem da página e esconde a barra de scroll enquanto a Intro estiver na tela!
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Função de limpeza: Devolve a rolagem quando a Intro for desmontada/fechada
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSignClick = () => {
    // Evita duplo clique
    if (isFlipped) return;

    // 1. Gira a placa
    setIsFlipped(true);

    // 2. Espera a placa girar (600ms) + um pequeno respiro (400ms) para ler
    setTimeout(() => {
      // 3. Começa a dissolver a tela preta
      setIsFadingOut(true);

      // 4. Espera a tela sumir (800ms) para remover o componente e liberar o scroll
      setTimeout(() => {
        setIsHidden(true);
        onComplete();
      }, 800);
    }, 1000);
  };

  // Se já acabou, não renderiza nada
  if (isHidden) return null;

  return (
    // Overlay escuro com fundo embaçado (backdrop-blur)
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a0f0a]/80 backdrop-blur-sm transition-opacity duration-700 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Placa com a perspectiva 3D */}
      <div className="sign-container" onClick={handleSignClick}>
        <div className="sign-string"></div>

        <div className={`sign-flipper ${isFlipped ? "flipped" : ""}`}>
          {/* FRENTE: Fechado */}
          <div className="sign-face sign-front">
            <span className="text-3xl font-extrabold tracking-widest uppercase">
              Fechado
            </span>
            <span className="text-sm mt-1 opacity-90 font-medium">
              Clique para abrir
            </span>
          </div>

          {/* VERSO: Aberto */}
          <div className="sign-face sign-back">
            <span className="text-3xl font-extrabold tracking-widest uppercase">
              Aberto
            </span>
            <span className="text-sm mt-1 opacity-90 font-medium">
              Seja bem-vindo!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
