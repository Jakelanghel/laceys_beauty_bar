import { motion } from "framer-motion";
import { iconVariants } from "./imgVariants";
import propTypes from "prop-types";

const MotionImg = ({ src, alt, imgClass }) => {
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

MotionImg.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  imgClass: propTypes.string,
};

export default MotionImg;
