import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./styles/layouts/global.css";

// Pages
import Main from "./pages/main/main";

// Components
import Navbar from "./components/navbar/navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Main />
  </StrictMode>,
);
