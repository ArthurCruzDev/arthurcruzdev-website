import React, {useState, useEffect, createContext, FC, useContext} from "react";

export type AppContextType = {
    lang: string;
    theme: "light" | "dark";
    setLang: (lang: string) => void;
    setTheme: (theme: "light" | "dark") => void;
  }

export const initialContext: AppContextType = {
    theme: "dark",
    lang: "pt-BR",
    setLang: () => console.warn("no app language provided"),
    setTheme: () => console.warn("no theme provided"),
}


export const AppContext = createContext<AppContextType>(initialContext);
export const useAppContext = () => useContext(AppContext);


