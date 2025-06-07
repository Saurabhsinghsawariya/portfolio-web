import {
  ChatGPT,
  EC2,
  Impress,
  S3,
  backend,
  chrome,
  cloud,
  css,
  design,
  expressjs,
  formik,
  fullStack,
  git,
  github,
  html,
  javascript,
  mongodb,
  mongodbCompass,
  mongoose,
  mui,
  nodejs,
  postman,
  reactjs,
  redux,
  scss,
  tailwind,
  ubuntu,
  vscode,
  web
} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "React Developer", icon: reactjs },
  { title: "Backend Developer", icon: backend },
  { title: "Full Stack Developer", icon: fullStack },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Formik", icon: formik },
  { name: "Material UI", icon: mui },
  { name: "Scss", icon: scss },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Mongoose", icon: mongoose },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "EC2", icon: EC2 },
  { name: "S3", icon: S3 },
];

const tools = [
  { name: "VS Code", icon: vscode },
  { name: "ChatGPT", icon: ChatGPT },
  { name: "Chrome", icon: chrome },
  { name: "Impress", icon: Impress },
  { name: "MongoDB Compass", icon: mongodbCompass },
  { name: "Postman", icon: postman },
  { name: "Ubuntu", icon: ubuntu },
];

const experiences = [
  {
    title: "Frontend Development",
    company_name: "React.js, Redux, Formik with Yup",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jun 2022 - Present",
    points: [
      "Advanced skills in React.js for building dynamic web applications.",
      "Expertise in Redux for efficient state management.",
      "Experience with Formik and Yup for seamless form handling and validation.",
      "Applied Flux architecture to enhance data flow and maintainability.",
      "Implemented advanced architectural patterns for scalable applications.",
    ],
  },
  {
    title: "UI Designing",
    company_name: "Material UI, Framer Motion, Tailwind CSS, SCSS",
    icon: design,
    iconBg: "white",
    date: "Sep 2022 - Present",
    points: [
      "Proficient in Material UI for creating modern and responsive user interfaces.",
      "Expertise in Framer Motion for crafting smooth and interactive animations.",
      "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
      "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes.",
      "Ability to create responsive layouts for diverse screen sizes and devices.",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Node.js, Express.js, Mongoose, S3",
    icon: backend,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Proficient in Node.js for building robust and scalable server-side applications.",
      "Strong command of Express.js for creating RESTful APIs and routing.",
      "Experience with MongoDB and Mongoose for efficient data modeling.",
      "Integration of AWS S3 for secure and scalable file storage.",
      "Used Postman for API testing, validation, and documentation.",
      "Familiarity with MVC and Clean Architecture principles.",
      "Implemented authentication and authorization mechanisms.",
      "Expertise in debugging and performance optimization.",
    ],
  },
  {
    title: "AWS and Other Skills",
    company_name: "EC2, S3, IAM, DSA",
    icon: cloud,
    iconBg: "black",
    date: "Jun 2023 - Present",
    points: [
      "Managing AWS EC2 instances for scalable computing.",
      "Used AWS S3 for secure object storage.",
      "Configured IAM for secure access management.",
      "Strong knowledge of DSA and Big O for problem-solving.",
    ],
  },
];

const projects = [
  {
    name: "Shop",
    description:
      "A web-based platform that allows users to search and order products. Admins can manage products, orders, reviews, and users.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Material UI", color: "pink-text-gradient" },
    ],
    image: "#", // Replace with actual image import
    alt: "E-Commerce",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "Pro Connect Up",
    description:
      "A web application that enables users to find people with the same interests, freelance opportunities, and job openings nearby.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "#", // Replace with actual image import
    alt: "Pro Connect Up",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
    ],
    image: "#", // Replace with actual image import 
    alt: "Portfolio",
    source_code_link: "https://github.com/Saurabhsinghsawariya",
    live_link: "https://github.com/Saurabhsinghsawariya",
  },
];

export {
  experiences,
  navLinks,
  projects,
  services,
  technologies,
  tools
};

