import React from "react";
import { AppRoutes } from "../../App";
import PageLayout from "../../components/pageLayout";
function SkillsPage() {
  return <PageLayout pageName="skills" pageURL={AppRoutes.skills}></PageLayout>;
}

export default SkillsPage;
