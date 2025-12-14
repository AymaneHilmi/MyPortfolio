"use client"

import { useEffect, useId, useState, forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import LIMS from "@/assets/LIMS.png";
import SaintGobain from "@/assets/Saint-Gobain.png";
import SaintGobainWhite from "@/assets/Saint-GobainWhite.png";
import { FilePlus } from "lucide-react";
import { cn } from "@/lib/utils"

// AnimatedBeam (JSX version): draws an animated curved beam between fromRef and toRef within containerRef.

export const AnimatedBeam = ({
    className,
    containerRef,
    fromRef,
    toRef,
    curvature = 0,
    reverse = false, // Include the reverse prop
    duration = Math.random() * 3 + 4,
    delay = 0,
    pathColor = "gray",
    pathWidth = 2,
    pathOpacity = 0.2,
    gradientStartColor = "#2563eb",
    gradientStopColor = "#38bdf8",
    startXOffset = 0,
    startYOffset = 0,
    endXOffset = 0,
    endYOffset = 0,
}) => {





    const id = useId()
    const [pathD, setPathD] = useState("")
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

    // Calculate the gradient coordinates based on the reverse prop
    const gradientCoordinates = reverse
        ? {
            x1: ["90%", "-10%"],
            x2: ["100%", "0%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
        }
        : {
            x1: ["10%", "110%"],
            x2: ["0%", "100%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
        }
    // --- Dark mode detection (Tailwind uses the `dark` class on <html>) ---

    useEffect(() => {
        const updatePath = () => {
            if (containerRef.current && fromRef.current && toRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect()
                const rectA = fromRef.current.getBoundingClientRect()
                const rectB = toRef.current.getBoundingClientRect()

                const svgWidth = containerRect.width
                const svgHeight = containerRect.height
                setSvgDimensions({ width: svgWidth, height: svgHeight })

                const startX =
                    rectA.left - containerRect.left + rectA.width / 2 + startXOffset
                const startY =
                    rectA.top - containerRect.top + rectA.height / 2 + startYOffset
                const endX =
                    rectB.left - containerRect.left + rectB.width / 2 + endXOffset
                const endY =
                    rectB.top - containerRect.top + rectB.height / 2 + endYOffset

                const controlY = startY - curvature
                const d = `M ${startX},${startY} Q ${(startX + endX) / 2
                    },${controlY} ${endX},${endY}`
                setPathD(d)
            }
        }

        // Initialize ResizeObserver
        const resizeObserver = new ResizeObserver(() => {
            updatePath()
        })

        // Observe the container element
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }

        // Call the updatePath initially to set the initial path
        updatePath()

        // Clean up the observer on component unmount
        return () => {
            resizeObserver.disconnect()
        }
    }, [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset,
    ])
    return (
        <svg
            fill="none"
            width={svgDimensions.width}
            height={svgDimensions.height}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
                className
            )}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
        >
            <path
                d={pathD}
                stroke={pathColor}
                strokeWidth={pathWidth}
                strokeOpacity={pathOpacity}
                strokeLinecap="round"
            />
            <path
                d={pathD}
                strokeWidth={pathWidth}
                stroke={`url(#${id})`}
                strokeOpacity="1"
                strokeLinecap="round"
            />
            <defs>
                <motion.linearGradient
                    className="transform-gpu"
                    id={id}
                    gradientUnits={"userSpaceOnUse"}
                    initial={{
                        x1: "0%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%",
                    }}
                    animate={{
                        x1: gradientCoordinates.x1,
                        x2: gradientCoordinates.x2,
                        y1: gradientCoordinates.y1,
                        y2: gradientCoordinates.y2,
                    }}
                    transition={{
                        delay,
                        duration,
                        ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                >
                    <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
                    <stop stopColor={gradientStartColor}></stop>
                    <stop offset="32.5%" stopColor={gradientStopColor}></stop>
                    <stop
                        offset="100%"
                        stopColor={gradientStopColor}
                        stopOpacity="0"
                    ></stop>
                </motion.linearGradient>
            </defs>
        </svg>
    )
}

////////////////////////////////////////////////////

const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-14 items-center justify-center rounded-full border-2 dark:border-[gray] bg-bgLight dark:bg-darkContainer p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300",
                className
            )}
        >
            {children}
        </div>
    )
})

Circle.displayName = "Circle"

export function AnimatedBeamMultipleOutputDemo({
    className, }) {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);
    return (
        <div
            className={cn(
                "relative flex items-center justify-center overflow-hidden md:p-10",
                className
            )}
            ref={containerRef}
        >
            <div className="flex size-full flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center items-center ">
                    <Circle ref={div7Ref}>
                        <Icons.requestCreate />
                    </Circle>
                    <p className="text-xs whitespace-nowrap">Request Creation</p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <Circle ref={div6Ref} className="p-3">
                        <Icons.lims />
                    </Circle>
                    <p className="text-xs  whitespace-nowrap">Automatic email</p>
                </div>
                {/* <div className="hidden md:flex flex-col justify-center items-center ">
                    <Circle ref={div6Ref} className="p-3">
                        <Icons.mail />
                    </Circle>
                    <p className="text-xs whitespace-nowrap">Automatic email</p>
                </div> */}
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div1Ref}>
                            <Icons.user />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div2Ref}>
                            <Icons.user />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div3Ref}>
                            <Icons.user />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div4Ref}>
                            <Icons.user />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div5Ref}>
                            <Icons.user />
                        </Circle>
                    </div>
                    <p className="text-xs">Lab Technicians...</p>

                </div>

            </div>
            {/* AnimatedBeams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
                duration={3}
            />
        </div>
    )
}

export function AnimatedBeamDemo() {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);


    return (
        <div
            className="relative flex w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            <div className="flex size-full max-h-[400px] max-w-2xl flex-col items-stretch justify-between gap-10 py-10">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div1Ref} className="">
                            <Icons.saintgobain />
                        </Circle>
                        <p className="text-xs">SGR Provence</p>
                    </div>

                    <div className="flex flex-col justify-center items-end gap-2">
                        <Circle ref={div5Ref}>
                            <Icons.saintgobain />
                        </Circle>
                        <p className="text-xs">SGR Germany</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div2Ref}>
                            <Icons.saintgobain />
                        </Circle>
                        <p className="text-xs">SGR India</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Circle ref={div4Ref} className="size-20 p-3">
                            <Icons.lims />
                        </Circle>
                        <p className="text-xs">Sample Manager</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-2">
                        <Circle ref={div6Ref} >
                            <Icons.saintgobain />
                        </Circle>
                        <p className="text-xs">SGR Brasil</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <Circle ref={div3Ref}>
                            <Icons.saintgobain />
                        </Circle>
                        <p className="text-xs">SGR North America</p>

                    </div>
                    <div className="flex flex-col justify-center items-end gap-2">
                        <Circle ref={div7Ref}>
                            <Icons.saintgobain />
                        </Circle>
                        <p className="text-xs">SGR Shangai</p>

                    </div>
                </div>
            </div>
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-100}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={100}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-100}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={100}
                endYOffset={10}
                reverse
            />
        </div>
    )
}
const Icons = {
    mail: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
        </svg>
    ),
    user: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
    requestCreate: () => (
        <FilePlus className="w-6 h-6 text-current" />
    ),
    lims: () => (
        <img
            src={LIMS}
            alt="LIMS Icon"
            className="w-12 h-12 object-contain rounded"
        />
    ),
    database: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http:www.w3.org/2000/svg"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
            <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
        </svg>
    ),
    saintgobain: () => (
        <div className="relative w-20 h-20">
            {/* Light mode logo */}
            <img
                src={SaintGobain}
                alt="Saint Gobain Icon"
                className="absolute inset-0 w-full h-full object-contain dark:hidden"
            />

            {/* Dark mode logo */}
            <img
                src={SaintGobainWhite}
                alt="Saint Gobain Icon White"
                className="absolute inset-0 w-full h-full object-contain hidden dark:block"
            />
        </div>
    ),
}
