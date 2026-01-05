import { motion } from "framer-motion";

export const Reveal = ({ children, direction = "up", delay = 0 }) => {
  const offset = 80;

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -offset : direction === "right" ? offset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Curva de velocidad premium
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
      style={{ width: "100%", height: "100%", willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};