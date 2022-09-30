import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { NavLink, useMatch } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AppRoutes } from "../../App";
import styles from "./header.module.scss";

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
}

const Backdrop = (props: SideNavProps) => {
  return (
    <div
      className="w-full h-screen opacity-25 bg-black fixed top-0 left-0 z-10 md:hidden"
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
      className="fixed right-0 top-0 w-9/12 h-full bg-sky-600 flex flex-col justify-start items-center
     py-3 z-20 md:hidden"
    >
      <span className="w-full flex flex-row justify-end sm:hidden">
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

  const menuClickHandler = () => {
    setShowSideNav(true);
  };

  return (
    <nav className="flex flex-row justify-end items-center p-3 h-14 bg-sky-600">
      {showSideNav && (
        <React.Fragment>
          {createPortal(
            <Backdrop clickHandler={() => setShowSideNav(false)} />,
            backdropRoot
          )}
          {createPortal(
            <SideNav clickHandler={() => setShowSideNav(false)} />,
            overlayRoot
          )}
        </React.Fragment>
      )}
      <div className="hidden sm:block md:w-full">
        <NavList></NavList>
      </div>
      <Bars4Icon
        className="h-8 w-8 text-neutral-800 sm:hidden"
        onClick={menuClickHandler}
      ></Bars4Icon>
    </nav>
  );
};

export default Header;
