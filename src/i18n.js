import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        summary:
          "Former Product Owner who has made the switch to Full Stack development",
        intro: "Hi, I'm David. Nice to meet you!",
        profile:
          "I'm a junior full stack developer with a strong strategic mindset who develops web applications to solve challenging problems. When I’m not at the computer, I’m usually running or doing some kind of exercise and exploring Paris.",
        scroll: "Scroll to learn a little more....",
        aboutMe: "About me",
        experience:
          "Originally from Scotland, i have recently moved to Paris to be with my partner. Over the last few years having worked for a large financial institution as a Product Owner, I found myself spending more time trying to understand the software solutions that were implemented.",
        interest:
          "I became greatly interested in how full stack web applications were delivered and I took it upon myself to take time to improve my programming skills learning React and completing Le Wagon in France as I knew I wanted to move into software development.",
        attributes:
          "I have a solid understanding of the attributes needed to work on strategic initiatives in an agile manner with a growing skill set in:",
        currentWork:
          "I’m currently working on building full stack web applications in the above languages. Other languages that i am experienced with are:",
        relationships:
          "I'm an experienced communicator with senior stakeholders with a proven ability to develop strong relationships and work collaboratively and pragmatically across different cultures.",
        project: "Projects",
        linkedin: "See my Linkedin here",
        cv: "See my CV here",
        github: "See my Github here",
        contact: "Contact me here",
        languages: "Languages",
        native: "Native",
        click: "Click to view",
        made: "Made with",
      },
    },
    fr: {
      translation: {
        summary:
          "Ancien Chef de Produit qui est passé au développement Full Stack",
        intro: "Bonjour, je m'appelle David. Enchanté de vous rencontrer !",
        profile:
          "Je suis un développeur junior avec une mentalité plus stratégique qui développe des applications web pour résoudre des problèmes. Lorsque je ne suis pas devant l'ordinateur, je suis généralement en train de courir, de faire de l'exercice ou d'explorer Paris.",
        scroll: "Faites défiler l'écran pour en savoir plus....",
        aboutMe: "A propos de moi",
        experience:
          "Originaire d'Écosse, j'ai récemment déménagé à Paris pour m'installer avec mon partenaire. Au cours des dernières années, j'ai travaillé pour une grande institution financière en tant que Product Owner, et j'ai passé plus de temps à essayer de comprendre les solutions logicielles qui ont été mises en œuvre.",
        interest:
          "J'ai commencé à m'intéresser de près à la manière dont les applications web à pile complète étaient livrées et j'ai pris sur moi deprendre le temps d'améliorer mes compétences en programmation en apprenant React et et en complétant Le Wagon en France, car je savais que je voulais m'orienter vers le développement dans le développement de logiciels.",
        attributes:
          "J'ai une solide compréhension des attributs nécessaires pour travailler sur des initiatives stratégique de manière agile avec un ensemble de compétences croissantes en.. :",
        currentWork:
          "Je travaille actuellement à la construction d'applications web complètes dans les langages ci-dessus. Les autres langages avec lesquels j'ai de l'expérience sont:",
        relationships:
          "Je suis un communicateur expérimenté avec les parties prenantes de haut niveau avec une capacité avérée à développer des relations solides et à travailler en collaboration et de manière pragmatique à travers différentes cultures.",
        project: "Projets",
        linkedin: "Voir mon Linkedin ici",
        cv: "Voir mon CV ici",
        github: "Voir mon Github ici",
        contact: "Contactez-moi ici",
        languages: "Langues",
        native: "Natif",
        click: "En savoir plus",
        made: "Fabriqué avec",
      },
    },
  },
});
