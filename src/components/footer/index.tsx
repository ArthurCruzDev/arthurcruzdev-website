import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import styles from "./index.module.scss";
export const Footer = () => {
  return (
    <div className="bg-background w-100 h-28 mt-auto flex flex-col p-3 justify-end items-center">
      <div className="flex flex-row flex-nowrap justify-between w-36 h-8 ">
        <a
          href="https://github.com/ArthurCruzDev"
          target={"_blank"}
          rel="noreferrer"
          className="w-8"
        >
          <VscGithubAlt className={styles.icon}></VscGithubAlt>
        </a>
        <a
          href="https://www.linkedin.com/in/arthur-rodrigues-cruz/"
          target={"_blank"}
          rel="noreferrer"
          className="w-8"
        >
          <SlSocialLinkedin className={styles.icon}></SlSocialLinkedin>
        </a>
        <a href="mailto:developer.arthur.cruz@gmail.com" className="w-8">
          <TfiEmail className={styles.icon}></TfiEmail>
        </a>
      </div>
      <span className="text-center mt-4 text-xs font-semibold">
        Copyright&#169; Arthur Rodrigues Cruz 2022
      </span>
    </div>
  );
};

export default Footer;
