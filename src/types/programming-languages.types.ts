import { StaticImageData } from "next/image";

export interface ProgrammingLanguagesProps {
  id: number;
  title: string;
  list: { id: number; title: string; icon: StaticImageData }[];
}

