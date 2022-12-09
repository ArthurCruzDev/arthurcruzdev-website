import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContext from "./contexts/AppContext/AppContext";
import ExperiencePage from "./pages/experience/experiencePage";
import Homepage from "./pages/hoempage/homepage";
import PortifolioPage from "./pages/portifolio/portifolioPage";
import SkillsPage from "./pages/skills/skillsPage";

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
      <div className="w-screen min-h-screen bg-white dark:bg-neutral-900 flex flex-col">
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
