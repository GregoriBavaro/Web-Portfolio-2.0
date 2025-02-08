import mobile1 from "../../assets/mocks/learnhub/mobile/mobile (1).png";
import mobile2 from "../../assets/mocks/learnhub/mobile/mobile (2).png";

import tablet1 from "../../assets/mocks/learnhub/tablet/tablet (1).png";
import tablet2 from "../../assets/mocks/learnhub/tablet/tablet (2).png";
import tablet3 from "../../assets/mocks/learnhub/tablet/tablet (3).png";
import tablet4 from "../../assets/mocks/learnhub/tablet/tablet (4).png";

import desktop1 from "../../assets/mocks/learnhub/desktop/desktop (1).png";
import desktop2 from "../../assets/mocks/learnhub/desktop/desktop (2).png";
import desktop3 from "../../assets/mocks/learnhub/desktop/desktop (3).png";

import { FaReact } from "react-icons/fa";

export const LEARNHUB = {
  id: 6,
  icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
  title: "learn-hub.tsx",
  sourceCode: "https://github.com/learnhubmk/app",
  website: "https://learnhub.mk/",
  mocks: [
    mobile1,
    mobile2,
    tablet1,
    tablet2,
    tablet3,
    tablet4,
    desktop1,
    desktop2,
    desktop3,
  ],
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
};
