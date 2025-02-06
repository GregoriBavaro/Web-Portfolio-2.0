"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";

import ToggleMenu from "./ToggleMenu";

import { accordionAnimation } from "../../../utils/AccordionAnimation";

import { DataProps } from "../../../types/data.types";

import { IoIosArrowDown } from "react-icons/io";
import { FaFolderClosed } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";

import styles from "./PrimaryMenu.module.scss";

const PrimaryMenu = ({ data }: DataProps) => {
  const {
    isPrimaryTab,
    expendedMenus,
    toggleMenu,
    showDocument,
    setShowDocument,
    setDocumentIcon,
  } = useSidebarMenu();

  const handleClickedTopic = (id: number) => {
    toggleMenu(id);
  };

  const handleFolderIcon = (id: number, folderColor: string) => {
    return expendedMenus[id] ? (
      <FaFolderOpen style={{ color: `var(${folderColor})`, fontSize:"1.4rem" }} />
    ) : (
      <FaFolderClosed style={{ color: `var(${folderColor})` }} />
    );
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
                    {handleFolderIcon(id, folderColor)}
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
                          {list.map(({ id, title, icon }) => (
                            <li
                              key={id}
                              className={
                                styles[
                                  "primaryMenu__navigation-item__submenu-item"
                                ]
                              }
                              onClick={() => {
                                setShowDocument(title);
                                setDocumentIcon(icon || <span />);
                              }}
                            >
                              {icon}
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
