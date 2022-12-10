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
    <div className="min-w-full min-h-screen flex flex-col justify-start items-center">
      {usePageInfo(props.pageName, window.location.hostname + props.pageURL)}
      <Header />
      <div className="w-full max-w-7xl ">{props.children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
