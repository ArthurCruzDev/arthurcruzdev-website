import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import { AppContext, initialContext } from './contexts/AppContext/AppContext';

function App() {

  const { t, i18n } = useTranslation();
  const [appLang, setAppLang] = useState(initialContext.lang);
  const [appTheme, setAppTheme] = useState(initialContext.theme);

  const changeAppLanguage = (newLanguage : string) => {
    i18n.changeLanguage(newLanguage);
    setAppLang(newLanguage);
  }

  return (
    <AppContext.Provider
      value={{
        lang: appLang,
        theme: appTheme,
        setLang: changeAppLanguage,
        setTheme: setAppTheme
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {t("under.construction.title")}
          </p>
          <p onClick={()=>appLang === "pt-BR" ? changeAppLanguage("en-US") : changeAppLanguage("pt-BR")}>CLICK ME</p>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
