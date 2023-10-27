import { useTranslation } from "react-i18next";

const TechnologyList = (props) => {
  const { t } = useTranslation();

  return (
    <ul className="project-languages">
      <h5>{t("made")}</h5>
      {props.languages.map((language, index) => {
        return (
          <li className="rounded-full" key={index}>
            <img
              src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${language.toLowerCase()}/${language.toLowerCase()}-original${
                language.toLowerCase() === "rails" ? "-wordmark" : ""
              }.svg`}
              alt={`${language}`}
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologyList;
