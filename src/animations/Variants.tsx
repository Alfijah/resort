import { easeOut } from "framer-motion";

export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.40,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: easeOut,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: easeOut,
    },
  },
};
