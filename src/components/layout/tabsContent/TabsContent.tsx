"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";

import { BiSolidInfoCircle } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

import styles from "./TabsContent.module.scss";

interface SidebarProps {
  data: Array<{
    id: number;
    title: string;
    folderColor: string;
    list: Array<{ id: number; title: string; text: string[] }>;
  }>;
}

const TabsContent = ({ data }: SidebarProps) => {
  const { setShowDocument, showDocument } = useSidebarMenu();
  const pathname = usePathname();

  useEffect(() => {
    const defaultShowDocument = data[0].list[0].title;
    setShowDocument(defaultShowDocument);
  }, [data, setShowDocument]);

  const findInfoByTitle = (searchTitle: string): string[] | undefined => {
    for (const category of data) {
      const found = category.list.find((item) => item.title == searchTitle);
      if (found) {
        return found.text;
      }
    }
    return undefined;
  };

  const text = findInfoByTitle(showDocument);

  const icon =
    pathname === "/about" ? (
      <BiSolidInfoCircle style={{ color: "var(--sky-blue)" }} />
    ) : (
      <FaReact />
    );

  const showTab = {
    initial: { width: 0, borderRight: "none" },
    animate: {
      width: "fit-content",
      borderRight: "1px solid var(--steel-blue)",
    },
    exit: { width: "auto", borderRight: "none" },
    transition: { duration: 0.2, delay: 0.3, ease: "linear" },
  };

  return (
    <section className={styles.tabsContent}>
      <div className={styles.tabsContent__tab}>
        <m.div {...showTab} className={styles["tabsContent__tab-active"]}>
          <div>
            <span>{icon}</span>
            {showDocument}
          </div>
        </m.div>
        <span />
      </div>
      <div className={styles.tabsContent__content}>
        <ul className={styles["tabsContent__content-numbers"]}>
          {text?.map((item, id) => <li key={id}>{id + 1}</li>)}
        </ul>
        <ul className={styles["tabsContent__content-text"]}>
          {text?.map((item, id) => <li key={id}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default TabsContent;
