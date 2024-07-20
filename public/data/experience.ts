export interface Role {
  position: string;
  date: string;
  description: string[];
}

export interface Company {
  company: string;
  roles: Role[];
}

export const jobsData: Company[] = [
  {
    company: "TomasinoWeb",
    roles: [
      {
        position: "Chief Technology Officer",
        date: "Jun 2024 – Present",
        description: [
          "In-charge of supervising the entire Web Technologies Department, overseeing project management and team coordination.",
          "Manage TomasinoWeb’s platforms including the main website, domain, and emails.",
        ],
      },
      {
        position: "Lead Front-end Developer",
        date: "Jun 2023 – May 2024",
        description: [
          "Responsible for managing the front-end development team, overseeing project execution, and collaborating with other teams to ensure adherence to project timelines and requirements. These projects include the R101 (recruitment) and Right Click website.",
          "Conducted thorough quality assurance checks on front-end code and functionality, ensuring high standards of performance and user experience.",
        ],
      },
      {
        position: "Front-end Developer",
        date: "Oct 2022 – Jun 2023",
        description: [
          "Developed dynamic and engaging websites for various projects using front-end technologies such as HTML, CSS, JavaScript, and React. These projects include Draft 143, Lamona, and TomasinoWeb's Main Website.",
          "Appointed as the project head of the front-end development team for the Draft 143 project, which included delegating tasks and ensuring the quality of the code.",
          "Assisted the department’s UI/UX team in the creation of web designs with the use of Figma which included creating wireframes and prototypes.",
        ],
      },
    ],
  },
  {
    company: "Fiverr",
    roles: [
      {
        position: "Freelance UI/UX Designer",
        date: "Nov 2023 – Present",
        description: [
          "Designed blog sites and landing pages tailored to client specifications.",
          "Utilized design tools like Photoshop and Figma to create high-fidelity prototypes.",
          "Collaborated with clients to understand their needs and deliver custom design solutions.",
        ],
      },
    ],
  },
  {
    company: "Edufied",
    roles: [
      {
        position: "UI/UX Designer Trainee",
        date: "Aug 2023 – Dec 2023",
        description: [
          "Contributed to enhancing user experiences through the creation of wireframes and the redesign of interfaces",
          "Designed certificates and banners for client companies.",
          "Collaborated closely with developers, ensuring seamless implementation of designs.",
        ],
      },
    ],
  },
];
