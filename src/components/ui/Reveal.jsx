import { motion } from "framer-motion";

// Apparition douce au scroll. `as` permet de choisir la balise.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  once = true,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </MotionTag>
  );
}
