import React from "react";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "../../App";
import PageLayout from "../../components/pageLayout";
import styles from "./homepage.module.scss";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <PageLayout pageName="homepage" pageURL={AppRoutes.homepage}>
      <section className="px-3 py-5 flex flex-col md:max-w-3xl md:mx-auto">
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
        <div className={"mt-4 md:max-w-3xl md:mx-auto " + styles.divider}></div>
      </div>
    </PageLayout>
  );
};

export default Homepage;
