import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const SESSION_KEY = "door-intro-seen";

type Phase = "playing" | "darkening" | "revealing" | "done";

interface DoorIntroProps {
  /** Caminho do vídeo (.mp4/.webm) ou gif da porta abrindo */
  src: string;
  /**
   * Usado só quando `src` é um gif/imagem (sem evento de "acabou").
   * Tempo, em ms, que a animação fica em tela antes de escurecer.
   */
  fallbackDurationMs?: number;
  children: ReactNode;
}

/**
 * Intro temática de cafeteria: toca a animação da porta abrindo,
 * escurece a tela e revela o conteúdo principal por baixo.
 * Só aparece uma vez por sessão e respeita prefers-reduced-motion.
 */
export function DoorIntro({
  src,
  fallbackDurationMs = 2800,
  children,
}: DoorIntroProps) {
  const reducedMotion = useReducedMotion();
  const isVideo = /\.(mp4|webm)$/i.test(src);

  const alreadySeen =
    typeof window !== "undefined" &&
    sessionStorage.getItem(SESSION_KEY) === "true";

  const [phase, setPhase] = useState<Phase>(
    reducedMotion || alreadySeen ? "done" : "playing",
  );

  const skipButtonRef = useRef<HTMLButtonElement>(null);

  // Trava o scroll da página enquanto a intro estiver rodando
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Foca o botão de pular quando a intro aparece (acessibilidade via teclado)
  useEffect(() => {
    if (phase === "playing") {
      skipButtonRef.current?.focus();
    }
  }, [phase]);

  // Permite pular com a tecla Esc
  useEffect(() => {
    if (phase === "done") return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPhase("revealing");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase]);

  // Fallback de duração pra quando o asset é gif/imagem (sem onEnded)
  useEffect(() => {
    if (phase !== "playing" || isVideo) return;
    const timer = setTimeout(() => setPhase("darkening"), fallbackDurationMs);
    return () => clearTimeout(timer);
  }, [phase, isVideo, fallbackDurationMs]);

  // Mantém a tela escura por um instante antes de revelar o conteúdo
  useEffect(() => {
    if (phase !== "darkening") return;
    const timer = setTimeout(() => setPhase("revealing"), 400);
    return () => clearTimeout(timer);
  }, [phase]);

  function finishIntro() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setPhase("done");
  }

  if (phase === "done") {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Conteúdo principal já fica montado por baixo, pronto pra aparecer */}
      <div aria-hidden="true">{children}</div>

      <div
        className={[
          "fixed inset-0 z-50 flex items-center justify-center",
          phase === "playing" ? "bg-transparent" : "bg-black",
          phase === "revealing"
            ? "opacity-0 pointer-events-none"
            : "opacity-100",
          "transition-opacity duration-700 ease-in-out",
        ].join(" ")}
        onTransitionEnd={() => {
          if (phase === "revealing") finishIntro();
        }}
        role="presentation"
      >
        {phase === "playing" &&
          (isVideo ? (
            <video
              src={src}
              autoPlay
              muted
              playsInline
              onEnded={() => setPhase("darkening")}
              className="h-full w-full object-cover"
            />
          ) : (
            <img src={src} alt="" className="h-full w-full object-cover" />
          ))}

        {phase === "playing" && (
          <button
            ref={skipButtonRef}
            type="button"
            onClick={() => setPhase("revealing")}
            className="geist-mono absolute bottom-8 right-8 rounded-sm border-2 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            Pular intro &gt;
          </button>
        )}
      </div>
    </div>
  );
}
