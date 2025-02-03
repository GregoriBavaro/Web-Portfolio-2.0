import Image from "next/image";

import { ProgrammingLanguagesProps } from "../../../types/programming-languages.types";

import { IoCheckboxSharp } from "react-icons/io5";

import styles from "./ProgrammingLanguagesContent.module.scss";

const ProgrammingLanguagesContent = ({
  data,
}: {
  data: ProgrammingLanguagesProps[] | undefined;
}) => {
  return (
    <ul className={styles.programmingLanguages}>
      {data?.map(({ id, title, list }) => (
        <li key={id} className={styles.programmingLanguages__item}>
          <span>{title}</span>
          <ul className={styles["programmingLanguages__item-sublist"]}>
            {list.map(({ id, title, icon }) => (
              <li
                key={id}
                className={styles["programmingLanguages__item-subitem"]}
              >
                <IoCheckboxSharp style={{ fontSize: 23 }} />
                <Image
                  src={icon}
                  alt={`${title}-icon`}
                  width={20}
                  height={20}
                />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProgrammingLanguagesContent;
