"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";

import { BiSolidInfoCircle } from "react-icons/bi";
import { IoCheckboxSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import styles from "./TabsContent.module.scss";

interface TabsContentProps {
  data: {
    id: number;
    title: string;
    folderColor: string;
    list: {
      id: number;
      title: string;
      description: (string | any)[];
      visualDescription?: {
        id: number;
        title: string;
        list: Array<{ id: number; title: string; icon: StaticImageData }>;
      }[];
    }[];
  }[];
}

const TabsContent = ({ data }: TabsContentProps) => {
  const { setShowDocument, showDocument } = useSidebarMenu();
  const pathname = usePathname();

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
        <div className={styles["tabsContent__content-group"]}>
          <ul className={styles["tabsContent__content-numbers"]}>
            {description?.description.map((__, id) => (
              <li key={id}>{id + 1}</li>
            ))}
          </ul>
          <ul className={styles["tabsContent__content-text"]}>
            {description?.description.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
        {description?.visualDescription && (
          <div>
            <ul className={styles["tabsContent__content-visual"]}>
              {description?.visualDescription?.map(({ id, title, list }) => (
                <li
                  key={id}
                  className={styles["tabsContent__content-visual-item"]}
                >
                  <span>{title}</span>
                  <ul className={styles["tabsContent__content-visual-sublist"]}>
                    {list.map(({ id, title, icon }) => (
                      <li
                        key={id}
                        className={
                          styles["tabsContent__content-visual-subitem"]
                        }
                      >
                        <IoCheckboxSharp style={{ fontSize: 23 }} />
                        <Image
                          src={icon}
                          alt={`${title}-icon`}
                          width={20}
                          height={20}
                        />
                        <span>{title}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsContent;
