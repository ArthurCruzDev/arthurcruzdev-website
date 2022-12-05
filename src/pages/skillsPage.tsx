import React from "react";
import { AppRoutes } from "../App";
import Header from "../components/header";
import { usePageInfo } from "../hooks/usePageInfo";
function SkillsPage() {
  return (
    <React.Fragment>
      {usePageInfo("skills", window.location.hostname + AppRoutes.skills)}
      <Header />
    </React.Fragment>
  );
}

export default SkillsPage;
