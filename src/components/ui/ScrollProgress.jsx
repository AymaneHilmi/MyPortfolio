"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // si tu utilises déjà 'cn' dans ton projet

export default function ScrollProgress({ barClassName }) {
    const barRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }

            frameRef.current = requestAnimationFrame(() => {
                const doc = document.documentElement;
                const scrollTop = window.scrollY || doc.scrollTop;
                const scrollHeight = doc.scrollHeight - doc.clientHeight;

                const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

                if (barRef.current) {
                    barRef.current.style.transform = `scaleX(${progress})`;
                    barRef.current.style.opacity = progress === 0 ? "0" : "1";
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <div className="fixed inset-x-0 top-0 z-[120] h-1 backdrop-blur-md pointer-events-none">
            <div className="h-full w-full bg-transparent">
                <div
                    ref={barRef}
                    className={cn(
                        "h-full origin-left transition-opacity duration-150",
                        barClassName
                            ? barClassName
                            : "bg-gradient-to-r from-sky-400 to-blue-600"
                    )}
                    style={{ transform: "scaleX(0)" }}
                />
            </div>
        </div>
    );
}