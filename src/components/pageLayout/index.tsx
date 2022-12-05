import { AppRoutes } from "../../App";
import { usePageInfo } from "../../hooks/usePageInfo";
import Footer from "../footer";
import Header from "../header";

export interface PageLayoutProperties {
  pageName: string;
  pageURL: string;
  pageMainImageURL?: string;
  children?: JSX.Element | JSX.Element[];
}

const PageLayout = (props: PageLayoutProperties): JSX.Element => {
  return (
    <>
      {usePageInfo(props.pageName, window.location.hostname + props.pageURL)}
      <Header />
      <div className="w-100">{props.children}</div>
      <Footer />
    </>
  );
};

export default PageLayout;
