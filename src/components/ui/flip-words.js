import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import '../../App.css';


// Helper function to detect if a word contains Arabic characters
const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

export const FlipWords = ({
    words,
    duration = 3000,
    className
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left ",
                    className
                )}
                key={currentWord}>
                {(() => {
                    const isPhraseArabic = isArabic(currentWord);
                    return (
                        <motion.span
                            key={"phrase"}
                            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.35 }}
                            className={cn(
                                "inline-block whitespace-nowrap",
                                isPhraseArabic ? "font-InkBrushArabic text-5xl" : "font-ramidots text-6xl"
                            )}
                            style={{
                                background: "linear-gradient(to right, #3b82f6, #fb923c, #ef4444)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {currentWord}
                        </motion.span>
                    );
                })()}
            </motion.div>
        </AnimatePresence>
    );
};
