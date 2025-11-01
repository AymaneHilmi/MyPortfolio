import { useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/lib/useTheme";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function RippleOverlay({ ripple, onDone }) {
    if (!ripple) return null;
    const target = typeof window !== "undefined" ? document.body : null;
    if (!target) return null;

    const commonStyle = {
        background: ripple.prevColor,
        // Start with no hole, then grow the transparent circle to reveal the new theme underneath
        "--r": "0px",
        WebkitMaskImage: `radial-gradient(circle at ${ripple.x}px ${ripple.y}px, transparent 0 var(--r), black calc(var(--r) + 1px))`,
        maskImage: `radial-gradient(circle at ${ripple.x}px ${ripple.y}px, transparent 0 var(--r), black calc(var(--r) + 1px))`,
    };

    return createPortal(
        <AnimatePresence>
            {ripple && (
                <motion.div
                    key={`${ripple.x}-${ripple.y}`}
                    className="pointer-events-none fixed inset-0 z-[9999]"
                    style={commonStyle}
                    initial={{ "--r": "0px" }}
                    animate={{ "--r": "150vmax" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    onAnimationComplete={onDone}
                />
            )}
        </AnimatePresence>,
        target
    );
}

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const [ripple, setRipple] = useState(null); // { x, y, prevColor }

    const handleThemeClick = (e, next) => {
        const x = e.clientX;
        const y = e.clientY;

        // Determine current effective theme (light/dark)
        const prefersDark = typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        const currentEffectiveDark = theme === "system"
            ? prefersDark
            : theme === "dark";

        // Determine next effective theme (light/dark)
        const nextEffectiveDark = next === "system"
            ? prefersDark
            : next === "dark";

        // ✅ If effective theme doesn't change (e.g., dark → system and system prefers dark)
        // skip animation and only apply theme
        if (currentEffectiveDark === nextEffectiveDark) {
            setTheme(next);
            return;
        }

        const prevColor = currentEffectiveDark ? "#0a0a0a" : "#ffffff"; // color of the old theme

        // Apply theme immediately
        setTheme(next);

        // Trigger ripple
        setRipple({ x, y, prevColor });
    };

    const options = [
        { key: "light", label: "Light", icon: <Sun size={16} /> },
        { key: "dark", label: "Dark", icon: <Moon size={16} /> },
        { key: "system", label: "System", icon: <Monitor size={16} /> },
    ];

    return (
        <motion.div
            className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-white/60 p-1 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
        >
            {options.map(({ key, label, icon }) => {
                const isActive = theme === key;
                return (
                    <motion.button
                        key={key}
                        onClick={(e) => handleThemeClick(e, key)}
                        className={`relative flex items-center gap-1 rounded-lg px-2 py-1 transition-colors duration-300 ${isActive
                            ? "text-white dark:text-zinc-900"
                            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                            }`}
                    >
                        {/* Animated background */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.span

                                    className="absolute inset-0 rounded-lg bg-lightPrimary dark:bg-darkPrimary shadow-md"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}

                                />
                            )}
                        </AnimatePresence>

                        <span className="relative z-10 flex items-center gap-1">
                            {icon}
                        </span>
                    </motion.button>
                );
            })}
            <RippleOverlay
                ripple={ripple}
                onDone={() => setTimeout(() => setRipple(null), 30)}
            />
        </motion.div>
    );
}