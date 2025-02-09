import { FaReact } from "react-icons/fa";

import tablet1 from "../../assets/mocks/binary/tablet/tablet (1).png";
import tablet2 from "../../assets/mocks/binary/tablet/tablet (2).png";

import desktop1 from "../../assets/mocks/binary/desktop/desktop (1).png";
import desktop2 from "../../assets/mocks/binary/desktop/desktop (2).png";
import desktop3 from "../../assets/mocks/binary/desktop/desktop (3).png";

export const BINARY = {
  id: 3,
  icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
  title: "binary-brigade.tsx",
  sourceCode: "https://github.com/GregoriBavaro/team-web-portfolio",
  website: "https://binary-brigade.vercel.app/",
  mocks: [tablet1, tablet2, desktop1, desktop2, desktop3],
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
        href="https://binary-brigade.vercel.app/"
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
};
