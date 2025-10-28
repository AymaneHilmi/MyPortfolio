import { useTheme } from "@/lib/useTheme";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const options = [
        { key: "light", label: "Light", icon: <Sun size={16} /> },
        { key: "dark", label: "Dark", icon: <Moon size={16} /> },
        { key: "system", label: "System", icon: <Monitor size={16} /> },
    ];

    return (
        <motion.div
            layout
            className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-white/60 p-1 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
            transition={{ layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
        >
            {options.map(({ key, label, icon }) => {
                const isActive = theme === key;
                return (
                    <motion.button
                        key={key}
                        onClick={() => setTheme(key)}
                        className={`relative flex items-center gap-1 rounded-lg px-2 py-1 transition-colors duration-300 ${isActive
                            ? "text-white dark:text-zinc-900"
                            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                            }`}
                    >
                        {/* Animated background */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.span
                                    layoutId="activeThemeBg"
                                    className="absolute inset-0 rounded-lg bg-zinc-900 dark:bg-zinc-100"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.50, ease: [0.4, 0, 0.2, 1] }}
                                />
                            )}
                        </AnimatePresence>

                        <span className="relative z-10 flex items-center gap-1">
                            {icon}
                            <motion.span
                                className="hidden sm:inline"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {label}
                            </motion.span>
                        </span>
                    </motion.button>
                );
            })}
        </motion.div>
    );
}