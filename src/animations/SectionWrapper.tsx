import { motion } from "framer-motion";
import { container } from "./Varianten";

type SectionWrapperProps = {
  children: React.ReactNode;
  amount?: number;      // voor viewport amount
  className?: string;
  immediate?: boolean;
};

export default function SectionWrapper({
  children,
  amount = 0.25,
  className = "",
  immediate = false,
}: SectionWrapperProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : { once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
