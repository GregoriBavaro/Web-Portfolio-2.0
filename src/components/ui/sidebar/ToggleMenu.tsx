import { IoIosArrowDown } from "react-icons/io";

import styles from "./ToggleMenu.module.scss";

interface ToggleMenuProps {
  menuName: string;
  isTabOpen: boolean;
  setTab: () =>  void;
}

const ToggleMenu = ({ menuName, setTab, isTabOpen }: ToggleMenuProps) => {
  return (
    <div className={styles.toggleMenu} onClick={setTab}>
      <IoIosArrowDown style={{ rotate: !isTabOpen ? "-90deg" : "0deg" }} />
      <span>{menuName}</span>
    </div>
  );
};

export default ToggleMenu;
