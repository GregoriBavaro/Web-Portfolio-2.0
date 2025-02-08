import { StaticImageData } from "next/image";

import { SIENNA } from "./sienna";
import { LEARNHUB } from "./learn-hub";
import { CATALYST } from "./catalyst";
import { MM9 } from "./mm9";
import { BINARY } from "./binary";
import { PORTFOLIO } from "./portfolio";
import { PORTFOLIO2 } from "./portfolio-2.0";
import { PRODUCTIVITY } from "./productivity-app";

type MenuItem = {
  id: number;
  title: string;
  folderColor: string;
  list: {
    id: number;
    title: string;
    icon: React.ReactElement | null;
    text: (string | any)[];
    sourceCode?: string;
    website?: string;
    mocks: StaticImageData[];
  }[];
};

export const PROJECTS: MenuItem[] = [
  {
    id: 0,
    title: "Projects",
    folderColor: "--react-blue",
    list: [
      SIENNA,
      LEARNHUB,
      CATALYST,
      MM9,
      BINARY,
      PORTFOLIO,
      PORTFOLIO2,
      PRODUCTIVITY,
    ],
  },
];
