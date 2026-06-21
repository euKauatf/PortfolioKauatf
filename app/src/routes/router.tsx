import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/main/main";
import Pessoal from "../pages/pessoal/pessoal";
import Contato from "../pages/contato/main";
import NotFound from "../pages/NotFound";
import { useEffect } from "react";

function CurriculoRedirect() {
  useEffect(() => {
    window.location.href = "/Curriculo-Kaua.pdf";
  }, []);

  return <></>;
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pessoal" element={<Pessoal />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/curriculo" element={<CurriculoRedirect />} />
    </Routes>
  );
}

export default AppRouter;
