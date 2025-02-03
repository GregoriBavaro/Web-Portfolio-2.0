import styles from "./TextContent.module.scss";

const TextContent = ({ text }: { text: (string | any)[] | undefined }) => {
  return (
    <div className={styles.textContent}>
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
