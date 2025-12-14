import React from "react"

// iPhone 6 proportions (mockup vector, not pixels of real device)
const PHONE_WIDTH = 420
const PHONE_HEIGHT = 840

// Screen window (where your image/video is clipped)
const SCREEN_X = 38
const SCREEN_Y = 132
const SCREEN_WIDTH = 344
const SCREEN_HEIGHT = 570
const SCREEN_RADIUS = 22

// Percentages for the absolutely-positioned media
const LEFT_PCT = (SCREEN_X / PHONE_WIDTH) * 100
const TOP_PCT = (SCREEN_Y / PHONE_HEIGHT) * 100
const WIDTH_PCT = (SCREEN_WIDTH / PHONE_WIDTH) * 100
const HEIGHT_PCT = (SCREEN_HEIGHT / PHONE_HEIGHT) * 100
const RADIUS_H = (SCREEN_RADIUS / SCREEN_WIDTH) * 100
const RADIUS_V = (SCREEN_RADIUS / SCREEN_HEIGHT) * 100

/**
 * @param {{
 *  src?: string,
 *  videoSrc?: string,
 *  className?: string,
 *  style?: React.CSSProperties
 * } & React.HTMLAttributes<HTMLDivElement>} props
 */
export default function Iphone({ src, videoSrc, className = "", style, ...props }) {
    const hasVideo = !!videoSrc
    const hasMedia = hasVideo || !!src

    return (
        <div
            className={`relative inline-block w-full align-middle leading-none ${className}`}
            style={{
                aspectRatio: `${PHONE_WIDTH}/${PHONE_HEIGHT}`,
                ...style,
            }}
            {...props}
        >
            {/* MEDIA (clipped inside screen) */}
            {hasVideo && (
                <div
                    className="pointer-events-none absolute z-0 overflow-hidden"
                    style={{
                        left: `${LEFT_PCT}%`,
                        top: `${TOP_PCT}%`,
                        width: `${WIDTH_PCT}%`,
                        height: `${HEIGHT_PCT}%`,
                        borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
                    }}
                >
                    <video
                        className="block size-full object-cover"
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    />
                </div>
            )}

            {!hasVideo && src && (
                <div
                    className="pointer-events-none absolute z-0 overflow-hidden"
                    style={{
                        left: `${LEFT_PCT}%`,
                        top: `${TOP_PCT}%`,
                        width: `${WIDTH_PCT}%`,
                        height: `${HEIGHT_PCT}%`,
                        borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
                    }}
                >
                    <img src={src} alt="" className="block size-full object-cover object-top" />
                </div>
            )}

            {/* PHONE SHELL */}
            <svg
                viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-full"
                style={{ transform: "translateZ(0)" }}
            >
                {/* Outer body */}
                <rect
                    x="6"
                    y="6"
                    width={PHONE_WIDTH - 12}
                    height={PHONE_HEIGHT - 12}
                    rx="64"
                    className="fill-[#ECECEC] dark:fill-[#2A2A2A]"
                />

                {/* Side buttons (simple) */}
                <rect x="0" y="170" width="8" height="60" rx="4" className="fill-[#DCDCDC] dark:fill-[#1F1F1F]" />
                <rect x="0" y="250" width="8" height="80" rx="4" className="fill-[#DCDCDC] dark:fill-[#1F1F1F]" />
                <rect x={PHONE_WIDTH - 8} y="220" width="8" height="110" rx="4" className="fill-[#DCDCDC] dark:fill-[#1F1F1F]" />

                {/* Inner bezel */}
                <rect
                    x="14"
                    y="14"
                    width={PHONE_WIDTH - 28}
                    height={PHONE_HEIGHT - 28}
                    rx="58"
                    className="fill-[#FAFAFA] dark:fill-[#262626]"
                />

                {/* Screen opening border (demarcation) */}
                <rect
                    x={SCREEN_X}
                    y={SCREEN_Y}
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT}
                    rx={SCREEN_RADIUS}
                    className="fill-none stroke-[#D4D4D4] dark:stroke-[#525252]"
                    strokeWidth="2"
                    opacity="0.95"
                />

                {/* Top speaker + camera (iPhone 6 style) */}
                <rect
                    x={PHONE_WIDTH / 2 - 52}
                    y="72"
                    width="104"
                    height="10"
                    rx="5"
                    className="fill-[#DADADA] dark:fill-[#404040]"
                />
                <circle
                    cx={PHONE_WIDTH / 2 - 86}
                    cy="77"
                    r="6"
                    className="fill-[#DADADA] dark:fill-[#404040]"
                />
                <circle
                    cx={PHONE_WIDTH / 2 - 86}
                    cy="77"
                    r="3"
                    className="fill-[#BDBDBD] dark:fill-[#1F1F1F]"
                    opacity="0.9"
                />

                {/* Bottom bezel separator */}
                {/* <line
                    x1={SCREEN_X + 28}
                    y1={SCREEN_Y + SCREEN_HEIGHT + 38}
                    x2={SCREEN_X + SCREEN_WIDTH - 28}
                    y2={SCREEN_Y + SCREEN_HEIGHT + 38}
                    className="stroke-[#E5E5E5] dark:stroke-[#404040]"
                    strokeWidth="2"
                    opacity="0.9"
                /> */}

                {/* Home button (outside any mask so always visible) */}
                <circle
                    cx={PHONE_WIDTH / 2}
                    cy={PHONE_HEIGHT - 78}
                    r="30"
                    className="fill-none stroke-[#E0E0E0] dark:stroke-[#505050]"
                    strokeWidth="2"
                />
                <circle
                    cx={PHONE_WIDTH / 2}
                    cy={PHONE_HEIGHT - 78}
                    r="26"
                    className="fill-[#FFFFFF] dark:fill-[#1E1E1E] stroke-[#CFCFCF] dark:stroke-[#5A5A5A]"
                    strokeWidth="1.5"
                    opacity="0.98"
                />
                <circle
                    cx={PHONE_WIDTH / 2}
                    cy={PHONE_HEIGHT - 78}
                    r="17"
                    className="fill-none stroke-[#CFCFCF] dark:stroke-[#5A5A5A]"
                    strokeWidth="2"
                    opacity="0.95"
                />
            </svg>
        </div>
    )
}