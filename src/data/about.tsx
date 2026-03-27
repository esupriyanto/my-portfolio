import {
  RiGraduationCapFill,
  RiHomeFill,
  RiMailFill,
  RiUserFill,
} from "react-icons/ri";

export const infoData = [
  {
    icon: <RiUserFill size={20} />,
    text: "Eko Supriyanto",
  },
  {
    icon: <RiMailFill size={20} />,
    text: "esupriyanto828@gmail.com",
  },
  {
    icon: <RiGraduationCapFill size={20} />,
    text: "Cloud Engineer",
  },
  {
    icon: <RiHomeFill size={20} />,
    text: "Jakarta, Indonesia",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        school: "STMIK Nusa Mandiri",
        qualification: "Teknik Informatika",
        years: "2018 - 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Accenture",
        role: "Cloud Engineer",
        years: "May 2020 - Dec 2025",
        location: "Jakarta, Indonesia",
        description: [
          "Initiated and set up the company's development environment, ensuring a solid foundation for project growth.",
          "Implemented agile and efficient processes, improving team collaboration and productivity.",
          "Selected and integrated key technologies, such as NextJS, TailwindCSS, Express, and TypeORM.",
          "Configured CI/CD pipelines for build, test, and deployment automation.",
          "Led the development of innovative solutions, such as the SMV Flow platform and the SMVZap Chrome extension.",
          "Improved user experience with optimized login systems and customized dashboards.",
          "Created and optimized various resources and systems, such as dynamic panels and dashboards.",
          "Provided technical guidance and support to the team, promoting a collaborative environment.",
        ],
        technologies: [
          "NextJS 14",
          "TailwindCSS",
          "Prisma",
          "NestJS",
          "Docker",
          "PostgreSQL",
          "TypeORM",
          "Express",
          "Jest",
          "React",
          "React Native",
          "Figma",
          "ClickUp",
        ],
      },
    ],
  },
];

export const skillsData = [
  {
    title: "skills",
    data: [
      {
        icons: ["HTML", "CSS", "Styled Components", "TailwindCSS"],
      },
      {
        icons: ["JavaScript", "TypeScript", "React", "NextJs"],
      },
      {
        icons: ["NodeJS", "NestJS", "Express", "PrismaJs"],
      },
      {
        icons: ["Jest", "Django", "Git", "Figma"],
      },
      {
        icons: ["MongoDB", "PostgreSQL"],
      },
      {
        icons: ["Docker", "SQLite"],
      },
      {
        icons: ["Sass", "Vtex"],
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "Windows",
      },
      {
        imgPath: "Linux",
      },
      {
        imgPath: "Google Cloud Platform",
      },
      {
        imgPath: "AWS",
      },
      {
        imgPath: "GitHub",
      },
      {
        imgPath: "Terraform",
      },
      {
        imgPath: "Ansible",
      },
    ],
  },
];
