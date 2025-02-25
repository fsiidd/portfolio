import React from "react";
import { motion } from "framer-motion";

const FadeInWrapper = ({ children }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 }, // Start faded and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
