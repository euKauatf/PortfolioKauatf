import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/main/main";
import Pessoal from "../pages/pessoal/pessoal";
import Contato from "../pages/contato/main";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pessoal" element={<Pessoal />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default AppRouter;
