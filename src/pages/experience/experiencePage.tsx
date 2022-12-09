import React from "react";
import { AppRoutes } from "../../App";
import PageLayout from "../../components/pageLayout";

function ExperiencePage() {
  return (
    <PageLayout
      pageName="experience"
      pageURL={AppRoutes.experience}
    ></PageLayout>
  );
}

export default ExperiencePage;
