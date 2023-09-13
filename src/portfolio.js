const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "Abhiram B J.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Abhiram B J",
  role: "Software Engineer",
  description:
    "I studied Computer Science Engineering in Hassan-Karnataka-India, worked at innovative startup and Free Software Organizations. I’m interested in the whole visual part of the web and cross platform mobile applications, its usability, performance and accessibility. I’ve lived on planet earth for 21 years and have worked on the web and cross platform mobile applications for 1 of them.",
  resume:
    "https://drive.google.com/file/d/1-Kpc_8t-vHVxix2JvgYXOW_6Hv9gAW7s/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/abhirambj/",
    github: "https://github.com/abhirambj",
    twitter: "https://twitter.com/EL3CTR9N",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project Team Management System",
    description:
      "This project automates the process of creating teams for a department.This was developed by doing minimalistic designs and good working functionalities. The team would be formed automatically by choosing random person from each group that is charecterised based on their CGPA.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    sourceCode: "https://github.com/abhirambj/ptms",
    // livePreview: 'https://github.com',
  },
  {
    name: "Student Website For GECM College",
    description:
      "The website was developed for the sister college of the college I am pursuing my engineering.This was an opportunity for enhancing my skills on web development.",
    stack: ["HTML", "CSS", "JavaScript"],
    // sourceCode: 'https://github.com',
    livePreview: "http://gecm.in",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Data Structures",
  "Algorithms",
  "HTML",
  "CSS",
  "JavaScript",
  "Go Lang",
  "React",
  "Python",
  "TailwindCSS",
  "Material UI",
  "Git",
  "Bulma",
  "NextJS",
  "Flutter",
  "Ionic",
  "Bravo Studio",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "abhiram.bj@gmail.com",
};

export { header, about, projects, skills, contact };
