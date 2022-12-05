import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export function usePageInfo(
  pageName: string,
  pageURL: string,
  mainImageURL?: string
): JSX.Element {
  const { t } = useTranslation();
  const title = "Arthur Cruz Dev - " + t(`pages.${pageName}.name`);
  const description = t(`pages.${pageName}.description`);
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary"></meta>
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      mainImageURL ? <meta property="og:image" content={mainImageURL} /> : null
    </Helmet>
  );
}
