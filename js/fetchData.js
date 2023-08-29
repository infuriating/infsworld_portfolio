const Tools = {
  Technologies: [
    {
      name: "HTML",
      icon: "../media/images/tools/html.png",
    },
    {
      name: "CSS",
      icon: "../media/images/tools/css.png",
    },
    {
      name: "JavaScript",
      icon: "../media/images/tools/javascript.png",
    },
    {
      name: "Typescript",
      icon: "../media/images/tools/typescript.png",
    },
    {
      name: "PHP",
      icon: "../media/images/tools/php.png",
    },
    {
      name: "Node",
      icon: "../media/images/tools/node.png",
    },
  ],
  Frameworks: [
    {
      name: "React",
      icon: "../media/images/tools/react.png",
    },
    {
      name: "Next",
      icon: "../media/images/tools/next.png",
    },
    {
      name: "Vue",
      icon: "../media/images/tools/vue.png",
    },
  ],
  Libraries: [
    {
      name: "TailwindCSS",
      icon: "../media/images/tools/tailwindcss.png",
    },
    {
      name: "Sass",
      icon: "../media/images/tools/sass.png",
    },
    {
      name: "Stripe",
      icon: "../media/images/tools/stripe.png",
    },
    {
      name: "Axios",
      icon: "../media/images/tools/axios.png",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: "../media/images/tools/mongodb.png",
    },
    {
      name: "Firebase",
      icon: "../media/images/tools/firebase.png",
    },
    {
      name: "MySQL",
      icon: "../media/images/tools/mysql.png",
    },
  ],
};

const Projects = [
  {
    name: "Tropical Boat Party",
    image: "../media/images/projects/tropicalboatparty.png",
    description:
      "Tropical Boat Party is a website that I made for my college, Grafisch Lyceum Rotterdam. For this project I worked on both the front and back-end of the site. What I've learned from this project is how to work with the Stripe API in combination with Firebase.",
    technologies: [
      {
        name: "HTML",
        icon: Tools.Technologies[0].icon,
      },
      {
        name: "CSS",
        icon: Tools.Technologies[1].icon,
      },
      {
        name: "JavaScript",
        icon: Tools.Technologies[2].icon,
      },
      {
        name: "Node",
        icon: Tools.Technologies[5].icon,
      },
      {
        name: "Firebase",
        icon: Tools.Databases[1].icon,
      },
      {
        name: "Stripe",
        icon: Tools.Libraries[2].icon,
      },
    ],
  },
  {
    name: "fear no sins",
    image: "../media/images/projects/fearnosins.png",
    description:
      "fear no sins is a multi-media agency / friend group that I'm a part of. On this website we showcase our work and give people the opportunity to contact us for any inquiries regarding video editing, graphic design or any other type of creative work.",
    technologies: [
      {
        name: "Next",
        icon: Tools.Frameworks[1].icon,
      },
      {
        name: "React",
        icon: Tools.Frameworks[0].icon,
      },
      {
        name: "TailwindCSS",
        icon: Tools.Libraries[0].icon,
      },
      {
        name: "Axios",
        icon: Tools.Libraries[3].icon,
      },
    ],
  },
];
