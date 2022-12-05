import React from "react";
import { AppRoutes } from "../App";
import PageLayout from "../components/pageLayout";

const Homepage = () => {
  return (
    <PageLayout pageName="homepage" pageURL={AppRoutes.homepage}>
      <h1 className="text-white">Homepage</h1>
    </PageLayout>
  );
};

export default Homepage;
