import { motion } from "framer-motion";
import propTypes from "prop-types";
import { pageVariants } from "./pageVariants";

// Your component using the animation
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pd"
    >
      {children}
    </motion.div>
  );
};

AnimatedPage.propTypes = {
  children: propTypes.object.isRequired,
};

export default AnimatedPage;
