import { motion as m } from "framer-motion";

import { useSidebarMenu } from "../../../store/store";

import styles from "./CurrentTab.module.scss";

const showTab = {
  initial: { width: 0, borderRight: "none" },
  animate: {
    width: "fit-content",
    borderRight: "1px solid var(--steel-blue)",
  },
  exit: { width: "auto", borderRight: "none" },
  transition: { duration: 0.2, delay: 0.3, ease: "linear" },
};

const CurrentTab = () => {
  const { showDocument, documentIcon } = useSidebarMenu();

  return (
    <div className={styles.currentTab}>
      <m.div {...showTab} className={styles.currentTab__tab}>
        <div>
          <span>{documentIcon}</span>
          {showDocument}
        </div>
      </m.div>
      <span />
    </div>
  );
};

export default CurrentTab;
