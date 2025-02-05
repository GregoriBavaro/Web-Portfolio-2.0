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
    folderColor: "--red-orange",
    list: [
      {
        id: 0,
        title: "productivity-app.js",
        icon: <SiJavascript style={{ color: "var(--yellow)", fontSize: "1.15rem"}} />,
        text: [""],
        code: "https://github.com/GregoriBavaro/Productivity-App",
        photos: [""],
      },
      {
        id: 1,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "web-portfolio.jsx",
        text: [""],
        code: "https://github.com/GregoriBavaro/portfolio",
        website: "https://portfolio-wb56.vercel.app/",
        photos: [""],
      },
      {
        id: 2,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "binary-brigade.tsx",
        text: [""],
        code: "https://github.com/GregoriBavaro/team-web-portfolio",
        website: "https://team-web-portfolio-gregoribavaro.vercel.app/",
        photos: [""],
      },
      {
        id: 3,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "mm9-machinery.jsx",
        text: [""],
        code: "https://github.com/GregoriBavaro/MM9Machinery",
        website: "https://mm-9-machinery.vercel.app/",
        photos: [""],
      },
      {
        id: 4,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "sienna.jsx",
        text: [""],
        website: "https://www.sienna.mk/",
        photos: [""],
      },
      {
        id: 5,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "learn-hub.tsx",
        text: [""],
        code: "https://github.com/learnhubmk/app",
        website: "https://learnhub.mk/",
        photos: [""],
      },
      {
        id: 6,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "catalyst.tsx",
        text: [""],
        code: "https://github.com/GregoriBavaro/Catalyst",
        website: "https://www.catalyst.mk/",
        photos: [""],
      },
      {
        id: 7,
        icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
        title: "web-portfolio-2.0.tsx",
        text: [""],
        code: "https://github.com/GregoriBavaro/Web-Portfolio-2.0",
        website: "",
        photos: [""],
      },
    ],
  },
];
