export const accordionAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      height: {
        duration: 0.15,
      },
      ease: "linear",
    },
  },
  exit: {
    height: 0,
    transition: {
      height: {
        duration: 0.15,
      },
      ease: "linear",
    },
  },
};
