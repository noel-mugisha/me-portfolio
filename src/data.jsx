import belix from "./assets/noel.jpg";

export const my_data = {
  firstName: "Noel Mugisha",
  img: belix,
  surname: "Guy",
  proffession: "Fullstack > Backend developer",
  github: "noel-mugisha",
  links: {
    github: "https://github.com/noel-mugisha/",
    instagram: "https://www.instagram.com/n.0.e_.l/",
    // linkedin: "",
    twitter: "https://x.com/noelmugisha332",
  },
  contacts: {
    gmail: "noelmugisha332@gmail.com",
    phone: "+250793136798",
  },
  major_webdev_skills: [
    {
      skill: "Javascript + HTML + CSS",
      level: 100,
      icon: "vscode-icons:file-type-js",
    },
    { skill: "React", level: 97, icon: "vscode-icons:file-type-reactts" },
    {
      skill: "NodeJs + Express",
      level: 90,
      icon: "vscode-icons:file-type-node",
    },
    { skill: "Angular", level: 80, icon: "vscode-icons:file-type-angular" },
    { skill: "MongoDB", level: 80, icon: "vscode-icons:file-type-mongo" },
    { skill: "Php", level: 90, icon: "vscode-icons:file-type-php3" },
    { skill: "Sql", level: 90, icon: "vscode-icons:file-type-mysql" },
    { skill: "Django", level: 75, icon: "vscode-icons:file-type-django" },
  ],
  major_prog_skills: [
    { skill: "Python", level: 93, icon: "vscode-icons:file-type-python" },
    { skill: "Java", level: 85, icon: "vscode-icons:file-type-java" },
    { skill: "C++", level: 85, icon: "vscode-icons:file-type-cpp" },
    { skill: "C", level: 80, icon: "vscode-icons:file-type-c" },
    { skill: "Arduino", level: 85, icon: "vscode-icons:file-type-arduino" },
    { skill: "Raspberry Pi", level: 75, icon: "logos:raspberry-pi" },
  ],
  bio: (
    <span>
      Java & Spring addict. <br /> I have {new Date().getFullYear() - 2021 + 1}+ years of
      experience in software development.
      <br />
      Always Chasing perfection on every product I work on.
      <br />
      Solving real-life problems with clean elegant code.
    </span>
  ),
  interests: [
    "coding👨‍💻",
    "football⚽",
    "AI🤖",
    "music🎵",
  ],
  languages: ["English", "Kinyarwanda", "French"],
  education: [
    {
      level: "High School",
      school: "Rwanda Coding Academy",
      from: 2022,
      to: 2024,
      courses: [
        "Web User Interface",
        "Fundamentals of programming (C)",
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "mySql + postgreSql",
        "NodeJs",
        "Software Analysis and Design",
        "Ethical hacking",
        "Embedded systems",
        "Advanced networking",
        "DevOps",
        "Php",
        "Mobile development",
        "English",
        "Maths",
        "Physics",
      ],
    },
    {
      level: "Ordinary level",
      school: "Byimana School of Sciences",
      from: 2019,
      to: 2021,
      courses: [
        "ICT",
        "Maths",
        "Physics",
        "Biology",
        "Entrepreneurship",
        "Chemistry",
        "Languages",
        "Literature in English",
      ],
    },
    {
      level: "Primary School",
      school:
        "Espoir De L'Avenir Primary School",
      from: 2009,
      to: 2014,
      courses: ["Elementary science", "Maths", "Languages", "Social studies"],
    },

  ],
  techs: [
    { icon: "ri-reactjs-line", tech: "React" },
    { icon: "ri-angularjs-fill", tech: "Angular" },
    { icon: "ri-flutter-fill", tech: "Flutter" },
  ],
  projects: [
    {
      name: "CodeAMA",
      desc: "CodeAma is the best way to connect beginner coders to well experienced programmers all over the globe.",
      smallDesc: "Code Community to connect junior coders to seniors",
      tech: ["Angular"],
      gitLink: "https://codeama-frontend-five.vercel.app/",
    },
    {
      name: "SparkCinema",
      desc: "SparkCinema is a reliable streaming platform for Rwandan Movies.",
      smallDesc: "A platform for streaming Rwandan Movies",
      tech: ["React"],
      gitLink: "https://spark-cinema.vercel.app/",
    },
    {
      name: "DailyMoney",
      desc: "An online business using Tron (Trx) as a payment medium. You get 3% (daily) of your investment.",
      smallDesc: "Online business earning 3% daily of tron invested",
      tech: ["React"],
      gitLink: "https://github.com/a-belard/dailymoney",
    },
    {
      name: "CovData",
      desc: "CovData let you know and track covid 19 numbers across the world.",
      smallDesc: "Know covid 19 numbers across the world",
      tech: ["React"],
      link: "https://covdata.netlify.app/",
      gitLink: "https://gitlab.com/belix/covid_data",
    },
    {
      name: "Inst-gram",
      smallDesc: "Instagram clone built on MERN stack",
      desc: "Instagram clone built on MERN stack - MongoDB, Express, React, NodJS.",
      tech: ["React"],
      link: "https://inst-gram.herokuapp.com/",
      gitLink: "https://github.com/a-belard/instagram",
    },
  ],
};
