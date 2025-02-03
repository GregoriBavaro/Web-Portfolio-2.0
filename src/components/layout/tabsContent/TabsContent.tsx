"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSidebarMenu } from "../../../store/store";

import CurrentTab from "./CurrentTab";
import TextContent from "./TextContent";
import ProgrammingLanguagesContent from "./ProgrammingLanguagesContent";

import { AboutProps } from "../../../types/about.types";

import { IoCheckboxSharp } from "react-icons/io5";

import styles from "./TabsContent.module.scss";

const TabsContent = ({ data }: AboutProps) => {
  const { setShowDocument, showDocument } = useSidebarMenu();

  useEffect(() => {
    const defaultShowDocument = data[0].list[0].title;
    setShowDocument(defaultShowDocument);
  }, [data, setShowDocument]);

  const findInfoByTitle = (searchTitle: string) => {
    return data
      .flatMap((category) => category.list)
      .find((item) => item.title === searchTitle);
  };

  const description = findInfoByTitle(showDocument);

  return (
    <section className={styles.tabsContent}>
      <CurrentTab />
      <div className={styles.tabsContent__content}>
        <TextContent text={description?.text} />
        {(description?.programmingLanguages ?? []).length > 0 && (
          <ProgrammingLanguagesContent
            data={description?.programmingLanguages}
          />
        )}
      </div>
    </section>
  );
};

export default TabsContent;
