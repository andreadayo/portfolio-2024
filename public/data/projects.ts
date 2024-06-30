export interface Project {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  image: string;
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
}

export const projects: Project[] = [
  {
    id: "project-one",
    type: "website",
    title: "Project One",
    subtitle: "A beautiful website project",
    image: "/assets/images/sample.png",
    github: "https://github.com",
    figma: "https://figma.com",
    link: "https://demo.com",
    year: "2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem maiores. Numquam, aut veniam sint hic aliquid saepe at molestias dicta optio totam repudiandae ab consequatur quo eum, ipsum sit suscipit omnis aliquam? Laudantium illum a nulla dignissimos veniam qui esse et error quasi tenetur beatae minima doloribus labore iste natus assumenda fuga accusantium vero quod velit, autem laborum. Dicta officiis dolores ab, labore voluptatum nam, iusto laudantium excepturi sequi harum eum? Temporibus perspiciatis recusandae, quae quod ducimus explicabo voluptas facere quia nulla, neque vitae numquam aut vero modi iusto. Reiciendis ullam provident optio id sapiente eveniet voluptatum voluptatem animi.",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS", "Vercel"],
    services: ["UI/UX", "Front-end"],
    palette: ["#152424", "#0B464E", "#279299", "#686868", "#FFFFFF"],
    partners: "TomasinoWeb (UI/UX, Back-end)",
  },
  {
    id: "project-two",
    type: "website",
    title: "Project Two",
    subtitle: "A user-friendly mobile app",
    image: "/assets/images/sample.png",
    github: "https://github.com",
    figma: "https://figma.com",
    link: "https://demo.com",
    year: "2023",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum quod natus ipsam magni sunt amet error illo, quibusdam dolore molestias pariatur aperiam eum nostrum ex facere autem sit aspernatur totam temporibus nam quisquam ipsum! Consectetur error excepturi sit, architecto quas provident asperiores voluptatum cum labore sapiente veritatis magnam aliquid eos, vero aut aperiam. Quasi eveniet totam magnam quod placeat mollitia dolore autem debitis sed laboriosam quam sit, vero quis ad nisi fugiat molestiae libero quos repudiandae. Tempora repellendus animi, aperiam provident debitis ullam rerum vitae explicabo fugit voluptates, recusandae aspernatur at maxime dolore tempore a accusantium dolor libero modi eveniet? Esse quas alias sequi modi non, dolor maxime aspernatur optio doloribus, animi ipsa libero. Dolore accusantium assumenda exercitationem obcaecati reiciendis magnam deserunt ipsa ab autem. Velit laudantium eum reiciendis corrupti error, optio reprehenderit exercitationem itaque dicta, repellat, harum mollitia delectus earum rerum deserunt distinctio voluptatum dolorem rem. Mollitia suscipit dolore, illum, distinctio quae iste consequuntur magnam perferendis similique non aperiam itaque perspiciatis voluptatem vero, ex quaerat velit dolor voluptas maiores. Voluptas similique amet id cupiditate rerum doloremque tempore nemo dignissimos, labore accusantium assumenda! Voluptatibus, repudiandae tenetur officiis esse minus sapiente ipsa, nemo reiciendis iusto voluptatum eligendi, necessitatibus quasi perferendis dicta maxime optio magni et dolore corporis placeat exercitationem consequuntur adipisci accusantium. Necessitatibus temporibus vero nihil. Neque itaque non labore eveniet minima eaque sequi aut aspernatur, modi officia tenetur ad excepturi iste sapiente reprehenderit, nulla adipisci aliquam voluptas veritatis. Minima deleniti, modi quis placeat unde ullam perspiciatis nisi. Modi, consectetur ducimus, labore, quibusdam excepturi ut rerum ratione dolores magnam consequuntur porro nobis ipsa earum magni pariatur perferendis explicabo beatae commodi quam corporis minima voluptatem totam? Enim reprehenderit numquam veritatis error voluptas! Temporibus quam ratione voluptatibus, libero hic maxime consequuntur omnis minus amet. Totam excepturi, laborum temporibus dolores explicabo fugit officiis itaque ad porro? Laboriosam cum similique aliquam cumque a, blanditiis culpa nobis voluptatibus accusantium voluptates, maiores vero neque dolorem vel officiis perferendis magni consectetur. Voluptatem possimus voluptates impedit non libero? Beatae quaerat ipsum velit repellat iste cupiditate, perspiciatis dolor aperiam similique laudantium error maiores veniam nam nemo, officiis tenetur vero minima pariatur, deleniti temporibus? Accusamus consectetur voluptas doloremque nam iure in molestiae deserunt hic maxime fugiat excepturi accusantium, tempore aliquid esse harum odit eius velit! Consequatur voluptates nihil fugit, ad praesentium atque, a, nobis illum perspiciatis quibusdam iusto debitis nesciunt maxime recusandae. Ea quo voluptate doloribus aut dolor exercitationem ab perspiciatis illo laboriosam nesciunt laborum, ducimus praesentium totam distinctio quidem! In cumque minima mollitia minus optio, necessitatibus quas reprehenderit impedit soluta eaque architecto. Doloremque aspernatur quidem vitae veniam, similique, hic, dicta ad animi placeat reiciendis nisi molestias minus eum exercitationem earum veritatis ut repellat laborum. Perspiciatis quasi quo odit excepturi praesentium rem quis aut? Impedit perspiciatis delectus minus, aspernatur velit modi veniam nobis nulla assumenda totam laudantium ducimus voluptate at, quam atque? Sunt consequatur molestias magni nesciunt soluta cupiditate placeat sequi ducimus iure quisquam eaque repellendus accusamus, minima aspernatur incidunt ad odio eos non delectus itaque totam hic asperiores voluptates!",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS", "Vercel"],
    services: ["UI/UX", "Front-end"],
    palette: ["#152424", "#0B464E", "#279299", "#686868", "#FFFFFF"],
    partners: "TomasinoWeb (UI/UX, Back-end)",
  },
  {
    id: "project-three",
    type: "design",
    title: "Project Three",
    subtitle: "An innovative design concept",
    image: "/assets/images/sample.png",
    github: "https://github.com",
    figma: "https://figma.com",
    link: "https://demo.com",
    year: "2023",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum quod natus ipsam magni sunt amet error illo, quibusdam dolore molestias pariatur aperiam eum nostrum ex facere autem sit aspernatur totam temporibus nam quisquam ipsum! Consectetur error excepturi sit, architecto quas provident asperiores voluptatum cum labore sapiente veritatis magnam aliquid eos, vero aut aperiam. Quasi eveniet totam magnam quod placeat mollitia dolore autem debitis sed laboriosam quam sit, vero quis ad nisi fugiat molestiae libero quos repudiandae. Tempora repellendus animi, aperiam provident debitis ullam rerum vitae explicabo fugit voluptates, recusandae aspernatur at maxime dolore tempore a accusantium dolor libero modi eveniet? Esse quas alias sequi modi non, dolor maxime aspernatur optio doloribus, animi ipsa libero. Dolore accusantium assumenda exercitationem obcaecati reiciendis magnam deserunt ipsa ab autem. Velit laudantium eum reiciendis corrupti error, optio reprehenderit exercitationem itaque dicta, repellat, harum mollitia delectus earum rerum deserunt distinctio voluptatum dolorem rem. Mollitia suscipit dolore, illum, distinctio quae iste consequuntur magnam perferendis similique non aperiam itaque perspiciatis voluptatem vero, ex quaerat velit dolor voluptas maiores. Voluptas similique amet id cupiditate rerum doloremque tempore nemo dignissimos, labore accusantium assumenda! Voluptatibus, repudiandae tenetur officiis esse minus sapiente ipsa, nemo reiciendis iusto voluptatum eligendi, necessitatibus quasi perferendis dicta maxime optio magni et dolore corporis placeat exercitationem consequuntur adipisci accusantium. Necessitatibus temporibus vero nihil. Neque itaque non labore eveniet minima eaque sequi aut aspernatur, modi officia tenetur ad excepturi iste sapiente reprehenderit, nulla adipisci aliquam voluptas veritatis. Minima deleniti, modi quis placeat unde ullam perspiciatis nisi. Modi, consectetur ducimus, labore, quibusdam excepturi ut rerum ratione dolores magnam consequuntur porro nobis ipsa earum magni pariatur perferendis explicabo beatae commodi quam corporis minima voluptatem totam? Enim reprehenderit numquam veritatis error voluptas! Temporibus quam ratione voluptatibus, libero hic maxime consequuntur omnis minus amet. Totam excepturi, laborum temporibus dolores explicabo fugit officiis itaque ad porro? Laboriosam cum similique aliquam cumque a, blanditiis culpa nobis voluptatibus accusantium voluptates, maiores vero neque dolorem vel officiis perferendis magni consectetur. Voluptatem possimus voluptates impedit non libero? Beatae quaerat ipsum velit repellat iste cupiditate, perspiciatis dolor aperiam similique laudantium error maiores veniam nam nemo, officiis tenetur vero minima pariatur, deleniti temporibus? Accusamus consectetur voluptas doloremque nam iure in molestiae deserunt hic maxime fugiat excepturi accusantium, tempore aliquid esse harum odit eius velit! Consequatur voluptates nihil fugit, ad praesentium atque, a, nobis illum perspiciatis quibusdam iusto debitis nesciunt maxime recusandae. Ea quo voluptate doloribus aut dolor exercitationem ab perspiciatis illo laboriosam nesciunt laborum, ducimus praesentium totam distinctio quidem! In cumque minima mollitia minus optio, necessitatibus quas reprehenderit impedit soluta eaque architecto. Doloremque aspernatur quidem vitae veniam, similique, hic, dicta ad animi placeat reiciendis nisi molestias minus eum exercitationem earum veritatis ut repellat laborum. Perspiciatis quasi quo odit excepturi praesentium rem quis aut? Impedit perspiciatis delectus minus, aspernatur velit modi veniam nobis nulla assumenda totam laudantium ducimus voluptate at, quam atque? Sunt consequatur molestias magni nesciunt soluta cupiditate placeat sequi ducimus iure quisquam eaque repellendus accusamus, minima aspernatur incidunt ad odio eos non delectus itaque totam hic asperiores voluptates!",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS", "Vercel"],
    services: ["UI/UX", "Front-end"],
    palette: ["#152424", "#0B464E", "#279299", "#686868", "#FFFFFF"],
    partners: "TomasinoWeb (UI/UX, Back-end)",
  },
  {
    id: "project-four",
    type: "design",
    title: "Project Four",
    subtitle: "A strategic marketing campaign",
    image: "/assets/images/sample.png",
    github: "https://github.com",
    figma: "https://figma.com",
    link: "https://demo.com",
    year: "2023",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum quod natus ipsam magni sunt amet error illo, quibusdam dolore molestias pariatur aperiam eum nostrum ex facere autem sit aspernatur totam temporibus nam quisquam ipsum! Consectetur error excepturi sit, architecto quas provident asperiores voluptatum cum labore sapiente veritatis magnam aliquid eos, vero aut aperiam. Quasi eveniet totam magnam quod placeat mollitia dolore autem debitis sed laboriosam quam sit, vero quis ad nisi fugiat molestiae libero quos repudiandae. Tempora repellendus animi, aperiam provident debitis ullam rerum vitae explicabo fugit voluptates, recusandae aspernatur at maxime dolore tempore a accusantium dolor libero modi eveniet? Esse quas alias sequi modi non, dolor maxime aspernatur optio doloribus, animi ipsa libero. Dolore accusantium assumenda exercitationem obcaecati reiciendis magnam deserunt ipsa ab autem. Velit laudantium eum reiciendis corrupti error, optio reprehenderit exercitationem itaque dicta, repellat, harum mollitia delectus earum rerum deserunt distinctio voluptatum dolorem rem. Mollitia suscipit dolore, illum, distinctio quae iste consequuntur magnam perferendis similique non aperiam itaque perspiciatis voluptatem vero, ex quaerat velit dolor voluptas maiores. Voluptas similique amet id cupiditate rerum doloremque tempore nemo dignissimos, labore accusantium assumenda! Voluptatibus, repudiandae tenetur officiis esse minus sapiente ipsa, nemo reiciendis iusto voluptatum eligendi, necessitatibus quasi perferendis dicta maxime optio magni et dolore corporis placeat exercitationem consequuntur adipisci accusantium. Necessitatibus temporibus vero nihil. Neque itaque non labore eveniet minima eaque sequi aut aspernatur, modi officia tenetur ad excepturi iste sapiente reprehenderit, nulla adipisci aliquam voluptas veritatis. Minima deleniti, modi quis placeat unde ullam perspiciatis nisi. Modi, consectetur ducimus, labore, quibusdam excepturi ut rerum ratione dolores magnam consequuntur porro nobis ipsa earum magni pariatur perferendis explicabo beatae commodi quam corporis minima voluptatem totam? Enim reprehenderit numquam veritatis error voluptas! Temporibus quam ratione voluptatibus, libero hic maxime consequuntur omnis minus amet. Totam excepturi, laborum temporibus dolores explicabo fugit officiis itaque ad porro? Laboriosam cum similique aliquam cumque a, blanditiis culpa nobis voluptatibus accusantium voluptates, maiores vero neque dolorem vel officiis perferendis magni consectetur. Voluptatem possimus voluptates impedit non libero? Beatae quaerat ipsum velit repellat iste cupiditate, perspiciatis dolor aperiam similique laudantium error maiores veniam nam nemo, officiis tenetur vero minima pariatur, deleniti temporibus? Accusamus consectetur voluptas doloremque nam iure in molestiae deserunt hic maxime fugiat excepturi accusantium, tempore aliquid esse harum odit eius velit! Consequatur voluptates nihil fugit, ad praesentium atque, a, nobis illum perspiciatis quibusdam iusto debitis nesciunt maxime recusandae. Ea quo voluptate doloribus aut dolor exercitationem ab perspiciatis illo laboriosam nesciunt laborum, ducimus praesentium totam distinctio quidem! In cumque minima mollitia minus optio, necessitatibus quas reprehenderit impedit soluta eaque architecto. Doloremque aspernatur quidem vitae veniam, similique, hic, dicta ad animi placeat reiciendis nisi molestias minus eum exercitationem earum veritatis ut repellat laborum. Perspiciatis quasi quo odit excepturi praesentium rem quis aut? Impedit perspiciatis delectus minus, aspernatur velit modi veniam nobis nulla assumenda totam laudantium ducimus voluptate at, quam atque? Sunt consequatur molestias magni nesciunt soluta cupiditate placeat sequi ducimus iure quisquam eaque repellendus accusamus, minima aspernatur incidunt ad odio eos non delectus itaque totam hic asperiores voluptates!",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS", "Vercel"],
    services: ["UI/UX", "Front-end"],
    palette: ["#152424", "#0B464E", "#279299", "#686868", "#FFFFFF"],
    partners: "TomasinoWeb (UI/UX, Back-end)",
  },
  {
    id: "project-five",
    type: "case study",
    title: "Project Five",
    subtitle: "An in-depth case study",
    image: "/assets/images/sample.png",
    github: "https://github.com",
    figma: "https://figma.com",
    link: "https://demo.com",
    year: "2023",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum quod natus ipsam magni sunt amet error illo, quibusdam dolore molestias pariatur aperiam eum nostrum ex facere autem sit aspernatur totam temporibus nam quisquam ipsum! Consectetur error excepturi sit, architecto quas provident asperiores voluptatum cum labore sapiente veritatis magnam aliquid eos, vero aut aperiam. Quasi eveniet totam magnam quod placeat mollitia dolore autem debitis sed laboriosam quam sit, vero quis ad nisi fugiat molestiae libero quos repudiandae. Tempora repellendus animi, aperiam provident debitis ullam rerum vitae explicabo fugit voluptates, recusandae aspernatur at maxime dolore tempore a accusantium dolor libero modi eveniet? Esse quas alias sequi modi non, dolor maxime aspernatur optio doloribus, animi ipsa libero. Dolore accusantium assumenda exercitationem obcaecati reiciendis magnam deserunt ipsa ab autem. Velit laudantium eum reiciendis corrupti error, optio reprehenderit exercitationem itaque dicta, repellat, harum mollitia delectus earum rerum deserunt distinctio voluptatum dolorem rem. Mollitia suscipit dolore, illum, distinctio quae iste consequuntur magnam perferendis similique non aperiam itaque perspiciatis voluptatem vero, ex quaerat velit dolor voluptas maiores. Voluptas similique amet id cupiditate rerum doloremque tempore nemo dignissimos, labore accusantium assumenda! Voluptatibus, repudiandae tenetur officiis esse minus sapiente ipsa, nemo reiciendis iusto voluptatum eligendi, necessitatibus quasi perferendis dicta maxime optio magni et dolore corporis placeat exercitationem consequuntur adipisci accusantium. Necessitatibus temporibus vero nihil. Neque itaque non labore eveniet minima eaque sequi aut aspernatur, modi officia tenetur ad excepturi iste sapiente reprehenderit, nulla adipisci aliquam voluptas veritatis. Minima deleniti, modi quis placeat unde ullam perspiciatis nisi. Modi, consectetur ducimus, labore, quibusdam excepturi ut rerum ratione dolores magnam consequuntur porro nobis ipsa earum magni pariatur perferendis explicabo beatae commodi quam corporis minima voluptatem totam? Enim reprehenderit numquam veritatis error voluptas! Temporibus quam ratione voluptatibus, libero hic maxime consequuntur omnis minus amet. Totam excepturi, laborum temporibus dolores explicabo fugit officiis itaque ad porro? Laboriosam cum similique aliquam cumque a, blanditiis culpa nobis voluptatibus accusantium voluptates, maiores vero neque dolorem vel officiis perferendis magni consectetur. Voluptatem possimus voluptates impedit non libero? Beatae quaerat ipsum velit repellat iste cupiditate, perspiciatis dolor aperiam similique laudantium error maiores veniam nam nemo, officiis tenetur vero minima pariatur, deleniti temporibus? Accusamus consectetur voluptas doloremque nam iure in molestiae deserunt hic maxime fugiat excepturi accusantium, tempore aliquid esse harum odit eius velit! Consequatur voluptates nihil fugit, ad praesentium atque, a, nobis illum perspiciatis quibusdam iusto debitis nesciunt maxime recusandae. Ea quo voluptate doloribus aut dolor exercitationem ab perspiciatis illo laboriosam nesciunt laborum, ducimus praesentium totam distinctio quidem! In cumque minima mollitia minus optio, necessitatibus quas reprehenderit impedit soluta eaque architecto. Doloremque aspernatur quidem vitae veniam, similique, hic, dicta ad animi placeat reiciendis nisi molestias minus eum exercitationem earum veritatis ut repellat laborum. Perspiciatis quasi quo odit excepturi praesentium rem quis aut? Impedit perspiciatis delectus minus, aspernatur velit modi veniam nobis nulla assumenda totam laudantium ducimus voluptate at, quam atque? Sunt consequatur molestias magni nesciunt soluta cupiditate placeat sequi ducimus iure quisquam eaque repellendus accusamus, minima aspernatur incidunt ad odio eos non delectus itaque totam hic asperiores voluptates!",
    tools: ["Figma", "Next.JS", "Typescript", "SCSS", "Vercel"],
    services: ["UI/UX", "Front-end"],
    palette: ["#152424", "#0B464E", "#279299", "#686868", "#FFFFFF"],
    partners: "TomasinoWeb (UI/UX, Back-end)",
  },
];
