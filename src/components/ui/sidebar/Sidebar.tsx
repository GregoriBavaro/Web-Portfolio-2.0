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
      transition: { duration: 0.3, ease: "linear" },
    },
    closed: {
      x: "-100%",
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  const isNotMobile = (window.width ?? 767) > 767;

  useEffect(() => {
    if (isNotMobile) {
      setMenuOpen(true);
    }
  }, [window]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.section
          layoutId="sidebar"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className={styles.sidebar}
        >
          <PrimaryMenu data={data} />
          <SecondaryTab />
        </m.section>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
