"use client";

import { useEffect } from "react";
import useWindowSize from "../../../hooks/use-windowSize";
import { motion as m, AnimatePresence } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryTab from "./SecondaryMenu";

import { DataProps } from "../../../types/data.types";

import styles from "./Sidebar.module.scss";

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

const Sidebar = ({ data }: DataProps) => {
  const { isMenuOpen, setMenuOpen } = useSidebarMenu();
  const window = useWindowSize();
  const isNotMobile = (window.width ?? 767) > 767;

  useEffect(() => {
    if (isNotMobile && !isMenuOpen) {
      setMenuOpen(true);
    } else if (!isNotMobile && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [isNotMobile]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.section
          
          className={styles.sidebar}
          style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)" }}
        >
          <PrimaryMenu data={data} />
          <SecondaryTab />
        </m.section>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
