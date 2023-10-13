/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohamed Aziz Elheni",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohamed Aziz Elheni Portfolio",
    type: "website",
    url: "https://mohamedazizelheni.github.io/AzizPortfolio",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Aziz Elheni",
  logo_name: "Mohamedazizelheni",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1hyNGr1bRk_9cCg5UobFvyM5JpXb6nvY6/view?usp=sharing ",
  portfolio_repository: "https://github.com/mohamedazizelheni/AzizPortfolio",
  githubProfile: "https://github.com/mohamedazizelheni",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mohamedazizelheni",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/med-aziz-elheni/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:mohamedaziz.elheni@esprit.tn",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/medaziz.elheni.9",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/med_aziz_elheni/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux and Angular ",

        "⚡ Creating application backend using Node.js, Express, and Spring Boot",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "ESPRIT : Ecole Sup Privée d'Ingénierie et de Technologies",
      subtitle: "B.Tech. in Software Engineering",
      logo_path: "logooesprit.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for the University's Project Ball —an event celebrating academic excellence and the top-tier projects.",
      ],
      website_link: "http://esprit.tn",
    },
    {
      title: "École pluridisciplinaire internationale",
      subtitle: "Preparatory Cycle",
      logo_path: "logoepi.png",
      alt_name: "Indiana University Bloomington",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have gained a diverse foundation in Math and Technical Sciences through the integrated ICT preparatory cycle.",
        "⚡ Apart from this, I gained key skills in Computer Science and Digital Technologies within an engineering framework.  ",
        "⚡ Cycle honed analytical, problem-solving, and teamwork skills for engineering.",
      ],
      website_link: "https://www.episup.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: " ",
      logo_path: "freecodecampi.png",
      certificate_link:
        "https://freecodecamp.org/certification/Mohamed_Aziz_Elheni/javascript-algorithms-and-data-structures ",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Club Involvement  ",
  description:
    "Discover my journey of innovation and collaboration – from startups to established companies, from hands-on internships to active club participation. This section unveils the diverse experiences that have fueled my growth and passion.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web developer",
          company: "DUNDILL COMPANY.",
          company_url: "https://dundill.tn/",
          logo_path: "logodundill.png",
          duration: "June 2023 ",
          location: "Sousse, Tunisia",
          description:
            "Actively contributed as a web developer, gaining hands-on exposure to React.js, JavaScript, and Full Stack Development. Collaborated within cross-functional teams to deliver impactful solutions that harmonize user experience with backend capabilities.",
          color: "#0879bf",
        },
        {
          title: "Receptionist",
          company: "KARAWEN HOTEL.",
          logo_path: "karawen.png",
          duration: "May 2018 - Sep 2018",
          location: "Sousse, Tunisia",
          description:
            "As a hotel receptionist, I've gained expertise in delivering exceptional customer service, engaging with clients in a friendly and efficient manner. I've also played a pivotal role in managing daily reception operations, ensuring each interaction contributes to a positive and memorable experience for the establishment's clientele.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web developer Intern",
          company: "DUNDILL COMPANY.",
          company_url: "https://dundill.tn/",
          logo_path: "logodundill.png",
          duration: "june 2023 - Sep 2023",
          location: "Sousse, Tunisia",
          description:
            "I collaborated with the Front-End Development team, gaining practical expertise in React.js and JavaScript, and enhancing my skills in Front-End Development through hands-on experience on ongoing projects.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Club Involvement",
      experiences: [
        {
          title: "IEEE Member",
          company: "IEEE",
          company_url: "https://ieee.tn/",
          logo_path: "ieee.png",
          duration: "Sep 2021 - April 2023",
          location: "Ariana, Tunisia",
          description:
            "Participated in knowledge-sharing sessions, workshops, and events, enriching my understanding of technology trends and advancements in the field.",
          color: "#4285F4",
        },
        {
          title: "JCI Member",
          company: "JCI",
          company_url: "https://jcihammamsousse.org/",
          logo_path: "jci.png",
          duration: "Aug 2016 - May 2020",
          location: "Sousse, Tunisia",
          description:
            "Engaged in impactful community service initiatives and personal development activities, contributing to positive social change and honing leadership skills.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I craft digital experiences that blend creativity with innovation. Explore my projects of web applications where data becomes art, and AI adds a touch of magic to every project.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animeaziz.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, React, Angular and Symfony.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Khzema , Sousse , Tunisia - 4071",

    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/JFcfbhCpCb1UZiPs9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
