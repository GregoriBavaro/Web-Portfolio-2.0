import { FaReact } from "react-icons/fa";

import mobile1 from "../../assets/mocks/portfolio/mobile/mobile (1).png";
import mobile2 from "../../assets/mocks/portfolio/mobile/mobile (2).png";

import tablet1 from "../../assets/mocks/portfolio/tablet/tablet (1).png";
import tablet2 from "../../assets/mocks/portfolio/tablet/tablet (2).png";

import desktop1 from "../../assets/mocks/portfolio/desktop/desktop (1).png";
import desktop2 from "../../assets/mocks/portfolio/desktop/desktop (2).png";
import desktop3 from "../../assets/mocks/portfolio/desktop/desktop (3).png";

export const PORTFOLIO = {
  id: 2,
  icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
  title: "web-portfolio.jsx",
  sourceCode: "https://github.com/GregoriBavaro/portfolio",
  website: "https://portfolio-wb56.vercel.app/",
  mocks: [mobile1, mobile2, tablet2, tablet1, desktop1, desktop2, desktop3],
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
};
