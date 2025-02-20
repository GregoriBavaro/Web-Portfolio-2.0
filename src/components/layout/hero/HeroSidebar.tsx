"use client";

import { useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useSidebarMenu } from "../../../store/store";
import useWindowSize from "../../../hooks/use-windowSize";

import SecondaryTab from "../../../components/ui/sidebar/SecondaryMenu";

import styles from "./HeroSidebar.module.scss";

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

const HeroSidebar = () => {
  const { isMenuOpen, setMenuOpen } = useSidebarMenu();
  const window = useWindowSize();

  const isNotMobile = (window.width ?? 767) > 767;

  useEffect(() => {
    if (isNotMobile) {
      setMenuOpen(true);
    }
  }, [window]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.div
          layoutId="sidebar"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className={styles.heroSidebar}
        >
          <SecondaryTab />
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default HeroSidebar;
