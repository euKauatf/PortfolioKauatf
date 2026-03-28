import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/main/main";
import Pessoal from "../pages/pessoal/pessoal";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pessoal" element={<Pessoal />} />
    </Routes>
  );
}

export default AppRouter;
