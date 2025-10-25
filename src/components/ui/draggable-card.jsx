"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const DraggableCardBody = ({ className, children, image }) => {
  const cardRef = useRef(null);

  const [constraints, setConstraints] = useState({
    top: -200,
    left: -200,
    right: 200,
    bottom: 150,
  });

  useEffect(() => {
    const computeConstraints = () => {
      const w = window.innerWidth;
      if (w < 1024) {
        // Tablet / md
        setConstraints({ top: -200, left: -250, right: 250, bottom: 160 });
      } else {
        // Desktop / lg+
        setConstraints({ top: -300, left: -500, right: 500, bottom: 200 });
      }
    };
    computeConstraints();
    window.addEventListener("resize", computeConstraints);
    return () => window.removeEventListener("resize", computeConstraints);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragElastic={0.2}
      dragMomentum={0.2}
      dragConstraints={constraints}
      whileDrag={{ zIndex: 50 }}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={() => {
        document.body.style.cursor = "default";
      }}
      style={{ willChange: "transform" }}
      className={cn(

        "relative min-h-64 sm:min-h-72 md:min-h-80 lg:min-h-96 w-56 sm:w-64 md:w-72 lg:w-80 overflow-visible rounded-xl bg-gray-50 border border-gray-200 p-4 md:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {image && (
        <img
          src={typeof image === "string" ? image : image.src}
          alt="Card content"
          className="w-full h-auto max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72 object-contain rounded-lg"
          draggable={false}
        />
      )}
      {children}
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-visible",
        className
      )}
    >
      {children}
    </div>
  );
};
