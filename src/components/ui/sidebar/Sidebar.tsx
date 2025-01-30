"use client";

import { AnimatePresence, motion as m } from "framer-motion";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FaFolderClosed } from "react-icons/fa6";
import { BiSolidInfoCircle } from "react-icons/bi";

import styles from "./Sidebar.module.scss";

const MENU_LIST = [
  {
    id: 0,
    title: "bio",
    folderColor: "--red-orange",
    list: [
      { id: 0, title: "summery.md", text: "" },
      { id: 1, title: "career-goals.md", text: "" },
      { id: 3, title: "fun-facts.md", text: "" },
    ],
  },
  {
    id: 1,
    title: "languages",
    folderColor: "--amber",
    list: [
      { id: 0, title: "programming-languages.md", text: "" },
      { id: 1, title: "spoken-languages.md", text: "" },
    ],
  },
  {
    id: 2,
    title: "interest",
    folderColor: "--emerald-green",
    list: [
      { id: 0, title: "web-development.md", text: "" },
      { id: 1, title: "open-source-contributions.md", text: "" },
      { id: 3, title: "hobbies.md", text: "" },
    ],
  },
  {
    id: 3,
    title: "education",
    folderColor: "--deep-purple",
    list: [
      { id: 0, title: "high-school.md", text: "" },
      { id: 1, title: "university.md", text: "" },
      { id: 2, title: "certifications.md", text: "" },
    ],
  },
  {
    id: 4,
    title: "experience",
    folderColor: "--orchid-purple",
    list: [
      { id: 0, title: "work.md", text: "" },
      { id: 1, title: "freelance.md", text: "" },
    ],
  },
];

const topicStyles = {
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

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [clickedMenu, setClickedMenu] = useState<{ [id: number]: boolean }>({});

  const handleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const handleClickedTopic = (id: number) => {
    setClickedMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__header} onClick={handleMenu}>
        <IoIosArrowDown style={{ rotate: !isMenuOpen ? "-90deg" : "0deg" }} />
        <span>personal-info</span>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <m.ul {...topicStyles} className={styles.sidebar__navigation}>
            {MENU_LIST.map(({ id, title, list, folderColor }) => (
              <li key={id} className={styles["sidebar__navigation-item"]}>
                <div
                  onClick={() => handleClickedTopic(id)}
                  className={styles["sidebar__navigation-item__header"]}
                >
                  <IoIosArrowDown
                    style={{ rotate: !clickedMenu[id] ? "-90deg" : "0deg" }}
                  />
                  <FaFolderClosed style={{ color: `var(${folderColor})` }} />
                  {title}
                </div>
                {clickedMenu[id] && (
                  <ul className={styles["sidebar__navigation-item__submenu"]}>
                    {list.map(({ id, title }) => (
                      <li
                        key={id}
                        className={
                          styles["sidebar__navigation-item__submenu-item"]
                        }
                      >
                        <BiSolidInfoCircle
                          style={{
                            color: "var(--sky-blue)",
                          }}
                        />
                        {title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Sidebar;
