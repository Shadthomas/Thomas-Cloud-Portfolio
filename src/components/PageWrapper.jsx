import { motion } from "framer-motion";

const PageWrapper = ({
  children,
  className = "",
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -30 },
  transition = { duration: 0.4, ease: "easeInOut" },
}) => {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;