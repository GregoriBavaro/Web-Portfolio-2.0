import HeroSidebar from "./HeroSidebar";

import { IoIosArrowForward } from "react-icons/io";

import styles from "./Hero.module.scss";

import { INFORMATION } from "../../../db/hero";

const Hero = () => {
  
  return (
    <section className={styles.hero}>
      <HeroSidebar />
      <div className={styles.hero__intro}>
        <div>
          <span>Hello, I am</span>
          <h1>Gregori Bavaro</h1>
          <h4>
            <IoIosArrowForward /> Web Developer
          </h4>
        </div>
        <div className={styles["hero__intro-info"]}>
          <ul>
            {INFORMATION.map(({ id, title, text, info }) => (
              <li key={id}>
                <h5>{title}</h5>
                <p>
                  <span>const</span>
                  <span>{text}</span>=<span>{info}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
