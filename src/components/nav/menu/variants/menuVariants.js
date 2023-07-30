export const menuVariants = (isMobile) => {
  if (isMobile) {
    return {
      hidden: {
        position: "fixed",
        zIndex: 2,
        y: "-100vh",
        width: "100vw",
        height: "100vh",
        transition: {
          type: "spring",
          damping: 20,
          ease: "easeInOut",
        },
      },
      visible: {
        y: 0,
        width: "100vw",
        height: "100vh",
        transition: {
          type: "spring",
          damping: 20,
          ease: "easeInOut",
        },
      },
    };
  }
};
