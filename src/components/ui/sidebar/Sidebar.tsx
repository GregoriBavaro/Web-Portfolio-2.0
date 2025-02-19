"use client";

import { useSidebarMenu } from "../../../store/store";
import useWindowSize from "../../../hooks/use-windowSize";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryTab from "./SecondaryMenu";

import { DataProps } from "../../../types/data.types";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ data }: DataProps) => {
  const window = useWindowSize();
  const { isMenuOpen } = useSidebarMenu();

  const mobile = (window.width ?? 767) < 767;

  return (
    <section
      style={{
        width: isMenuOpen || !mobile ? "304.46px" : "0px",
        minWidth: isMenuOpen || !mobile ? "304.46px" : "0px",
      }}
      className={styles.sidebar}
    >
      <PrimaryMenu data={data} />
      <SecondaryTab />
    </section>
  );
};

export default Sidebar;
