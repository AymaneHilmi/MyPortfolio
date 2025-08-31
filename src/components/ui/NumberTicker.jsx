"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function NumberTicker({
    value,
    startValue = 0,
    direction = "up",
    delay = 0,
    className,
    decimalPlaces = 0,
    ...props
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : startValue);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                motionValue.set(direction === "down" ? startValue : value);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [motionValue, isInView, delay, value, direction, startValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US", {
                    minimumFractionDigits: decimalPlaces,
                    maximumFractionDigits: decimalPlaces,
                }).format(Number(latest.toFixed(decimalPlaces)));
            }
        });

        return () => unsubscribe();
    }, [springValue, decimalPlaces]);

    return (
        <span
            ref={ref}
            className={cn(
                "inline-block tabular-nums tracking-wider",
                className
            )}
            {...props}
        >
            {startValue}
        </span>
    );
}
