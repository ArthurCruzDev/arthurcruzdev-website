import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContext from "./contexts/AppContext/AppContext";
import Homepage from "./pages/homepage";

function App() {
  const appState = useContext(AppContext);
  return (
    <section className={`${appState.theme}`}>
      <div className="w-screen h-screen bg-white dark:bg-neutral-900 ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/homepage" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
