import { StaticImageData } from "next/image";

import { ProgrammingLanguagesProps } from "./programming-languages.types";
import { TimelineProps } from "./timeline.types";

export interface DataProps {
  data: {
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
      mocks?: StaticImageData[];
      programmingLanguages?: ProgrammingLanguagesProps[];
      timeline?: TimelineProps[];
    }[];
  }[];
}
