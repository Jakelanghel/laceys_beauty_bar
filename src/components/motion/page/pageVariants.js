export const pageVariants = {
  hidden: {
    opacity: 1,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
  exit: {
    opacity: 1,
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
