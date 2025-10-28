import { useEffect, useState } from "react";

const THEME_KEY = "theme"; // 'light' | 'dark' | 'system'

export function useTheme() {
    const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "system");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (selectedTheme) => {
            const isDark =
                selectedTheme === "dark" || (selectedTheme === "system" && mediaQuery.matches);
            document.documentElement.classList.toggle("dark", isDark);
            document.documentElement.style.colorScheme = isDark ? "dark" : "light";
        };

        applyTheme(theme);
        localStorage.setItem(THEME_KEY, theme);

        if (theme === "system") {
            const handleChange = () => applyTheme("system");
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme]);

    return { theme, setTheme };
}