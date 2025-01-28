import styles from "./Blob.module.scss";

const Blob = () => {
  return (
    <svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#1a5f59"
        d="M20.7,-41C26.7,-28.3,31.5,-22.4,30.8,-16.3C30.2,-10.2,24.1,-3.8,20.2,0.8C16.2,5.4,14.4,8.2,15.9,23.1C17.4,37.9,22.2,64.9,15.7,78.2C9.1,91.5,-8.7,91,-23.6,84.7C-38.4,78.3,-50.3,66.1,-60.8,53.1C-71.3,40.2,-80.6,26.5,-73.7,16C-66.8,5.5,-43.7,-2,-32,-9.2C-20.2,-16.3,-19.8,-23.1,-16.3,-37C-12.8,-50.9,-6.4,-71.7,0.4,-72.4C7.3,-73.1,14.6,-53.6,20.7,-41Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
