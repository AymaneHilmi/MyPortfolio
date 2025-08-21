"use client";
import { cn } from "../../lib/utils";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const DraggableCardBody = ({ className, children, image }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragElastic={0.2}
      dragMomentum={0.2}
      dragConstraints={{ top: -300, left: -500, right: 500, bottom: 500 }}
      whileDrag={{ zIndex: 50 }}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={() => {
        document.body.style.cursor = "default";
      }}
      style={{ willChange: "transform" }}
      className={cn(
        "relative min-h-80 w-72 overflow-visible rounded-xl bg-gray-50 border border-gray-200 p-5 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {image && (
        <img
          src={typeof image === "string" ? image : image.src}
          alt="Card content"
          className="w-full h-auto rounded-lg "
          draggable={false}
        />
      )}
      {children}
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return <div className={cn("overflow-visible", className)}>{children}</div>;
};
