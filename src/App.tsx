import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JsxElement } from "typescript";
import AppContext from "./contexts/AppContext/AppContext";
import ExperiencePage from "./pages/experiencePage";
import Homepage from "./pages/homepage";
import PortifolioPage from "./pages/portifolioPage";
import SkillsPage from "./pages/skillsPage";

export const AppRoutes = {
  homepage: "/",
  experience: "/experience",
  skills: "/skills",
  portifolio: "/portifolio",
};

function App() {
  const appState = useContext(AppContext);
  return (
    <section className={`${appState.theme}`}>
      <div className="w-screen h-screen bg-white dark:bg-neutral-900 ">
        <Routes>
          <Route path={AppRoutes.homepage} element={<Homepage />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/homepage" element={<Navigate to="/" replace />} />
          <Route path={AppRoutes.experience} element={<ExperiencePage />} />
          <Route path={AppRoutes.skills} element={<SkillsPage />} />
          <Route path={AppRoutes.portifolio} element={<PortifolioPage />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
