export const menuVariants = (isMobile) => {
  if (isMobile) {
    return {
      hidden: {
        position: "fixed",
        zIndex: 2,
        top: "-100%",
        left: 0,
        width: "100vw",
        height: "100vh",
        opacity: 0,
        transition: {
          type: "spring",
          damping: 20, // Increase the damping value for a slower animation
          ease: "easeInOut",
        },
      },
      visible: {
        top: 0,
        opacity: 1,
        width: "100vw",
        height: "100vh",
        transition: {
          type: "spring",
          damping: 20, // Increase the damping value for a slower animation
          ease: "easeInOut",
          delay: 0.2, // Add a 200ms delay before the animation starts
        },
      },
    };
  }
};
