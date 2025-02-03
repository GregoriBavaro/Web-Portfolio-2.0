import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";

import { useSidebarMenu } from "../../../store/store";

import { BiSolidInfoCircle } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

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
  const { showDocument } = useSidebarMenu();
  const pathname = usePathname();

  const icon =
    pathname === "/about" ? (
      <BiSolidInfoCircle style={{ color: "var(--sky-blue)" }} />
    ) : (
      <FaReact />
    );
  return (
    <div className={styles.currentTab}>
      <m.div {...showTab} className={styles.currentTab__tab}>
        <div>
          <span>{icon}</span>
          {showDocument}
        </div>
      </m.div>
      <span />
    </div>
  );
};

export default CurrentTab;
