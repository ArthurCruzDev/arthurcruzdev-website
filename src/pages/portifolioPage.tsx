import React from "react";
import { AppRoutes } from "../App";
import Header from "../components/header/header";
import { usePageInfo } from "../hooks/usePageInfo";

function PortifolioPage() {
  return (
    <React.Fragment>
      {usePageInfo("portifolio", window.location.hostname + AppRoutes.skills)}
      <Header />
    </React.Fragment>
  );
}

export default PortifolioPage;
