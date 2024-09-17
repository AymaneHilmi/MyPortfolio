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
                    "z-10 inline-block relative text-left",
                    className
                )}
                style={{ color: '#3b3d41' }}
                key={currentWord}>
                {currentWord.split(" ").map((word, wordIndex) => {
                    // Check if the word contains Arabic characters
                    const isWordArabic = isArabic(word);

                    if (isWordArabic) {
                        // For Arabic, animate the entire word without splitting it into letters
                        return (
                            <motion.span
                                key={word + wordIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: wordIndex * 0.3,
                                    duration: 0.3,
                                }}
                                className="inline-block whitespace-nowrap"
                                style={{ fontFamily: 'UTHMANIC' }}>

                                {word}
                                <span className="inline-block">&nbsp;</span>
                            </motion.span>
                        );
                    } else {
                        // For non-Arabic, animate each letter separately
                        return (
                            <motion.span
                                key={word + wordIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: wordIndex * 0.3,
                                    duration: 0.3,
                                }}
                                className="inline-block whitespace-nowrap">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={word + letterIndex}
                                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{
                                            delay: wordIndex * 0.3 + letterIndex * 0.05,
                                            duration: 0.2,
                                        }}
                                        className="inline-block"
                                        style={{ fontFamily: 'SFBOLD' }}>
                                        {letter}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </motion.span>
                        );
                    }
                })}
            </motion.div>
        </AnimatePresence>
    );
};
