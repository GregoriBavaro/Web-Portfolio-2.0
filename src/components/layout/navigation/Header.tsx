"use client";

import { usePathname } from "next/navigation";
import useWindowSize from "../../../hooks/use-windowSize";
import { useSidebarMenu } from "../../../store/store";
import { Squash as Hamburger } from "hamburger-react";

import TransitionLink from "../../../utils/TransitionLink";

import styles from "./Header.module.scss";

const PATHS = [
  { id: 0, title: "_hello", path: "/" },
  { id: 1, title: "_about-me", path: "/about" },
  { id: 2, title: "_projects", path: "/projects" },
];

const Header = () => {
  const pathname = usePathname();
  const window = useWindowSize();
  const { setMenuOpen, isMenuOpen } = useSidebarMenu();

  const mobile =
    (window.width ?? 767) < 767 ? (
      <Hamburger size={20} toggled={isMenuOpen} toggle={() => setMenuOpen(!isMenuOpen)}/>
    ) : (
      <span>gregori - bavaro</span>
    );

  return (
    <header className={styles.header}>
      <div className={styles.header__name}>{mobile}</div>
      <nav className={styles.header__navigation}>
        <ul>
          {PATHS.map(({ id, title, path }) => (
            <li key={id} className={pathname === path ? styles.active : ""}>
              <TransitionLink href={path}>{title}</TransitionLink>
            </li>
          ))}
          <li className={styles["header__navigation-cv"]}>
            <a
              href="/Gregori-Bavaro-Portfolio.pdf"
              download="Gregori-Bavaro-Portfolio.pdf"
            >
              Download Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
