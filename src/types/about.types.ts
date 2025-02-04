import { ProgrammingLanguagesProps } from "./programming-languages.types";
import { TimelineProps } from "./timeline.types";

export interface AboutProps {
  data: {
    id: number;
    title: string;
    folderColor: string;
    list: {
      id: number;
      title: string;
      text: (string | any)[];
      programmingLanguages?: ProgrammingLanguagesProps[];
      timeline?: TimelineProps[];
    }[];
  }[];
}
