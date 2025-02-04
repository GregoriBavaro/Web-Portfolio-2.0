"use client";

import { usePathname } from "next/navigation";
import TransitionLink from "../../../utils/TransitionLink";

import styles from "./Header.module.scss";

const PATHS = [
  { id: 0, title: "_hello", path: "/" },
  { id: 1, title: "_about-me", path: "/about" },
  { id: 2, title: "_projects", path: "/projects" },
  { id: 3, title: "_contact-me", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.header__name}>
        <span>gregori - bavaro</span>
      </div>
      <nav className={styles.header__navigation}>
        <ul>
          {PATHS.map(({ id, title, path }) => (
            <li key={id} className={pathname === path ? styles.active : ""}>
              <TransitionLink href={path}>{title}</TransitionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
