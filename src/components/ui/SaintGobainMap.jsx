// src/components/SaintGobainMap.jsx
import React, { useEffect, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
} from "react-simple-maps";

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const centers = [
    {
        name: "SGR North America",
        city: "Northboro, USA",
        coords: [-71.64, 42.33],
        dx: -80,
        dy: -80,
        textX: -40,
        textY: -10,
    },
    {
        name: "SGR Brasil",
        city: "Capivari, Brazil",
        coords: [-47.51, -23.0],
        dx: -80,
        dy: 65,
        textX: -35,
        textY: 5,
    },
    {
        name: "SGR Provence",
        city: "Cavaillon, France",
        coords: [5.04, 43.83],
        dx: -90,
        dy: 45,
        textX: -45,
        textY: 0,
    },
    {
        name: "SGR Paris",
        city: "Aubervilliers, France",
        coords: [2.38, 48.91],
        dx: -60,
        dy: -75,
        textX: -40,
        textY: 0,
    },
    {
        name: "SGR Compiègne",
        city: "Thouroutte, France",
        coords: [2.88, 49.5],
        dx: 15,
        dy: -60,
        textX: 20,
        textY: -20,

    },
    {
        name: "SGR Germany",
        city: "Herzogenrath, Germany",
        coords: [6.09, 50.87],
        dx: 90,
        dy: -60,
        textX: 50,
        textY: 0,
    },
    {
        name: "SGR India",
        city: "Chennai, India",
        coords: [80.27, 13.08],
        dx: -90,
        dy: 160,
        textX: -20,
        textY: 15,
    },
    {
        name: "SGR Shanghai",
        city: "Shanghai, China",
        coords: [121.47, 31.23],
        dx: 70,
        dy: -60,
        textX: 40,
        textY: -5,
    },
];

export default function SaintGobainMap() {
    // --- Dark mode detection (Tailwind uses the `dark` class on <html>) ---
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;

        const computeIsDark = () => html.classList.contains("dark");
        setIsDark(computeIsDark());

        // Observe changes to the class list so the map updates live when theme toggles
        const observer = new MutationObserver(() => {
            setIsDark(computeIsDark());
        });
        observer.observe(html, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    // --- Map color tokens (edit here to tweak light/dark palette) ---
    const MAP = {
        land: isDark ? "#3a3a3a" : "#E8EDF3",            // countries fill
        connector: isDark ? "#94A3B8" : "#4B5563",       // dashed arrows
        labelText: isDark ? "#E5E7EB" : "#000000",       // base label text
        labelSubText: isDark ? "#CBD5E1" : "#6B7280",    // base label subtitle
        labelHighlight: "#2563eb",                       // Provence/Germany highlight
        labelBg: isDark ? "rgba(17,24,39,0.75)" : "rgba(255,255,255,0)", // label pill bg
        labelStroke: isDark ? "rgba(148,163,184,0.45)" : "none",
    };

    return (
        <div className="w-full flex flex-col ">


            {/* Map container: background, gradient and subtle hover zoom (tweak classes here) */}
            <div className="w-full rounded-3xl pr-5 md:pr-20">
                <ComposableMap
                    projectionConfig={{ scale: 150 }}
                    className="w-full h-auto overflow-visible"
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: MAP.land,        // TODO : for darkmode use #3a3a3a
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "rgba(37, 99, 235, 0.5)",
                                            stroke: "#AFC2D4",
                                            strokeWidth: 0.4,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#D8E1EB",
                                            stroke: "#AFC2D4",
                                            strokeWidth: 0.4,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            outline: "none",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {centers.map((center) => {
                        const isHighlighted =
                            center.name === "SGR Provence" || center.name === "SGR Germany";

                        return (
                            <React.Fragment key={center.name}>
                                {/* Point sur la carte + halo animé (modifiez animate-ping ou les opacités ici) */}
                                <Marker coordinates={center.coords}>
                                    {/* Light glow halo (edit radii/opacities here) */}
                                    {isHighlighted && (
                                        <circle
                                            r={11}
                                            className="fill-blue-500/25 z-50"
                                        />
                                    )}
                                    <circle
                                        r={7}
                                        className={
                                            "fill-sky-400/20 dark:fill-sky-300/10 animate-ping z-50"
                                        }
                                    />
                                    <circle
                                        r={4}
                                        className={"fill-sky-500 dark:fill-sky-400 stroke-white stroke-[1.5] z-50"
                                        }
                                    />
                                </Marker>

                                {/* Annotation avec flèche arrondie + label */}
                                <Annotation
                                    subject={center.coords}
                                    dx={center.dx}
                                    dy={center.dy}
                                    curve={0.5}
                                    connectorProps={{
                                        stroke: "#4B5563",
                                        strokeWidth: 0.9,
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeDasharray: "4 3",
                                        zIndex: 0,
                                    }}
                                >
                                    <g>
                                        {/* Label background pill: highlighted for Provence & Germany */}
                                        <rect
                                            x={-60}
                                            y={-18}
                                            width={120}
                                            height={28}
                                            rx={8}
                                            ry={8}
                                            fill={"rgba(255,255,255,0)"}
                                            stroke={"none"}
                                            strokeWidth={0.6}
                                        />
                                        <text
                                            x={center.textX}
                                            y={center.textY}
                                            textAnchor="middle"
                                            style={{
                                                fontSize: 12, // increased for mobile readability
                                                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                                                fill: isHighlighted ? "#2563eb" : MAP.labelText,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {center.name}
                                        </text>
                                        <text
                                            x={center.textX}
                                            y={center.textY + 10}
                                            textAnchor="middle"
                                            style={{
                                                fontSize: 9, // increased for mobile readability
                                                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                                                fill: isHighlighted ? "#2563eb" : MAP.labelSubText,
                                            }}
                                        >
                                            {center.city}
                                        </text>
                                    </g>
                                </Annotation>
                            </React.Fragment>
                        );
                    })}
                </ComposableMap>
            </div>
        </div>
    );
}