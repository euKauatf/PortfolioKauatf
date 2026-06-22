import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/main/main";
import Pessoal from "../pages/pessoal/pessoal";
import Contato from "../pages/contato/main";
import NotFound from "../pages/NotFound";

// Componente que executa o redirecionamento corretamente
function RedirecionarCurriculo() {
  useEffect(() => {
    window.location.replace("/Curriculo-Kaua.pdf");
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#1a0f0a] text-[#dab39e] font-bold">
      Abrindo currículo...
    </div>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pessoal" element={<Pessoal />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/curriculo" element={<RedirecionarCurriculo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
