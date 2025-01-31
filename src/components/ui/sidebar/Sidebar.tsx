"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";

import { IoIosArrowDown } from "react-icons/io";
import { FaFolderClosed } from "react-icons/fa6";
import { BiSolidInfoCircle } from "react-icons/bi";

import styles from "./Sidebar.module.scss";

const accordionAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      height: {
        duration: 0.15,
      },
      ease: "linear",
    },
  },
  exit: {
    height: 0,
    transition: {
      height: {
        duration: 0.15,
      },
      ease: "linear",
    },
  },
};

interface SidebarProps {
  data: Array<{
    id: number;
    title: string;
    folderColor: string;
    list: Array<{ id: number; title: string; text: string[] }>;
  }>;
}

const Sidebar = ({ data }: SidebarProps) => {
  const { isOpen, expendedMenus, toggleMenu, showDocument, setShowDocument } =
    useSidebarMenu();

  const handleMenu = () => {
    useSidebarMenu.setState((state) => ({ isOpen: !state.isOpen }));
  };

  const handleClickedTopic = (id: number) => {
    toggleMenu(id);
  };

  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__header} onClick={handleMenu}>
        <IoIosArrowDown style={{ rotate: !isOpen ? "-90deg" : "0deg" }} />
        <span>personal-info</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <m.ul {...accordionAnimation} className={styles.sidebar__navigation}>
            {data.map(({ id, title, list, folderColor }) => (
              <li key={id} className={styles["sidebar__navigation-item"]}>
                <div
                  onClick={() => handleClickedTopic(id)}
                  className={styles["sidebar__navigation-item__header"]}
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
                      {...accordionAnimation}
                      className={styles["sidebar__navigation-item__submenu"]}
                    >
                      {list.map(({ id, title }) => (
                        <li
                          key={id}
                          className={
                            styles["sidebar__navigation-item__submenu-item"]
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
                    </m.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Sidebar;
