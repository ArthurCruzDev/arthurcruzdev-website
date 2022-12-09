import React from "react";
import { AppRoutes } from "../../App";
import PageLayout from "../../components/pageLayout";

function PortifolioPage() {
  return (
    <PageLayout
      pageName="portifolio"
      pageURL={AppRoutes.portifolio}
    ></PageLayout>
  );
}

export default PortifolioPage;
