import { useRef, useEffect } from "react";

import styles from "./TextContent.module.scss";

const TextContent = ({ text }: { text: (string | any)[] | undefined }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [text]);

  return (
    <div ref={textRef} className={styles.textContent}>
      <ul className={styles.textContent__numbers}>
        {text?.map((__, id) => <li key={id}>{id + 1}</li>)}
      </ul>
      <ul className={styles.textContent__text}>
        {text?.map((item, id) => <li key={id}>{item}</li>)}
      </ul>
    </div>
  );
};

export default TextContent;
