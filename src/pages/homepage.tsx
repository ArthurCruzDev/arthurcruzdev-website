import React from "react";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "../App";
import PageLayout from "../components/pageLayout";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <PageLayout pageName="homepage" pageURL={AppRoutes.homepage}>
      <section className="px-3 py-5">
        <span className="text-sky-600 text-base font-extrabold">
          Hello World,{" "}
        </span>
        <h2 className="text-stone-200">
          {t("pages.homepage.content.mainTitle")}
        </h2>
        <h3 className="mt-4 text-stone-400">
          {t("pages.homepage.content.mainSubTitle")}
        </h3>
        <p></p>
      </section>
    </PageLayout>
  );
};

export default Homepage;
