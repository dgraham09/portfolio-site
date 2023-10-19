const TechnologyList = (props) => {
  console.log(props.languages);
  return (
    <ul className="project-languages">
      <h5>Built with:</h5>
      {props.languages.map((language) => {
        return (
          <li className="rounded-full">
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
