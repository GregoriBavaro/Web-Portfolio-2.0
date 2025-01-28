import TransitionLink from "../../../utils/TransitionLink";

import styles from "./Header.module.scss";

const PATHS = [
  { id: 0, title: "_hello", path: "/" },
  { id: 1, title: "_about-me", path: "/about" },
  { id: 2, title: "_projects", path: "/projects" },
  { id: 3, title: "_contact-me", path: "/contact" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__name}>
        <span>gregori - bavaro</span>
      </div>
      <nav className={styles.header__navigation}>
        <ul>
          {PATHS.map(({ id, title, path }) => (
            <TransitionLink key={id} href={path}>
              {title}
            </TransitionLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
