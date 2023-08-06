export const iconVariants = (imgClass) => {
  if (imgClass === "open-icon") {
    return {
      initial: {
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },

      exit: {
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    };
  } else if (imgClass === "close-icon") {
    return {
      initial: {
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    };
  }

  // If imgClass doesn't match "open-icon" or "close-icon", return a default variant.
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
};
