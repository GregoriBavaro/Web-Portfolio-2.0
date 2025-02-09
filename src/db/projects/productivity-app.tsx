import { SiJavascript } from "react-icons/si";

import mobile1 from "../../assets/mocks/productivity/mobile/mobile (1).png";
import mobile2 from "../../assets/mocks/productivity/mobile/mobile (2).png";
import mobile3 from "../../assets/mocks/productivity/mobile/mobile (3).png";
import mobile4 from "../../assets/mocks/productivity/mobile/mobile (4).png";

import tablet1 from "../../assets/mocks/productivity/tablet/tablet (1).png";
import tablet2 from "../../assets/mocks/productivity/tablet/tablet (2).png";
import tablet3 from "../../assets/mocks/productivity/tablet/tablet (3).png";

import desktop1 from "../../assets/mocks/productivity/desktop/desktop (1).png";
import desktop2 from "../../assets/mocks/productivity/desktop/desktop (2).png";

export const PRODUCTIVITY = {
  id: 0,
  title: "productivity-app.js",
  icon: (
    <SiJavascript style={{ color: "var(--yellow)", fontSize: "1.15rem" }} />
  ),
  sourceCode: "https://github.com/GregoriBavaro/Productivity-App",
  mocks: [
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    tablet1,
    tablet2,
    tablet3,
    desktop1,
    desktop2,
  ],
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
};
