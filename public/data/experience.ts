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
        position: "Lead Developer",
        date: "Jan 2022 – May 2024",
        description: [
          "Led a team of developers in the design and implementation of web applications.",
          "Implemented best practices in coding and version control.",
        ],
      },
      {
        position: "Junior Developer",
        date: "Apr 2020 – Dec 2021",
        description: [
          "Assisted senior developers in coding and testing of web applications.",
          "Gained proficiency in JavaScript, HTML, and CSS.",
        ],
      },
    ],
  },
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
        position: "Lead Developer",
        date: "Jan 2022 – May 2024",
        description: [
          "Led a team of developers in the design and implementation of web applications.",
          "Implemented best practices in coding and version control.",
        ],
      },
      {
        position: "Junior Developer",
        date: "Apr 2020 – Dec 2021",
        description: [
          "Assisted senior developers in coding and testing of web applications.",
          "Gained proficiency in JavaScript, HTML, and CSS.",
        ],
      },
    ],
  },
  {
    company: "Another Company",
    roles: [
      {
        position: "Senior Developer",
        date: "Mar 2018 – Dec 2019",
        description: [
          "Developed scalable and maintainable web applications.",
          "Collaborated with UX/UI designers to enhance user experience.",
        ],
      },
    ],
  },
];
