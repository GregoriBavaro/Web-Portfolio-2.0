import { ProgrammingLanguagesProps } from "./programming-languages.types";
import { TimelineProps } from "./timeline.types";

export interface DataProps {
  data: {
    id: number;
    title: string;
    folderColor: string;
    list: {
      id: number;
      icon: React.ReactElement | null;
      title: string;
      text: (string | any)[];
      programmingLanguages?: ProgrammingLanguagesProps[];
      timeline?: TimelineProps[];
    }[];
  }[];
}
