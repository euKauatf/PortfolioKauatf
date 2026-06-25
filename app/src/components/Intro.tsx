import { useState, useEffect } from "react";
import "@/styles/pages/Main.css";

export default function DoorIntro({ onComplete }: { onComplete: () => void }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Bloqueio de scroll agressivo (funciona em iOS)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  const handleSignClick = () => {
    if (isFlipped) return;

    setIsFlipped(true);

    setTimeout(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setIsHidden(true);
        onComplete();
      }, 800);
    }, 1000);
  };

  if (isHidden) return null;

  return (
    // Colocamos o onClick e o cursor-pointer aqui, na tela inteira!
    <div
      onClick={handleSignClick}
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#1a0f0a]/90 backdrop-blur-md transition-all duration-1000 ease-in-out cursor-pointer ${
        isFadingOut
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* O container não precisa mais do onClick */}
      <div className="sign-container pointer-events-none">
        <div className="sign-string"></div>

        <div className={`sign-flipper ${isFlipped ? "flipped" : ""}`}>
          <div className="sign-face sign-front">
            <span className="text-3xl font-extrabold tracking-widest uppercase">
              Fechado
            </span>
            <span className="text-sm mt-1 font-bold">
              Clique em qualquer lugar
            </span>
          </div>

          <div className="sign-face sign-back">
            <span className="text-3xl font-extrabold tracking-widest uppercase">
              Aberto
            </span>
            <span className="text-sm mt-1 font-bold">Seja bem-vindo!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
