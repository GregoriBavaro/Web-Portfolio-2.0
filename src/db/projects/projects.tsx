import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

type MenuItem = {
  id: number;
  title: string;
  folderColor: string;
  list: {
    id: number;
    title: string;
    icon: React.ReactElement | null;
    text: (string | any)[];
    code?: string;
    website?: string;
    photos?: string[];
  }[];
};

export const PROJECTS: MenuItem[] = [
  {
    id: 0,
    title: "Projects",
    folderColor: "--react-blue",
    list: [
      {
        id: 7,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "sienna.jsx",
        website: "https://www.sienna.mk/",
        photos: [""],
        text: [
          "/**",
          " * Project: Sienna Pastry Boutique",
          <>
            * <span>Freelance React Developer | Sep 2023 - Aug 2024</span>
          </>,
          " *",
          " * I independently designed and developed the entire website for Sienna Pastry Boutique,",
          " * a premium pastry brand. The project was built using React.js with Framer Motion",
          " * for smooth and engaging animations, enhancing the overall user experience.",
          " *",
          " * Every aspect of the site was carefully planned, from UI/UX design to",
          " * responsiveness and seamless interactions across all devices.",
          " *",
          " * Key Features & Achievements:",
          " * - Developed in React.js with Framer Motion for animations.",
          " * - Used Redux Toolkit for global state management, ensuring efficiency.",
          " * - Designed a modern, user-friendly interface with a fully responsive layout.",
          " * - Implemented a feature-rich cart system that follows best industry standards.",
          " * - Integrated a date-picker in the cart, allowing users to schedule orders,",
          " *   with non-working days clearly labeled for convenience.",
          " * - Built an email notification system using EmailJS, ensuring real-time order",
          " *   confirmations for both customers and the owner.",
          " * - Optimized performance for fast load times and smooth browsing experience.",
          " * - Deployed the website on Vercel with a custom domain setup.",
          " * - Implemented full SEO optimization, including structured data, sitemaps,",
          " *   and integration with Google Search Console for indexing and tracking.",
          " *",
          <>
            * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.sienna.mk/"
            >
              [Sienna Pastry Boutique]
            </a>
          </>,
          " */",
          " ",
        ],
      },
      {
        id: 6,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "learn-hub.tsx",
        code: "https://github.com/learnhubmk/app",
        website: "https://learnhub.mk/",
        photos: [""],
        text: [
          "/**",
          " * Project: LearnHub.mk",
          <>
            * <span>React / Next.js Developer | Mar 2024 - Jun 2024</span>
          </>,
          " *",
          " * Developed a modern learning platform, LearnHub.mk, aimed at empowering web developers",
          " * by providing educational resources, mentorship opportunities, and collaborative projects.",
          " * Worked alongside a team of junior, intermediate, and senior developers, adhering to",
          " * industry standards in code quality and best practices.",
          " *",
          " * Key Features & Achievements:",
          " * - Built with Next.js for server-side rendering, improving SEO and performance.",
          " * - Used React Query for efficient data fetching and state management.",
          " * - Designed a responsive and modern UI using SCSS and React Bootstrap.",
          " * - Implemented community forums for discussions and networking.",
          " * - Developed a collaborative project system where users can contribute to real-world projects.",
          " * - Integrated mentorship features, connecting users with industry professionals.",
          " * - Followed industry best practices with TypeScript, ESLint, and modular SCSS.",
          " *",
          " * The project was a collaborative effort where I worked closely with developers of various",
          " * experience levels, gaining insight into industry-level workflows, and ensuring code",
          " * quality through structured development processes.",
          " *",
          <>
            * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.learnhub.mk/"
            >
              [LearnHub]
            </a>
          </>,
          " *",
          <>
            * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/learnhubmk/app"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },
      {
        id: 5,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "catalyst.tsx",
        code: "https://github.com/GregoriBavaro/Catalyst",
        website: "https://www.catalyst.mk/",
        photos: [""],
        text: [
          "/**",
          " * Project: Catalyst",
          <>
            * <span>Co-Founder & Solo Developer | May 2024 - 2025</span>
          </>,
          " *",
          " * As the co-founder and sole developer, I designed, developed, and launched Catalyst,",
          " * a startup agency specializing in web development, design, and marketing.",
          " * Built the entire Next.js platform, ensuring seamless user experience and advanced",
          " * functionality.",
          " * Responsible for all aspects of development, including SEO, performance, and",
          " * client-focused features.",
          " * Focused on delivering high-quality, responsive solutions, utilizing Framer Motion for",
          " * animations.",
          " *",
          " * Key Features & Achievements:",
          " * - Developed with Next.js, React, SCSS, and TypeScript for modern web architecture.",
          " * - Integrated Framer Motion for smooth animations and enhanced user experience.",
          " * - Optimized SEO with keyword strategies, structured data, and performance improvements.",
          " * - Created responsive, dynamic content, including portfolios and service pages.",
          " * - Managed all aspects of the platform, ensuring top-quality design and functionality.",
          " *",
          " * Catalyst aims to empower businesses by providing tailored solutions to succeed in",
          " * the digital landscape.",
          " *",
          <>
            * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.catalyst.mk/"
            >
              [Catalyst]
            </a>
          </>,
          " *",
          <>
            * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GregoriBavaro/Catalyst"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },
      {
        id: 4,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "mm9-machinery.jsx",
        code: "https://github.com/GregoriBavaro/MM9Machinery",
        website: "https://mm-9-machinery.vercel.app/",
        photos: [""],
        text: [
          "/**",
          " * Project: MM-9 Machinery",
          <>
            * <span>React Developer | Jan 2023 - May 2023</span>
          </>,
          " *",
          " * Worked on a project for a corrugated box manufacturing client, developing an",
          " * end-to-end solution with a team of 3 developers, following Agile methodology.",
          " * Responsible for designing and developing the frontend with React.js, ensuring",
          " * a user-friendly interface with a focus on excellent UX/UI.",
          " * Collaborated closely with the client through meetings to understand and",
          " * implement their requirements.",
          " *",
          " * Key Features & Achievements:",
          " * - Developed with React.js to create a responsive and performant web application.",
          " * - Designed a highly optimized and intuitive frontend for mobile and tablet users.",
          " * - Focused on building responsive components and improving the overall user",
          " *   experience.",
          " * - Ensured fast load times and smooth navigation across the site.",
          " *",
          " * The project was aimed at streamlining the client’s online presence, while",
          " * ensuring a seamless user experience across all devices.",
          " *",
          <>
            , * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mm-9-machinery.vercel.app/"
            >
              [MM-9 Machinery]
            </a>
          </>,
          " *",
          <>
            , * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GregoriBavaro/MM9Machinery"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },
      {
        id: 3,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "binary-brigade.tsx",
        code: "https://github.com/GregoriBavaro/team-web-portfolio",
        website: "https://team-web-portfolio-gregoribavaro.vercel.app/",
        photos: [""],
        text: [
          "/**",
          " * Project: Team Web Portfolio",
          <>
            * <span>React Developer | Jan 2023</span>
          </>,
          " *",
          " * Designed and developed a portfolio website for me and my coding buddies to",
          " * showcase our skills to potential clients and employers.",
          " * Utilized React.js for the development and TypeScript for the first time, ensuring",
          " * better code quality and maintainability.",
          " * The website is modern and desktop-focused, with plans to make it fully responsive",
          " * across all devices, including mobile and tablet. However, the mobile and tablet",
          " * views were not completed as I shifted focus to another project for a company.",
          " *",
          " * Key Features & Achievements:",
          " * - Built using React.js and TypeScript for scalable and maintainable code.",
          " * - First time using max height 100vh, ensuring no scrollable content.",
          " * - Created animations using Framer Motion for a dynamic and engaging user experience.",
          " * - Focused on a sleek, desktop-first design, aimed at showcasing professional portfolios.",
          " *",
          " * Although the website is not yet fully responsive, it serves as a modern showcase",
          " * of my work and skills, as well as my ability to use TypeScript and Framer Motion.",
          " *",
          <>
            * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://team-web-portfolio-gregoribavaro.vercel.app/"
            >
              [Binary Brigade]
            </a>
          </>,
          " *",
          <>
            * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GregoriBavaro/team-web-portfolio"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },

      {
        id: 2,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "web-portfolio.jsx",
        code: "https://github.com/GregoriBavaro/portfolio",
        website: "https://portfolio-wb56.vercel.app/",
        photos: [""],
        text: [
          "/**",
          " * Project: Personal Web Portfolio",
          <>
            * <span>React Developer | 2022</span>
          </>,
          " *",
          " * Designed and developed my very first personal portfolio website to showcase",
          " * the projects I’ve worked on and the skills I've gained as a developer.",
          " * Utilized React.js for the development and Framer Motion for animations, bringing",
          " * the portfolio to life with smooth scrolling effects and dynamic transitions.",
          " * The project showcase section includes scrollable animations, where the text stays",
          " * fixed while the images scroll, offering a creative and engaging way to present my work.",
          " *",
          " * Key Features & Achievements:",
          " * - Built using React.js with animations powered by Framer Motion for a dynamic experience.",
          " * - Implemented scrollable animations with fixed text and scrolling images to showcase projects.",
          " * - Integrated Spine to create 3D objects that interact with the user.",
          " * - Had a great time experimenting with 3D objects and adding interactivity to enhance user engagement.",
          " *",
          " * This project was a fun challenge, where I learned and applied new technologies like Spine",
          " * for 3D objects while improving my frontend skills and creating a unique portfolio.",
          " *",
          <>
            * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://portfolio-wb56.vercel.app/"
            >
              [Personal Web Portfolio]
            </a>
          </>,
          " *",
          <>
            * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GregoriBavaro/portfolio"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },
      {
        id: 1,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "web-portfolio-2.0.tsx",
        code: "https://github.com/GregoriBavaro/Web-Portfolio-2.0",
        website: "",
        photos: [""],
        text: [
          "/**",
          " * Project: Web Portfolio 2.0",
          <>
            * <span>Next.js / TypeScript Developer | 2025</span>
          </>,
          " *",
          " * Designed and developed a modern, responsive web portfolio to showcase my",
          " * skills, projects, and experience as a web developer. This new version replaces",
          " * my previous portfolio, featuring a clean and sleek design with a focus on",
          " * performance, SEO optimization, and improved user experience.",
          " * The design is inspired by VS Code, featuring a fun and interactive interface with tabs",
          " * that mimic the functionality of an actual code editor.",
          " *",
          " * Key Features & Achievements:",
          " * - Built with Next.js for fast performance and server-side rendering.",
          " * - Implemented TypeScript for enhanced type safety and better maintainability.",
          " * - Styled with SCSS, creating a modern and responsive layout that adapts to different screen sizes.",
          " * - Integrated ESLint and Prettier to ensure clean and consistent code.",
          " * - Optimized for SEO to improve visibility and ranking in search engines.",
          " * - The portfolio mimics a VS Code-like interface with tabs, offering a unique and fun experience.",
          " *",
          " * This project is not only a showcase of my work but also an opportunity to experiment",
          " * with new technologies and design concepts, all while creating a functional and engaging portfolio.",
          " *",
          <>
            * Link to project:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web-portfolio-2-0.vercel.app/"
            >
              [Web Portfolio 2.0]
            </a>
          </>,
          " *",
          <>
            * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GregoriBavaro/Web-Portfolio-2.0"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },
      {
        id: 0,
        title: "productivity-app.js",
        icon: (
          <SiJavascript
            style={{ color: "var(--yellow)", fontSize: "1.15rem" }}
          />
        ),
        code: "https://github.com/GregoriBavaro/Productivity-App",
        photos: [""],
        text: [
          "/**",
          " * Project: Productivity App",
          <>
            * <span>Frontend Developer | 2022</span>
          </>,
          " *",
          " * A task and time management web platform designed to improve",
          " * productivity, featuring built-in integrations such as a calendar",
          " * and real-time statistics. This project was my first ever",
          " * development experience and was created in collaboration with",
          " * two other students during our time studying JavaScript at Seavus",
          " * Academy. We initially worked with frontend technologies like JavaScript,",
          " * HTML, and CSS, with a basic backend in .NET, and a",
          " * database to store the app's information. Initially, the app used",
          " * local storage to keep data.",
          " *",
          " * Key Features & Achievements:",
          " * - Developed a task and time management app with real-time updates",
          " * and statistics.",
          " * - Integrated a calendar for users to manage their tasks and",
          " * deadlines.",
          " * - Designed and implemented the user interface for the app and",
          " * later redesigned it as version 2.0.",
          " * - The initial design was outdated, so I took the initiative to",
          " * create a more modern and visually appealing UI.",
          " * - Worked on both frontend and backend of the app, collaborating",
          " * with my teammates to ensure seamless functionality.",
          " *",
          " * This project was an amazing learning experience and a fun",
          " * collaboration that allowed me to see the progression of my",
          " * skills as I moved from a beginner to a more confident",
          " * developer.",
          " *",
          <>
            * Source code:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GregoriBavaro/Productivity-App"
            >
              [GitHub Repository]
            </a>
          </>,
          " */",
          " ",
        ],
      },
    ],
  },
];
