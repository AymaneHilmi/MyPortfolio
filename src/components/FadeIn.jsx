
import { motion } from "framer-motion";
import React from "react";


const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};
export default function FadeIn({ children, i = 0, className = "" }) {
    return (
        <motion.div
            className={className}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
        >
            {children}
        </motion.div>
    );
}