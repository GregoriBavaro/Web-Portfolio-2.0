import TransitionLink from "../../../utils/TransitionLink";

import { TimelineProps } from "../../../types/timeline.types";

import styles from "./TimelineContent.module.scss";

const TimelineContent = ({ data }: { data: TimelineProps[] }) => {
  return (
    <div className={styles.timelineContent}>
      <ul className={styles.timelineContent__list}>
        {data.map(({ id, title, subtitle, time, href, list }) => (
          <li key={id} className={styles["timelineContent__list-li"]}>
            <div className={styles["timelineContent__list-date"]}>
              <h5>{time}</h5>
            </div>
            <div className={styles["timelineContent__list-item"]}>
              <div className={styles["timelineContent__list-text"]}>
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
              </div>
              <ul>
                {list.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
              <TransitionLink href={href}>Details</TransitionLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineContent;
