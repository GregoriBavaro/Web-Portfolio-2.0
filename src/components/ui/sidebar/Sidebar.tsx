import PrimaryMenu from "./PrimaryMenu";
import SecondaryTab from "./SecondaryMenu";

import { AboutProps } from "../../../types/about.types";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ data }: AboutProps) => {
  return (
    <section className={styles.sidebar}>
      <PrimaryMenu data={data} />
      <SecondaryTab />
    </section>
  );
};

export default Sidebar;
