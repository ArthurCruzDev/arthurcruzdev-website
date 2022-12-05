import React from "react";
import { AppRoutes } from "../App";
import Header from "../components/header/header";
import { usePageInfo } from "../hooks/usePageInfo";

function ExperiencePage() {
  return (
    <React.Fragment>
      {usePageInfo(
        "experience",
        window.location.hostname + AppRoutes.experience
      )}
      <Header />
    </React.Fragment>
  );
}

export default ExperiencePage;
