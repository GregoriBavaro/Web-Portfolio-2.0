"use client";

import { useEffect } from "react";
import { useSidebarMenu } from "../../../store/store";

import CurrentTab from "./CurrentTab";
import TextContent from "./TextContent";
import ProgrammingLanguagesContent from "./ProgrammingLanguagesContent";
import TimelineContent from "./TimelineContent";

import { DataProps } from "../../../types/data.types";

import styles from "./TabsContent.module.scss";

const TabsContent = ({ data }: DataProps) => {
  const { setShowDocument, showDocument, setDocumentIcon } = useSidebarMenu();

  useEffect(() => {
    const defaultShowDocument = data[0].list[0].title;
    setShowDocument(defaultShowDocument);

    const defaultIcon = data[0].list[0].icon || <span />;
    setDocumentIcon(defaultIcon)
  }, [data, setShowDocument, setDocumentIcon]);

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
        {Array.isArray(description?.programmingLanguages) &&
          description.programmingLanguages.length > 0 && (
            <ProgrammingLanguagesContent
              data={description?.programmingLanguages}
            />
          )}
        {Array.isArray(description?.timeline) &&
          description.timeline.length > 0 && (
            <TimelineContent data={description.timeline} />
          )}
      </div>
    </section>
  );
};

export default TabsContent;
