import { IoIosArrowForward } from "react-icons/io";

import styles from "./Hero.module.scss";

const INFORMATION = [
  { id: 0, title: "// my number", text: "telephoneNum", info: "389 70 359 589;" },
  { id: 1, title: "// my e-mail", text: "email", info: '"greg.gego@gmail.com";' },
  {
    id: 2,
    title: "// you can also see my Github page",
    text: "githubLink",
    info: '"https://github.com/GregoriBavaro";',
  },
  {
    id: 3,
    title: "// you can check my LinkedIn page",
    text: "linkedinPage",
    info: '"https://www.linkedin.com/in/gregori-bavaro/";',
  },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__intro}>
        <span>Hello, I am</span>
        <h1>Gregori Bavaro</h1>
        <h4>
          <IoIosArrowForward /> Web Developer
        </h4>
      </div>
      <div className={styles.hero__info}>
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
    </section>
  );
};

export default Hero;
