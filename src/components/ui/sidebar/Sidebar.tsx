"use client";

import { useEffect } from "react";
import useWindowSize from "../../../hooks/use-windowSize";
import { motion as m, AnimatePresence } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryTab from "./SecondaryMenu";

import { DataProps } from "../../../types/data.types";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ data }: DataProps) => {
  const { isMenuOpen, setMenuOpen } = useSidebarMenu();
  const window = useWindowSize();

  const sidebarVariants = {
    open: {
      x: "0%",
      transition: { duration: 0.25, ease: "easeInOut" }, 
    },
    closed: {
      x: "-100%",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };
  

  const isNotMobile = (window.width ?? 767) > 767;

  useEffect(() => {
    if (isNotMobile && !isMenuOpen) {
      setMenuOpen(true);
    } else if (!isNotMobile && isMenuOpen) {
      setMenuOpen(false); // Optionally close it when switching back to mobile
    }
  }, [isNotMobile]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.section
          initial={isNotMobile ? "open" : "closed"}
          animate="open"
          exit={isNotMobile ? undefined : "closed"}
          variants={sidebarVariants}
          className={styles.sidebar}
          style={{ transform: "translateZ(0)" }}
        >
          <PrimaryMenu data={data} />
          <SecondaryTab />
        </m.section>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
