import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import AppContext from "./contexts/AppContext/AppContext";

function App() {
  const { t } = useTranslation();
  const appState = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("under.construction.title")}</p>
        <p
          onClick={() =>
            appState.lang === "pt-BR"
              ? appState.setLang("en-US")
              : appState.setLang("pt-BR")
          }
        >
          CLICK ME
        </p>
      </header>
    </div>
  );
}

export default App;
