import noel from "./assets/noel.jpg";
import thechapters from "./assets/thechapters.png";
import pms from "./assets/pms.png";
import springCertImg from "./assets/certificates/images/spring.png";
import backendCertImg from "./assets/certificates/images/backend.png";
import frontendCertImg from "./assets/certificates/images/frontend.png";
import gitCertImg from "./assets/certificates/images/git.png";


export const my_data = {
  firstName: "Noel Mugisha",
  img: noel,
  surname: "Guy",
  proffession: "Fullstack > Backend developer",
  github: "noel-mugisha",
  links: {
    github: "https://github.com/noel-mugisha",
    instagram: "https://www.instagram.com/n.0.e_.l/",
    // linkedin: "",
    twitter: "https://x.com/noelmugisha332",
  },
  contacts: {
    gmail: "noelmugisha332@gmail.com",
    phone: "+250793136798",
  },
  major_webdev_skills: [
    { skill: "Java", level: 99, icon: "vscode-icons:file-type-java" },
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
    {
      skill: "Javascript + HTML + CSS",
      level: 95,
      icon: "vscode-icons:file-type-js",
    },
    {
      skill: "TypeScript",
      level: 95,
      icon: "vscode-icons:file-type-typescript-official",
    },
    { skill: "Python", level: 93, icon: "vscode-icons:file-type-python" },
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
  languages: [
    { name: "English", icon: "circle-flags:uk" },
    { name: "Kinyarwanda", icon: "circle-flags:rw" },
    { name: "French", icon: "circle-flags:fr" },
  ],
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
        "JavaScript & TypeScript",
        "mySql + postgreSql",
        "NodeJs",
        "Software Analysis and Design",
        "Ethical hacking",
        "Embedded systems",
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
  techs: [],
  projects: [
    {
      name: "Money Manager",
      desc: "A user-friendly app to track your income and expenses, helping you manage your finances effectively.",
      smallDesc: "An intuitive app for tracking income and expenses.",
      tech: ["React"],
      img: "https://raw.githubusercontent.com/noel-mugisha/Money-Manager/main/screenshots/dashboard.png",
      gitLink: "https://github.com/noel-mugisha/Money-Manager",
      liveLink: "https://money-manager-ws4y.vercel.app",
    },
    {
      name: "RNRS-Urumuri",
      desc: "A user-friendly app to connect and empower non-employed Rwandans.",
      smallDesc: "A job-portal platform for non-employed Rwandans.",
      tech: ["NextJs"],
      img: "https://raw.githubusercontent.com/noel-mugisha/rnrs-project/main/frontend/screenshots/image.png",
      gitLink: "https://github.com/noel-mugisha/rnrs-project",
      liveLink: "https://rnrs-project-vcnz-kte9acnjq-noelguy53-9024s-projects.vercel.app/",
    },
    {
      name: "TheChapters",
      desc: "A user-friendly app to connect basketball enthusiasts and organize tournaments.",
      smallDesc: "A youth platform for basketball tournaments.",
      tech: ["React"],
      img: thechapters,
      liveLink: "https://thechapters.rw/",
    },
    {
      name: "Smart-Park",
      desc: "A smart app system for parking management.",
      smallDesc: "A smart app solution for parking management.",
      tech: ["NextJs, Express, Postgres"],
      img: pms,
      gitLink: "https://github.com/noel-mugisha/ParkingApp-Management-System",
    },
    {
      name: "Ecommerce Backend",
      desc: "A springboot backend for ecommerce applications",
      smallDesc: "A modern springboot backend for ecommerce applications.",
      tech: ["SpringBoot, PostgreSQL"],
      gitLink: "https://github.com/noel-mugisha/Ecommerce-Backend-SpringBoot",
    },
    {
      name: "RRA Taxing System",
      desc: "A springboot backend for RRA Taxing applications",
      smallDesc: "A modern springboot tax management system for RRA.",
      tech: ["SpringBoot, PostgreSQL"],
      gitLink: "https://github.com/noel-mugisha/RRA-Tax-Management-System",
    },
  ],

  certificates: [
    {
      title: "Advanced Spring-Boot Certificate",
      issuer: "Mosh Hamedani",
      year: 2025,
      previewImg: springCertImg,
      file: "/pdfs/spring.pdf"
    },
    {
      title: "Backend Development Certificate",
      issuer: "META",
      year: 2023,
      previewImg: backendCertImg,
      file: "/pdfs/backend.pdf"
    },
    {
      title: "Frontend Development Certificate",
      issuer: "META",
      year: 2023,
      previewImg: frontendCertImg,
      file: "/pdfs/frontend.pdf"
    },
    {
      title: "Version Control (Git) Certificate",
      issuer: "META/Coursera",
      year: 2023,
      previewImg: gitCertImg,
      file: "/pdfs/git.pdf"
    },
  ],
};
