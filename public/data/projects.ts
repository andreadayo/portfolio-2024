export interface Project {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  github?: string;
  figma?: string;
  link?: string;
  year: string;
  description: string;
  tools: string[];
  services: string[];
  palette: string[];
  partners?: string;
  screenshots?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "totodo",
    type: "design",
    title: "Totodo",
    subtitle: "Task management app",
    figma:
      "https://www.figma.com/proto/IcWPBxN3i5OXuCSCqvWTdb/Totodo-App?page-id=0%3A1&node-id=78-415&node-type=canvas&viewport=446%2C-130%2C0.03&t=mayhfAWGBjWDbY0u-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=78%3A415&show-proto-sidebar=1",
    year: "September 2024",
    description:
      "Totodo is a simple task management app that was designed and developed for the 3-Part Online Crash Course hosted by TomasinoWeb. The app was created to help participants manage their tasks and deadlines effectively. I contributed to this project as a UI/UX designer.",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS"],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#FDE047", "#F9A8D4", "#F8FAFC", "#475569", "#0F172A"],
    partners: "TomasinoWeb Web Technologies (PY 2024-2025)",
  },
  {
    id: "r101-17",
    type: "website",
    title: "R101 '17",
    subtitle: "TomasinoWeb's Recruitment website for 2024",
    github: "https://github.com/TomasinoWeb/tomasinoWebR101",
    link: "https://join.tomasinoweb.org",
    year: "September 2024",
    description:
      "This is the recruitment website of TomasinoWeb, where applicants can learn more about the organization’s departments, people, and culture. The design of the website was inspired by Studio Ghibli, incorporating the movies to signify each department throughout the pages. I contributed to this project as a UI/UX designer and front-end developer.",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS"],
    services: ["UI/UX", "Front-end"],
    palette: ["#D35C5F", "#BAA357", "#392B42", "#38504A", "#343332"],
    partners: "TomasinoWeb Web Technologies (PY 2024-2025)",
    featured: true,
  },
  {
    id: "marita-salon",
    type: "website",
    title: "Marita Salon",
    subtitle: "Transaction and services management system",
    year: "April 2024",
    description:
      "The system was developed to record and manage the salon’s transactions and services. Its features were specifically tailored to meet the business needs of Marita Salon. I served as the Project Manager of the team, responsible for monitoring all project tasks, scheduling meetings with the client, and providing regular progress updates. Additionally, I contributed as a UI/UX designer and front-end developer. This project was particularly significant for our team as it was our first deployment in a live business environment.",
    tools: [
      "Figma",
      "Next.JS",
      "Typescript",
      "Tailwind CSS",
      "Shadcn",
      "Laravel",
    ],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#17B897", "#FFF3C2", "#F7F7F7", "#9E9E9E", "#222222"],
    partners: "Startup PH",
  },
  {
    id: "techwise",
    type: "website",
    title: "TechWise",
    subtitle: "Landing page mockup",
    figma:
      "https://www.figma.com/proto/aaHMNjtrXXHb6hA1Q6SHEt/Landing-Dev?page-id=0%3A1&type=design&node-id=26-23&viewport=-375%2C1080%2C0.42&t=llwZefXA3mU7rppZ-1&scaling=min-zoom",
    github: "https://github.com/andreadayo/techwise_landing",
    link: "https://techwise-landing.vercel.app",
    year: "January 2024",
    description:
      "A landing page design for Techwise Solutions which aims to empower innovation for the future of technology. This is a personal project that served as one of the first websites I developed using Tailwind CSS.",
    tools: ["Figma", "Next.JS", "Typescript", "Tailwind CSS", "Vercel"],
    services: ["UI/UX", "Front-end"],
    palette: ["#20B486", "#D3F0E8", "#F5F5F5", "#6E7A84", "#030C13"],
    featured: true,
  },
  {
    id: "r101-16",
    type: "website",
    title: "R101 '16",
    subtitle: "TomasinoWeb's Recruitment website for 2023",
    github: "https://github.com/TomasinoWeb/tomasinoWebR101",
    link: "https://join.tomasinoweb.org",
    year: "September 2023",
    description:
      "This is the recruitment website of TomasinoWeb, where applicants can learn more about the organization’s departments, people, and culture. The design of the website was inspired by Taylor Swift’s Eras Tour, incorporating the representative colors of each album to signify each department throughout the pages. As the lead front-end developer, I was responsible for assigning tasks, developing pages, and performing quality assurance checks on the team members' work.",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS"],
    services: ["UI/UX", "Front-end"],
    palette: ["#A44955", "#FDDAA6", "#FFFFFF", "#D0CBC6", "#393939"],
    partners: "TomasinoWeb Web Technologies (PY 2023-2024)",
  },
  {
    id: "portfolio-2",
    type: "website",
    title: "Portfolio v2",
    subtitle: "Collection of my projects",
    link: "https://andreadayo-ver2.netlify.app",
    year: "July 2023",
    description:
      "This is the second portfolio website I developed which features a single page with various sections containing information about myself, the projects I have developed or contributed to, and my contact information for project inquiries. This portfolio helped me secure my first internship as a UI/UX Designer Trainee.",
    tools: [
      "Figma",
      "Next.JS",
      "Typescript",
      "SCSS",
      "Framer Motion",
      "Netlify",
    ],
    services: ["UI/UX", "Front-end"],
    palette: ["#E4C443", "#F0F1F5", "#BFC6D4", "#212631", "#0A0E15"],
  },
  {
    id: "tomasinoweb",
    type: "website",
    title: "TomasinoWeb",
    subtitle: "Content management system",
    link: "https://tomasinoweb.org",
    year: "June 2023",
    description:
      "This is the main website of TomasinoWeb, the premier digital media organization of the University of Santo Tomas, tasked to deliver relevant information to the Thomasian community through online media. The website was redesigned and rebuilt to provide an enhanced user experience and effectively showcase the organization's publications. I contributed to this project as a UI/UX designer and front-end developer.",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS", "RPScin"],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#F7A81D", "#151F29", "#FFFFFF", "#808080", "#0A0A0A"],
    partners: "TomasinoWeb Web Technologies (PY 2022-2023)",
    featured: true,
  },
  {
    id: "lamona",
    type: "website",
    title: "Lamona",
    subtitle: "Food and drink directory",
    link: "https://www.lamona.lol/",
    year: "April 2023",
    description:
      "A food and drink directory website we developed specifically catered for Thomasians who can't seem to decide what to eat. This was my first project using React, and it helped me gain a deeper understanding of the framework. I contributed to this project as a front-end developer.",
    tools: ["Figma", "Next.JS", "JavaScript", "SCSS", "Vercel"],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#FF7F11", "#F2DDFF", "#FFDDDD", "#DDFFE7", "#FFFEF1"],
    partners: "TomasinoWeb Web Technologies (PY 2022-2023)",
  },
  {
    id: "draft-143",
    type: "website",
    title: "Draft 143",
    subtitle: "Compilation of story receipts",
    link: "https://www.draft143.com/",
    year: "February 2023",
    description:
      "A compilation of stories that are based on true life experience. It aims to relive memories associated with receipts and tickets acquired from the past. I was appointed as the project head of the front-end development team for this project, which involved delegating tasks and ensuring the quality of the code. Additionally, I assisted in the UI/UX design of this project.",
    tools: ["Figma", "PHP", "CSS", "JavaScript", "Laravel", "NGINX"],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#EBBAB9", "#AED4E6", "#FFFAC2", "#9EDFC4", "#343434"],
    partners: "TomasinoWeb Web Technologies (PY 2022-2023)",
    featured: true,
  },
  {
    id: "know-thyself",
    type: "website",
    title: "Know Thyself",
    subtitle: "Blog for computer science students",
    link: "https://kn0wthyse1f.wordpress.com/",
    year: "December 2021",
    description:
      "A blog designed to assist computer science students in planning for their ideal future, helping them make informed choices for various problems that arise. This project was developed as part of a course project for one of our general elective courses.",
    tools: ["Wordpress"],
    services: ["UI/UX", "Front-end"],
    palette: ["#BB86FC", "#9FD3E8", "#E2E2E2", "#A1ADBE", "#161618"],
  },
  {
    id: "24-chicken-manager",
    type: "website",
    title: "24 Chicken Manager",
    subtitle: "Restaurant management system",
    github: "https://github.com/Hasmire/24-Chicken-Manager",
    year: "December 2021",
    description:
      "A restaurant management website that allows customers to place orders online, facilitating efficient store management. I worked on this project as both a UI/UX designer and front-end developer.",
    tools: ["Laravel", "Blade", "CSS"],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#D62525", "#FFBB00", "#FFFFFF", "#6F6F6F", "#232323"],
  },
  {
    id: "ilaw-database",
    type: "website",
    title: "ILAW Database",
    subtitle: "Research database",
    link: "https://drive.google.com/file/d/1UDc360e9a1RoWi0rlZCNE9jXbIikSTKD/view",
    year: "May 2021",
    description:
      "It is a website created to provide an accessible database for Theresians to view the research outputs published by the STCQC Community. I served as a full stack developer for this project. This project received the Best Research of the Year award in May 2021 and is currently accessible to students of the school.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    services: ["UI/UX", "Front-end", "Back-end"],
    palette: ["#43536D", "#FFC64C", "#152238", "#FFFFFF", "#000000"],
    partners: "QuanRes One",
  },
  {
    id: "amplify",
    type: "design",
    title: "Amplify",
    subtitle: "Landing page design",
    figma:
      "https://www.figma.com/proto/zYbTG9BiuWz41p10L2oxpy/Landing?page-id=0%3A1&type=design&node-id=19-806&viewport=-603%2C72%2C0.2&t=iYL9Zv5bCSzQQ3oM-1&scaling=min-zoom&mode=design",
    year: "July 2023",
    description:
      "Unlock exceptional growth and maximize your brand's potential with Amplify Marketing, your trusted partner in the digital landscape. This is one of the landing pages I designed as a personal project to effectively showcase the brand’s services and capture potential clients' attention.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#32E0DC", "#FFFFFF", "#B9B9B9", "#292A2E", "#202124"],
    featured: true,
  },
  {
    id: "swiftpay",
    type: "design",
    title: "SwiftPay",
    subtitle: "Virtual card mobile app",
    figma:
      "https://www.figma.com/proto/Ad7XF9u0sBK4iePxIPZuKX/SwiftPay?page-id=20%3A551&type=design&node-id=21-742&viewport=605%2C695%2C0.23&t=SFsYKSXR7ZTg2b2V-1&scaling=min-zoom&starting-point-node-id=21%3A742&mode=design",
    year: "July 2023",
    description:
      "Redesign of a modern and minimalist virtual card mobile app where you can access all of your cards and transactions. This was designed as part of a job application. ",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#008455", "#FDF8F4", "#737373", "#212121", "#151515"],
    featured: true,
  },
  {
    id: "planet",
    type: "design",
    title: "Planet",
    subtitle: "Space-themed landing page",
    figma:
      "https://www.figma.com/proto/LOeTv3RZFSpVN5Ai3CuDoA/DailyUI-003---Landing-Page?node-id=103-77&scaling=scale-down&page-id=103%3A3",
    year: "October 2022",
    description:
      "A space-themed landing page featuring explorations and innovations in the cosmos.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#471F75", "#D6B8FF", "#FDB14A", "#E58C11", "#FFFFFF"],
  },
  {
    id: "globe-app",
    type: "design",
    title: "Globe App",
    subtitle: "Authentication redesign",
    figma:
      "https://www.figma.com/proto/aGPtz2ojMEX1YdyiBBtH1W/DailyUI-001---Sign-Up?node-id=104-327&scaling=scale-down&page-id=104%3A273&mode=design&t=5qaAlfJdKqqB8Rpd-1",
    year: "July 2022",
    description:
      "A mockup design of a landing and sign up page for a mobile application.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#29348F", "#626CC5", "#989BB2", "#FFFFFF", "#F1F1F4"],
  },
  {
    id: "tech-store-checkout",
    type: "design",
    title: "Tech Store Checkout",
    subtitle: "Mobile checkout page",
    figma:
      "https://www.figma.com/proto/qz1qnFWu8HVTQBpws0b9Rq/DailyUI-002---Credit-Card-Checkout?node-id=102-297&scaling=scale-down&page-id=102%3A100",
    year: "July 2022",
    description:
      "A mockup design for users to easily navigate their way through a checkout page.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#413EF7", "#F7F7F9", "#C5C5C5", "#969697", "#060606"],
  },
  {
    id: "nike-app",
    type: "design",
    title: "Nike Mobile App",
    subtitle: "Research database",
    figma:
      "https://www.figma.com/proto/p4bVwdXf1wp7btNluvAxfz/Shoe-App?node-id=103-433&scaling=scale-down&page-id=103%3A384",
    year: "July 2022",
    description:
      "A mobile application design inspired by the Nike Website for the content and layout of the products.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#C36003", "#F6F6F6", "#BCBCBC", "#838383", "#000000"],
  },
  {
    id: "costguard",
    type: "design",
    title: "CostGuard",
    subtitle: "Finance tracking app",
    figma:
      "https://www.figma.com/proto/jzyA9XUoEggnhhNdeRlomG/CostGuard-App-Design?node-id=479-5355&scaling=scale-down&page-id=479%3A2818&starting-point-node-id=479%3A5355",
    year: "April 2022",
    description:
      "A web and mobile application design that offers users a convenient and accessible way to track their finances in one place. This project involved user research, including a survey of over 30 people who provided feedback on the application's design. The feedback was positive, with users finding the application helpful and envisioning its future use for easing financial management. This experience was valuable as it taught me prototyping and the importance of accessibility in user experience.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#0A83AB", "#01355A", "#9A2626", "#F5F5F5", "#020E13"],
  },

  {
    id: "burger-king-app",
    type: "design",
    title: "Burger King App",
    subtitle: "Food delivery app redesign",
    figma:
      "https://www.figma.com/proto/5ka1OxvUfcu9ecdZZYXjfc/Burger-King?node-id=302-171&scaling=scale-down&page-id=14%3A8&mode=design&t=ItAlCtNSlMP9Lzcs-1",
    year: "January 2022",
    description:
      "A redesign of a food delivery app using elements of glassmorphism.",
    tools: ["Figma"],
    services: ["UI/UX"],
    palette: ["#D62300", "#FF9C51", "#FFFEF1", "#313131", "#151515"],
  },
];
