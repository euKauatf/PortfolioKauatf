import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DoorIntro } from "./components/Intro/DoorIntro";
import doorVideo from "./assets/videos/door-opening.mp4";

// Styles
import "./styles/layouts/global.css";

// Components
import Navbar from "./components/navbar/navbar";

// Router
import AppRouter from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DoorIntro src={doorVideo}>
        <Navbar />
        <AppRouter />
      </DoorIntro>
    </BrowserRouter>
  </StrictMode>,
);
