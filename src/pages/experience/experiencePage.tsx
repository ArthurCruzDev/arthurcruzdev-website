import React, { useContext, useEffect, useTransition } from "react";
import { AppRoutes } from "../../App";
import PageLayout from "../../components/pageLayout";
import dayjs, { Dayjs } from "dayjs"; // ES 2015
import AppContext from "../../contexts/AppContext/AppContext";
import { useTranslation } from "react-i18next";
import componentStyles from "./experiencePage.module.scss";
import "dayjs/locale/en";
import "dayjs/locale/pt-br";
import petLogo from "../../assets/images/petsi.png";
import selfEmpoyedPic from "../../assets/images/self-employed.png";

const logosMap: Map<string, string> = new Map([
  [
    "pumpkin",
    "https://media-exp1.licdn.com/dms/image/C4D0BAQGTh9ww6InlYg/company-logo_100_100/0/1659614823631?e=1678924800&v=beta&t=_Fa4W8TpsZHJX2dLDiiDmQvO3l_xx11MbFqiGOUHkzA",
  ],
  [
    "sankhya",
    "https://media-exp1.licdn.com/dms/image/C4E0BAQH5_1d7qNrPKg/company-logo_100_100/0/1612624933036?e=1678924800&v=beta&t=GYw0TTv76IzO4aJT811TQgH6uzgAVhF3IIFSM6LDcDE",
  ],
  ["pet", petLogo],
  ["autonomo", selfEmpoyedPic],
]);

const ExperienceUnits: ExperienceUnitInfo[] = [
  {
    company: "pumpkin",
    job: "softwareArchitect",
    startTime: dayjs("2022-09-01"),
    description: "pumpkinSoftwareArchitect",
    logo: logosMap.get("pumpkin"),
    projects: [],
  },
  {
    company: "pumpkin",
    job: "techLeader",
    startTime: dayjs("2022-08-01"),
    endTime: dayjs("2021-08-01"),
    description: "pumpkinTechLeader",
    logo: logosMap.get("pumpkin"),
    projects: [],
  },
  {
    company: "sankhya",
    job: "squadLeader",
    startTime: dayjs("2022-08-01"),
    endTime: dayjs("2020-02-01"),
    description: "sankhyaSquadLeader",
    logo: logosMap.get("sankhya"),
    projects: [],
  },
  {
    company: "sankhya",
    job: "webDeveloperAnalyst",
    startTime: dayjs("2020-02-01"),
    endTime: dayjs("2018-02-01"),
    description: "sankhyaWebDeveloperAnalyst",
    logo: logosMap.get("sankhya"),
    projects: [],
  },
  {
    company: "pet",
    job: "petScholarshipStudent",
    startTime: dayjs("2015-10-01"),
    endTime: dayjs("2018-02-01"),
    description: "petScholarshipStudent",
    logo: logosMap.get("pet"),
    projects: [],
  },
  {
    company: "selfEmployed",
    job: "selfEmployedWebDesigner",
    startTime: dayjs("2011-01-01"),
    endTime: dayjs("2015-09-01"),
    description: "selfEmployedWebDesigner",
    logo: logosMap.get("autonomo"),
    projects: [],
  },
];

type ExperienceUnitProjectInfo = {
  name: string;
  description: string;
  technologies: string[];
  images: string[];
  repository: string;
};

type ExperienceUnitInfo = {
  company: string;
  job: string;
  startTime: Dayjs;
  endTime?: Dayjs;
  description: string;
  logo?: string;
  projects: ExperienceUnitProjectInfo[];
};

function ExperienceUnit(props: ExperienceUnitInfo): JSX.Element {
  const appContext = useContext(AppContext);
  return (
    <div
      className={
        "w-full flex flex-row flex-nowrap px-4 " +
        componentStyles.experienceUnit
      }
    >
      <div className="w-20 h-auto flex flex-col relative items-center justify-center">
        <span className="w-px h-full bg-background absolute left-8"></span>
        <img
          src={props.logo}
          className="w-16 h-16 object-contain bg-sky-800 rounded-full border-background border-2 z-10"
          alt="logo"
        />
        <div className="z-10 bg-neutral-900 py-2">
          <p className="text-center text-white text-xs first-letter:uppercase">
            {props.startTime
              .locale(appContext.lang === "pt-BR" ? "pt-br" : "en")
              .format("MMMM YYYY")}
          </p>
          {props.endTime ? (
            <>
              <p className="my-px text-white text-xs text-center">
                {appContext.lang === "pt-BR" ? "a" : "to"}
              </p>
              <p className="text-center text-white text-xs first-letter:uppercase">
                {props.endTime
                  .locale(appContext.lang === "pt-BR" ? "pt-br" : "en")
                  .format("MMMM YYYY")}
              </p>
            </>
          ) : (
            <>
              <p className="my-px text-white text-xs text-center">-</p>
              <p className="text-center text-white text-xs first-letter:uppercase">
                {appContext.lang === "pt-BR" ? "Atual" : "Current"}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="w-full ml-4 py-4 ">
        <h4 className="text-background">{props.job}</h4>
        <h5 className="text-stone-500">{props.company}</h5>
        <p className="text-stone-200 text-sm text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
}

function Spacer(): JSX.Element {
  return (
    <div className="w-full flex flex-row flex-nowrap px-4">
      <div className="w-20 h-auto flex flex-col relative items-center justify-center">
        <span className="w-px h-full bg-background absolute left-8"></span>
      </div>
      <div className="w-full ml-4 py-4 "></div>
    </div>
  );
}

function ExperiencePage() {
  const { t } = useTranslation();
  return (
    <PageLayout pageName="experience" pageURL={AppRoutes.experience}>
      <section className="w-full flex flex-col items-center">
        <Spacer />
        <>
          {ExperienceUnits.map((experienceUnit, i) => {
            return (
              <ExperienceUnit
                key={i}
                company={t(
                  "pages.experience.content.companies." + experienceUnit.company
                )}
                job={t("pages.experience.content.jobs." + experienceUnit.job)}
                startTime={experienceUnit.startTime}
                endTime={experienceUnit.endTime}
                description={t(
                  "pages.experience.content.experienceDescriptions." +
                    experienceUnit.description
                )}
                logo={experienceUnit.logo}
                projects={experienceUnit.projects}
              />
            );
          })}
        </>
        <Spacer />
      </section>
    </PageLayout>
  );
}

export default ExperiencePage;
