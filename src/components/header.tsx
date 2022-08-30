import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const backdropRoot = document.querySelector("#backdrop-root") as HTMLElement;
const overlayRoot = document.querySelector("#overlay-root") as HTMLElement;

const NavList = () => {
  const { t } = useTranslation();
  return (
    <ul className="">
      <li>
        <NavLink to="/">{t("pages.homepage.name")}</NavLink>
      </li>
      <li>
        <NavLink to="/">{t("pages.experience.name")}</NavLink>
      </li>
      <li>
        <NavLink to="/">{t("pages.skils.name")}</NavLink>
      </li>
      <li>
        <NavLink to="/">{t("pages.portifolio.name")}</NavLink>
      </li>
    </ul>
  );
};

interface SideNavProps {
  clickHandler: Function;
}

const Backdrop = (props: SideNavProps) => {
  return (
    <div
      className="w-full h-screen opacity-25 bg-black fixed top-0 left-0 z-10"
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
     p-3 z-20"
    >
      <span className="w-full flex flex-row justify-end">
        <XMarkIcon
          className="h-8 w-8 text-neutral-800 sm:hidden"
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
      <div className="hidden sm:block">
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
