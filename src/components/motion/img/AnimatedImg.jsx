import { motion } from "framer-motion";
import { iconVariants } from "./variants/imgVariants";
import propTypes from "prop-types";

const AnimatedImg = ({ src, alt, imgClass }) => {
  const variants = iconVariants(imgClass);

  return (
    <motion.img
      src={src}
      alt={alt}
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
      className={imgClass}
    />
  );
};

AnimatedImg.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  imgClass: propTypes.string,
};

export default AnimatedImg;
