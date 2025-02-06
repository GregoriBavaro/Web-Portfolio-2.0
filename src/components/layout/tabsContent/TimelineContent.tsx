import TransitionLink from "../../../utils/TransitionLink";
import { useSidebarMenu } from "../../../store/store";

import { TimelineProps } from "../../../types/timeline.types";

import styles from "./TimelineContent.module.scss";

const TimelineContent = ({ data }: { data: TimelineProps[] }) => {
  const { setNavigateFromDetails, setDocumentIcon } = useSidebarMenu();

  const handleDetailsClick = (
    showDocument: string | undefined,
    icon: React.ReactElement | null
  ) => {
    if (showDocument) {
      setNavigateFromDetails(showDocument);
      setDocumentIcon(icon || <span />);
    }
  };

  return (
    <div className={styles.timelineContent}>
      <ul className={styles.timelineContent__list}>
        {data
          .slice()
          .reverse()
          .map(
            ({ id, title, subtitle, time, href, list, showDocument, icon }) => (
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
                  {showDocument ? (
                    <TransitionLink
                      onClick={() => handleDetailsClick(showDocument, icon)}
                      href={href}
                    >
                      Details
                    </TransitionLink>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      Details
                    </a>
                  )}
                </div>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default TimelineContent;
