import React from "react";
import Header from "../components/header/header";
import { usePageInfo } from "../hooks/usePageInfo";
import { AppRoutes } from "../App";

const Homepage = () => {
  return (
    <React.Fragment>
      {usePageInfo("homepage", window.location.hostname + AppRoutes.homepage)}
      <Header />
    </React.Fragment>
  );
};

export default Homepage;
