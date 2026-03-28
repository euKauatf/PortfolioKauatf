import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./styles/layouts/global.css";

// Components
import Navbar from "./components/navbar/navbar";

// Router
import AppRouter from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
