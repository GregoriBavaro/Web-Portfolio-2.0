import {useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./GalleryContent.module.scss";

interface GalleryContentProps {
  mocks: StaticImageData[];
}

const GalleryContent = ({ mocks }: GalleryContentProps) => {

  const galleryListReft = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (galleryListReft.current) {
      galleryListReft.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  },[mocks])

  return (
    <section className={styles.galleryContent}>
      <ul ref={galleryListReft} className={styles.galleryContent__list}>
        {mocks.map((mock, id) => (
          <li key={id} className={styles["galleryContent__list-item"]}>
            <Image src={mock} alt="project photo"   priority/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GalleryContent;
