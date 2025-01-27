import { FaFacebookF } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";

import styles from "./Footer.module.scss";

const SOCIAL_MEDIA = [
  {
    id: 0,
    icon: <FaFacebookF style={{ fontSize: "1.3rem" }} />,
    href: "https://www.facebook.com/share/1EHa1ZWSsj/?mibextid=wwXIfr",
  },
  {
    id: 1,
    icon: <GrLinkedinOption style={{ fontSize: "1.3rem" }} />,
    href: "https://www.linkedin.com/in/gregori-bavaro/",
  },
  {
    id: 2,
    icon: <ImGithub style={{ fontSize: "1.3rem" }} />,
    href: "https://github.com/GregoriBavaro",
    title: "@GregoriBavaro",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__name}>
        <span>Find me in:</span>
      </div>
      <ul className={styles.footer__list}>
        {SOCIAL_MEDIA.map(({ id, icon, href, title }) => (
          <li key={id}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title ? <span>{title}</span> : ""}
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
