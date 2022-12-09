import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { NavLink, useMatch } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AppRoutes } from "../../App";
import styles from "./index.module.scss";
import AppContext from "../../contexts/AppContext/AppContext";

const backdropRoot = document.querySelector("#backdrop-root") as HTMLElement;
const overlayRoot = document.querySelector("#overlay-root") as HTMLElement;

interface NavListLinkPropsInterface {
  to: string;
  translationName: string;
}

const NavListLink = (props: NavListLinkPropsInterface) => {
  const { t } = useTranslation();

  return (
    <li
      className={
        " w-full h-8 flex flex-row justify-center items-center hover:bg-slate-800 md:w-auto md:px-2 " +
        (useMatch(props.to) ? "bg-slate-800" : "bg-transparent")
      }
    >
      <NavLink
        className={({ isActive }) => {
          if (isActive) {
            return "w-full text-slate-200";
          } else {
            return "w-full hover:text-slate-200 ";
          }
        }}
        to={props.to}
      >
        {t(props.translationName)}
      </NavLink>
    </li>
  );
};

const NavList = () => {
  return (
    <ul className="w-full text-center md:flex md:gap-3">
      <NavListLink
        to={AppRoutes.homepage}
        translationName="pages.homepage.name"
      />
      <NavListLink
        to={AppRoutes.experience}
        translationName="pages.experience.name"
      />
      <NavListLink to={AppRoutes.skills} translationName="pages.skills.name" />
      <NavListLink
        to={AppRoutes.portifolio}
        translationName="pages.portifolio.name"
      />
    </ul>
  );
};

interface SideNavProps {
  clickHandler: Function;
  isNavOpen: boolean;
}

const Backdrop = (props: SideNavProps) => {
  const [usedOnce, setUsedOnce] = useState<boolean>(false);
  useEffect(() => {
    if (props.isNavOpen) {
      setUsedOnce(true);
    }
  }, [props.isNavOpen]);
  return (
    <div
      className={
        "w-full h-screen bg-black fixed top-0 left-0 md:hidden " +
        styles.backDrop +
        " " +
        (props.isNavOpen
          ? styles.backDropActive
          : usedOnce
          ? styles.backDropUnactive
          : "")
      }
      onClick={() => props.clickHandler()}
    ></div>
  );
};

const SideNav = (props: SideNavProps) => {
  const closeSideNavHandler = () => {
    props.clickHandler();
  };

  return (
    <nav
      className={
        "fixed top-0 h-full bg-background flex flex-col justify-start items-center py-3 z-50 md:hidden " +
        styles.navBarContainer +
        (props.isNavOpen ? " " + styles.isNavOpen : "")
      }
    >
      <span className="w-full flex flex-row justify-end mb-3 md:hidden">
        <XMarkIcon
          className="h-8 w-8 mr-3 text-neutral-800 "
          onClick={closeSideNavHandler}
        ></XMarkIcon>
      </span>
      <NavList></NavList>
    </nav>
  );
};

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const appState = useContext(AppContext);

  const menuClickHandler = () => {
    setShowSideNav(true);
  };

  return (
    <nav className="w-full flex flex-row justify-center items-center p-3 h-14 bg-sky-600">
      <div className="w-full flex flex-row justify-end md:justify-between md:max-w-7xl">
        {
          <React.Fragment>
            {createPortal(
              <Backdrop
                clickHandler={() => setShowSideNav(false)}
                isNavOpen={showSideNav}
              />,
              backdropRoot
            )}
            {createPortal(
              <SideNav
                clickHandler={() => setShowSideNav(false)}
                isNavOpen={showSideNav}
              />,
              overlayRoot
            )}
          </React.Fragment>
        }
        <div className="hidden md:block md:w-full">
          <NavList></NavList>
        </div>
        {
          <span
            className={
              "fi w-8 h-8 mr-4 " +
              (appState.lang === "pt-BR" ? "fi-br" : "fi-us")
            }
            onClick={() =>
              appState.setLang(appState.lang === "pt-BR" ? "en-US" : "pt-BR")
            }
          ></span>
        }
        <Bars4Icon
          className="h-8 w-8 text-neutral-800 md:hidden"
          onClick={menuClickHandler}
        ></Bars4Icon>
      </div>
    </nav>
  );
};

export default Header;
