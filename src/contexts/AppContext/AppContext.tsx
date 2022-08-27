import React, { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

export type AppContextType = {
  lang: string;
  theme: "light" | "dark";
  setLang: (lang: string) => void;
  setTheme: (theme: "light" | "dark") => void;
};

const initialContext: AppContextType = {
  theme: "dark",
  lang: "pt-BR",
  setLang: () => console.warn("no app language provided"),
  setTheme: () => console.warn("no theme provided"),
};

const AppContext = createContext<AppContextType>(initialContext);

export const AppContextProvider = (props: any) => {
  const { i18n } = useTranslation();
  const [appLang, setAppLang] = useState(initialContext.lang);
  const [appTheme, setAppTheme] = useState(initialContext.theme);

  const changeAppLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setAppLang(newLanguage);
  };

  return (
    <AppContext.Provider
      value={{
        lang: appLang,
        theme: appTheme,
        setTheme: setAppTheme,
        setLang: changeAppLanguage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
