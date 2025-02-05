import PrimaryMenu from "./PrimaryMenu";
import SecondaryTab from "./SecondaryMenu";

import { DataProps } from "../../../types/data.types";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ data }: DataProps) => {
  return (
    <section className={styles.sidebar}>
      <PrimaryMenu data={data} />
      <SecondaryTab />
    </section>
  );
};

export default Sidebar;
