const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: "/portfolio",
	title: "Abhiram Bylahalli Jagadish.",
};

const about = {
	// all the properties are optional - can be left empty or deleted
	name: "Abhi",
	role: "Full Stack Developer",
	description:
		"With over 2 years of experience building cloud-native, scalable, and high-performance web applications. Proficient in ReactJS, Spring Boot, Python, Node.js, and AWS, with a focus on modernizing applications, microservices architecture, and cloud infrastructure. Adept at optimizing system performance, reducing latency, and increasing security compliance. Proven record of enhancing application responsiveness by 30% and reducing deployment time by 25%.",
	resume: "https://drive.google.com/file/d/1hBCycQ6BHPRkN96paXfptbHtc7hEPLnm/view?usp=sharing",
	social: {
		linkedin: "https://www.linkedin.com/in/abhirambj/",
		github: "https://github.com/abhirambj",
		twitter: "https://twitter.com/EL3CTR9N",
	},
};

const experiences = [
	{
		name: "Agilant Solutions Inc.",
		role: "Full Stack Developer Intern",
		description:
			"Devised secure full-stack applications using React and Spring Boot, strengthening authentication systems and decreasing unauthorized access by 40%. Revamped GraphQL data retrieval processes, trimming query response times by 30%. Partnered with design teams to translate Figma prototypes into production-ready web components.",
		stack: [
			"React",
			"Spring Boot",
			"GraphQL",
			"MongoDB",
			"Figma",
			"Docker",
			"AWS",
			"Git",
			"CI/CD Pipelines",
			"JWT",
			"OAuth2",
			"TypeScript",
			"TailwindCSS",
		],
		startDate: "July 2024",
		endDate: "September 2024",
	},
	{
		name: "Accenture Solutions Pvt. Ltd.",
		role: "Oracle Applications Developer",
		description:
			"Configured and minimized Spring Data JPA repositories for streamlined data persistence and retrieval, leading to significant improvements in database performance. Applied robust security mechanisms using Spring Security, safeguarding applications through advanced authentication, authorization, and encryption protocols. Developed and integrated RESTful APIs using Spring Boot for seamless communication between microservices, improving overall system modularity and responsiveness.",
		stack: [
			"Spring Boot",
			"Spring Data JPA",
			"Spring Security",
			"RESTful APIs",
			"Java",
			"AWS",
			"Docker",
			"Kubernetes",
			"Git",
			"CI/CD Pipelines",
			"OAuth2",
			"JWT",
			"PostgreSQL",
			"MongoDB",
		],
		startDate: "October 2021",
		endDate: "July 2023",
	},
	{
		name: "SMMUD",
		role: "Full Stack Developer",
		description:
			"Crafted customer-facing modules with Next.js and NodeJS, enabling real-time data synchronization with MongoDB, leading to a 25% rise in user engagement from over 500 active users. Deployed Progressive Web App (PWA) functionalities like offline support and push notifications, driving a 20% surge in user engagement and a 15% increase in retention. Integrated third-party payment gateways to enable secure transactions, enhancing the platform's e-commerce capabilities.",
		stack: [
			"NextJS",
			"NodeJS",
			"PostgreSQL",
			"Docker",
			"AWS",
			"MongoDB",
			"PWA",
			"Stripe",
			"Git",
			"CI/CD Pipelines",
			"OAuth2",
			"JWT",
			"TypeScript",
			"TailwindCSS",
			"Figma",
			"GraphQL",
			"Microservices",
		],
		startDate: "June 2021",
		endDate: "October 2021",
	},
	{
		name: "Ownacar.in",
		role: "Full Stack Web Developer Intern",
		description:
			"Designed and developed responsive UI using Bulma for visually appealing interfaces, resulting in the creation of 45 web pages. Created reusable UI components and optimized performance through techniques like lazy loading and code splitting.",
		stack: [
			"NextJS",
			"Bulma",
			"FastAPI",
			"PostgreSQL",
			"Docker",
			"AWS",
			"Git",
			"CI/CD Pipelines",
			"OAuth2",
			"JWT",
			"TypeScript",
			"TailwindCSS",
			"Figma",
			"GraphQL",
			"Microservices",
			"React",
			"Python",
		],
		startDate: "March 2021",
		endDate: "October 2021",
	},
];

const projects = [
	{
		name: "Expense-Tracker",
		description:
			"Designed a full-stack application using FastAPI for a high-performance backend and React with Zustand for state management, ensuring seamless user interactions. Integrated JWT authentication and RBAC, using Argon2 for secure password storage.",
		stack: [
			"FastAPI",
			"React",
			"Zustand",
			"MongoDB",
			"Chart.js",
			"Docker",
			"JWT",
			"Argon2",
			"OAuth2",
		],
		sourceCode: "https://github.com/abhirambj/expense-tracker",
	},
	{
		name: "TogaCommerce",
		description:
			"Architected a scalable e-commerce platform using React and Spring Boot, improving frontend performance by 25%. Backend optimized with PostgreSQL for database efficiency and improved caching strategies.",
		stack: [
			"React",
			"Spring Boot",
			"GraphQL",
			"Storybook",
			"Docker",
			"Kubernetes",
			"AWS",
			"PostgreSQL",
		],
	},
	{
		name: "Project Team Management System",
		description:
			"Developed an automated system to streamline college department team formation, incorporating CGPA-based grouping for random team selection. Simplified faculty involvement in team creation.",
		stack: ["HTML", "CSS", "PHP", "MySQL"],
		sourceCode: "https://github.com/abhirambj/ptms",
	},
];

const skills = [
	"JavaScript",
	"TypeScript",
	"ReactJS",
	"NextJS",
	"Node.js",
	"Python",
	"Spring Boot",
	"FastAPI",
	"TailwindCSS",
	"GraphQL",
	"MongoDB",
	"PostgreSQL",
	"Microservices",
	"AWS (EC2, S3, RDS, Lambda, CloudWatch, API Gateway)",
	"Docker",
	"Kubernetes",
	"Git",
	"CI/CD Pipelines",
	"JWT",
	"Argon2",
	"OAuth2",
	"HTML",
	"CSS",
	"Java",
	"PHP",
	"Storybook",
	"Chart.js",
	"Redis",
	"Zustand",
	"Bootstrap",
	"Figma",
	"MySQL",
];

const contact = {
	email: "abhiram.bj@gmail.com",
};

export { header, about, experiences, projects, skills, contact };
