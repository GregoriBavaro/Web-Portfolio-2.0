import Image, { StaticImageData } from "next/image";

import styles from "./GalleryContent.module.scss";

interface GalleryContentProps {
  text: string;
  photos: StaticImageData[];
}

const GalleryContent = ({ text, photos }: GalleryContentProps) => {
  return (
    <section className={styles.galleryContent}>
      <p className={styles.galleryContent__text}>{text}</p>
      <ul className={styles.galleryContent__list}>
        {photos.map((photo, id) => (
          <li key={id} className={styles["galleryContent__list-item"]}>
            <Image src={photo} alt="project photo" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GalleryContent;
