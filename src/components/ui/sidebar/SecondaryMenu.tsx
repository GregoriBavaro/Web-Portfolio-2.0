"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";

import { accordionAnimation } from "../../../utils/AccordionAnimation";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./SecondaryMenu.module.scss";

const SecondaryTab = () => {
  const { isSecondaryTab } = useSidebarMenu();

  return (
    <div className={styles.secondaryMenu}>
      <div
        className={styles.secondaryMenu__header}
        onClick={() =>
          useSidebarMenu.setState((state) => ({
            isSecondaryTab: !state.isSecondaryTab,
          }))
        }
      >
        <IoIosArrowDown
          style={{ rotate: !isSecondaryTab ? "-90deg" : "0deg" }}
        />
        <span>contact</span>
      </div>
      <AnimatePresence>
        {isSecondaryTab && (
          <m.div
            {...accordionAnimation}
            className={styles.secondaryMenu__navigation}
          >
            <ul className={styles["secondaryMenu__navigation-list"]}>
              <li>
                <a href="tel:+389 70359589">
                  <BsFillTelephoneFill />
                  <span>+389 70359589</span>
                </a>
              </li>
              <li>
                <a href="mailto:greg.gego@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out.">
                  <MdEmail />
                  <span>greg.gego@gmail.com</span>
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecondaryTab;
