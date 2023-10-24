import tailwind from "../../assets/tailwind.png";

const LanguagesList = () => {
  return (
    <p>
      I’m currently working on building full stack web applications in the above
      languages. Other languages that i am experienced with are:
      <br></br>
      <br></br>
      <div class="flex flex-row languages-list-container">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          class="language"
        ></img>
        <img
          src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
          class="language"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
          class="language"
        ></img>
        <img src={tailwind} class="language"></img>
      </div>
    </p>
  );
};

export default LanguagesList;
