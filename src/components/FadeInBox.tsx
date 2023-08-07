import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  initial: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
  },
};

export const FadeInBox = (props) => {
  const { children, ...rest } = props;
  const { ref, inView } = useInView({
    threshold: 0.55,
    triggerOnce: false,
  });
  return (
    <div ref={ref} {...rest}>
      <motion.div
        initial="initial"
        animate={inView ? "animation" : "initial"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};
