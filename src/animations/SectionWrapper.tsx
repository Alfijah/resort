import { motion } from "framer-motion";
import { container } from "./variants";

type SectionWrapperProps = {
  children: React.ReactNode;
  amount?: number;      // voor viewport amount
  className?: string;
};

export default function SectionWrapper({
  children,
  amount = 0.4,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
