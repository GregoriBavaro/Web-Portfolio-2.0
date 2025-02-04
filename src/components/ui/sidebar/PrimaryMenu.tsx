"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";

import ToggleMenu from "./ToggleMenu";

import { accordionAnimation } from "../../../utils/AccordionAnimation";

import { AboutProps } from "../../../types/about.types";

import { IoIosArrowDown } from "react-icons/io";
import { FaFolderClosed } from "react-icons/fa6";
import { BiSolidInfoCircle } from "react-icons/bi";

import styles from "./PrimaryMenu.module.scss";

const PrimaryMenu = ({ data }: AboutProps) => {
  const {
    isPrimaryTab,
    expendedMenus,
    toggleMenu,
    showDocument,
    setShowDocument,
  } = useSidebarMenu();

  const handleClickedTopic = (id: number) => {
    toggleMenu(id);
  };
  return (
    <div className={styles.primaryMenu}>
      <ToggleMenu
        setTab={() =>
          useSidebarMenu.setState((state) => ({
            isPrimaryTab: !state.isPrimaryTab,
          }))
        }
        menuName="personal-info"
        isTabOpen={isPrimaryTab}
      />
      <AnimatePresence>
        {isPrimaryTab && (
          <m.div
            {...accordionAnimation}
            className={styles.primaryMenu__navigation}
          >
            <ul className={styles["primaryMenu__navigation-list"]}>
              {data.map(({ id, title, list, folderColor }) => (
                <li key={id} className={styles["primaryMenu__navigation-item"]}>
                  <div
                    onClick={() => handleClickedTopic(id)}
                    className={styles["primaryMenu__navigation-item__header"]}
                  >
                    <IoIosArrowDown
                      style={{ rotate: !expendedMenus[id] ? "-90deg" : "0deg" }}
                    />
                    <FaFolderClosed style={{ color: `var(${folderColor})` }} />
                    <span
                      style={{
                        color: expendedMenus[id]
                          ? "var(--white)"
                          : "var(--foreground)",
                      }}
                    >
                      {title}
                    </span>
                  </div>
                  <AnimatePresence>
                    {expendedMenus[id] && (
                      <m.ul
                        className={
                          styles["primaryMenu__navigation-item__submenu"]
                        }
                        {...accordionAnimation}
                      >
                        <div>
                          {list.map(({ id, title }) => (
                            <li
                              key={id}
                              className={
                                styles[
                                  "primaryMenu__navigation-item__submenu-item"
                                ]
                              }
                              onClick={() => setShowDocument(title)}
                            >
                              <BiSolidInfoCircle />
                              <span
                                style={{
                                  color:
                                    title === showDocument
                                      ? "var(--white)"
                                      : "var(--foreground)",
                                }}
                              >
                                {title}
                              </span>
                            </li>
                          ))}
                        </div>
                      </m.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrimaryMenu;
