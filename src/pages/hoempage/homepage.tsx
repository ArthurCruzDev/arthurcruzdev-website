import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import PageLayout from "../../components/pageLayout";
import styles from "./homepage.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";

const Homepage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <PageLayout pageName="homepage" pageURL={AppRoutes.homepage}>
      <section className="px-3 py-5 flex flex-col w-full">
        <div
          className={
            "text-sky-600 text-base font-extrabold py-1 flex flex-row align-baseline "
          }
        >
          Hello World,
          <div className={"h-6 w-2 " + styles.backgroundAnimated}></div>
        </div>
        <h2 className="text-stone-200 mt-1 text-left">
          {t("pages.homepage.content.mainTitle")}
        </h2>
        <h3 className="mt-4 text-stone-400 text-left">
          {t("pages.homepage.content.mainSubTitle")}
        </h3>
        <p className="mt-8 text-stone-300 font-light text-justify text-sm leading-6 md:max-w-xl">
          {t("pages.homepage.content.mainShortText")}
        </p>
      </section>
      <div className={"mx-3"}>
        <div className={"mt-4 w-full " + styles.divider}></div>
      </div>
      <section className="px-3 flex flex-col w-full flex-nowrap items-center mt-8 ">
        <h2 className="text-center">
          {t("pages.homepage.content.wannaKnowJobText")}
        </h2>
        <h5 className="text-stone-400 mt-4 md:mt-2 text-center">
          {t("pages.homepage.content.wannaKnowJobSubText")}
        </h5>
        <div className="hidden md:flex flex-col items-center w-full mt-3">
          <span className="w-0.5 h-8 bg-background"></span>
          <span className="w-2/4 h-0.5 bg-background"></span>
          <span className="w-2/4 flex flex-row justify-between">
            <span className="w-0.5 h-8 bg-background"></span>
            <span className="w-0.5 h-8 bg-background"></span>
          </span>
        </div>
        <div className="flex flex-col mb-4 mt-2 md:mt-0 md:w-3/4 lg:w-2/3 md:flex-row md:justify-between">
          <div className="flex items-center leading-none">
            <span className="flex flex-col justify-end w-4 h-14 md:hidden">
              <span className="bg-background h-1/2 w-0.5 "></span>
              <span className="bg-background h-0.5 w-3 "></span>
              <span className="bg-background h-1/2 w-0.5 "></span>
            </span>
            <h3
              className="md:p-1 hover:bg-slate-100 hover:text-neutral-800 leading-none"
              onClick={() => {
                navigate(AppRoutes.experience);
              }}
            >
              <strong className="text-background">GOTO</strong>
              {" " + t("pages.experience.name") + ";"}
            </h3>
          </div>

          <div className="flex items-center ">
            <span className="flex flex-col justify-start w-4 h-14 md:hidden leading-none">
              <span className="bg-background h-1/2 w-0.5 "></span>
              <span className="bg-background h-0.5 w-3 "></span>
            </span>
            <h3
              className="md:p-1 hover:bg-slate-100 hover:text-neutral-800 leading-none"
              onClick={() => {
                navigate(AppRoutes.portifolio);
              }}
            >
              <strong className="text-background">GOTO</strong>
              {" " + t("pages.portifolio.name") + ";"}
            </h3>
          </div>
        </div>
        <div className={"mx-3 w-full"}>
          <div className={"mt-4 w-full " + styles.divider}></div>
        </div>
      </section>
      <section className="px-3 mt-8 flex flex-col flex-nowrap items-center w-full">
        <h2 className="text-center">
          {t("pages.homepage.content.skillsSectionTitle")}
        </h2>
        <h5 className="text-stone-400 mt-4 md:mt-2 text-center max-w-xl">
          {t("pages.homepage.content.skillsSectionSubtitle")}
        </h5>
        <div className="flex flex-col items-center justify-center w-full mt-4 mb-10">
          <AiOutlineArrowDown size={"96px"} className="text-background" />
          <h3
            className="md:p-1 hover:bg-slate-100 hover:text-neutral-800 leading-none mt-2"
            onClick={() => {
              navigate(AppRoutes.skills);
            }}
          >
            <strong className="text-background">GOTO</strong>
            {" " + t("pages.skills.name") + ";"}
          </h3>
        </div>
      </section>
    </PageLayout>
  );
};

export default Homepage;
