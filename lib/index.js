// const intro = "Hi I'm Ryan, and I'm experienced Web Developer adept in all stages of web development. \nKnowledgeable in user interface, testing and debugging \nprocesses. Equipped with a diverse and promising skill-set, and proficient in an assortment of \ntechnologies, and able to effectively self-manage during independent\n projects, as well as collaborate\n in a team setting"
const info = [{
  data: 'Ryan Park',
  logo: 'bx bx-user about__information-icon'
},
{
  data: '7788675265',
  logo: 'bx bx-phone about__information-icon'
}, {
  data: 'parkryan0128@gmail.com',
  logo: 'bx bx-envelope about__information-icon'
}]

const career = [{
  line: 'More than 10',
  line2: 'Projects Completed',
  logo: 'bx bx-briefcase about__information-icon'
}, {
  line: 'Proficient In Both',
  line2: 'Frontend and Backend',
  logo: 'bx bx-code about__information-icon'
}, {
  line: 'Proficient in Both',
  line2: 'SQL and NoSQL',
  logo: 'bx bx-data about__information-icon'
}]

const items = [{
  name: "Lighthouse Labs Web Development",
  src: "./assets/certificate/Lighthouse.pdf",
  logo: "https://www.lighthouselabs.ca/assets/lighthouselabs-logo-d5df6d383f7466b06a64de9561fd537493502eafe78bbf3bcd3de82884e5dd85.png"
}, {
  name: "AWS EC2 Master Class",
  src: "./assets/certificate/MasterClass.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "AWS Serverless APIs (Lambda, DynamoDB)",
  src: "./assets/certificate/Serverless.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "CSS Animations Transitions and Transform",
  src: "./assets/certificate/Animation.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "CSS Complete Guide",
  src: "./assets/certificate/Css.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "Modern React & Redux",
  src: "./assets/certificate/Modern.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "Senior Developer Roadmap",
  src: "./assets/certificate/Senior.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "Typescript",
  src: "./assets/certificate/Typescript.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
}, {
  name: "Typescript & React",
  src: "./assets/certificate/TypeReact.pdf",
  logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
},]

const educate = [{
  period: '2022- Current',
  institution: 'Langara College',
  field: 'Computer Science',
  degree: 'Associate of Science'
}, {
  period: '2019',
  institution: 'Lighthouse Labs',
  field: 'Web Development',
  degree: 'Diploma'
}]

// const services = [{
//   name: 'Web Design',
//   logo: 'bx bx-paint services__icon'
// }, {
//   name: 'UI/UX',
//   logo: 'bx bx-pen services__icon'
// }, {
//   name: 'Frontend Development',
//   logo: 'bx bx-code services__icon'
// }, {
//   name: 'Backend Development',
//   logo: 'bx bx-server services__icon'
// }, {
//   name: 'Database Development',
//   logo: 'bx bx-data services__icon'
// }, {
//   name: 'Mobile App Development',
//   logo: 'bx bx-mobile services__icon'
// }]

const skills = [{
  title: "Frontend",
  content: [{
    name: "HTML/CSS",
    percentage: 80,
    className: '__80'
  },
  {
    name: "Javascript",
    percentage: 90,
    className: '__90'
  },
  {
    name: "React",
    percentage: 90,
    className: '__90'
  }
  ]
},
{
  title: "Backend",
  content: [{
    name: "PHP",
    percentage: 70,
    className: '__70'
  },
  {
    name: "Node JS & Express",
    percentage: 90,
    className: '__90'
  },
  {
    name: "Firebase",
    percentage: 70,
    className: '__70'
  }
  ]
},
{
  title: "Database",
  content: [{
    name: "PostgreSQL",
    percentage: 90,
    className: '__90'
  },
  {
    name: "DynamoDB",
    percentage: 60,
    className: '__60'
  },
  {
    name: "Firestore",
    percentage: 60,
    className: '__60'
  }
  ]
},
{
  title: "Cloud & Deployment",
  content: [{
    name: "AWS (Lambda, EC2)",
    percentage: 85,
    className: '__85'
  },
  {
    name: "AWS (Cloudfront, S3)",
    percentage: 85,
    className: '__85'
  },
  {
    name: "Heroku",
    percentage: 80,
    className: '__80'
  }
  ]
},
{
  title: "Mobile",
  content: [{
    name: "React Native",
    percentage: 70,
    className: '__70'
  },
  ]
},
{
  title: "Design",
  content: [{
    name: "Figma",
    percentage: 80,
    className: '__80'
  },
  ]
}]

const works = [{
  image_link: "assets/img/JSXEditor.png",
  github_link: "https://github.com/RyanPark0128/JSX-Text-Editor",
  demo_link: "https://d3c56mnx8ywo7d.cloudfront.net",
  name: 'JSX Text Editor'
}, {
  image_link: "assets/img/OnlineStore.png",
  github_link: "https://github.com/RyanPark0128/online-store",
  demo_link: "https://d5sxbi23481ec.cloudfront.net",
  name: 'Online Store'
}, {
  image_link: "assets/img/tetris.png",
  github_link: 'https://github.com/RyanPark0128/tetris-react',
  demo_link: "https://ryanpark0128.github.io/tetris-react/",
  name: 'React Tetris'
}, {
  image_link: "assets/img/netflix.png",
  github_link: "https://github.com/RyanPark0128/Netflix_Clone",
  demo_link: "https://netflix-clone-9065c.web.app/",
  name: 'Netflix Clone'
}]

export { info, career, items, educate, skills, works }