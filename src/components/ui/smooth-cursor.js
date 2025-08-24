"use client";

import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiDeliveroo } from "react-icons/si";
import { FaGlobeAmericas, FaMoon, FaHandPaper, FaHandRock, FaSearchMinus } from "react-icons/fa";

/** Styles “glass” — blur de l’arrière-plan + léger contour */
const GLASS_BG = "rgba(120, 120, 120, 0.28)";
const GLASS_BORDER = "1px solid rgba(255,255,255,0.28)";
const DOT_GRAY = "rgba(225, 225, 225, 0.95)";

/** ✏️ Modifier ici pour changer le curseur standard */
const DEFAULT_CURSOR_ICON = "grow";

export function SmoothCursor({
  springConfig = {
    damping: 35,
    stiffness: 420,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  const [isInteractive, setIsInteractive] = useState(false);
  const [cursorIcon, setCursorIcon] = useState(DEFAULT_CURSOR_ICON);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const diameter = useSpring(22, { ...springConfig, stiffness: 500 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const interactiveSelector = [
      "a",
      "button",
      "[role='button']",
      "[role='link']",
      "input[type='button']",
      "input[type='submit']",
      "select",
      "textarea",
      "label",
      "[contenteditable]",
    ].join(", ");

    const isInteractiveElement = (node) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body) {
        if (el.matches(interactiveSelector)) return true;
        if (
          el.hasAttribute("data-cursor") &&
          el.getAttribute("data-cursor") === "interactive"
        )
          return true;
        const cs = window.getComputedStyle(el);
        if (cs && cs.cursor === "pointer") return true;
        const ti = el.getAttribute("tabindex");
        if (ti !== null && ti !== undefined && ti !== "-1") return true;
        el = el.parentElement;
      }
      return false;
    };

    let rafId = 0;
    const onPointerMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        rafId = 0;
      });
    };

    const onPointerOver = (e) => {
      const el = e.target;
      const iconHost = el.closest?.("[data-cursor-icon]");
      const interactive = isInteractiveElement(el) || !!iconHost;

      if (interactive) {
        const custom =
          iconHost?.getAttribute?.("data-cursor-icon") ||
          el.getAttribute?.("data-cursor-icon");
        setCursorIcon(custom?.length ? custom : DEFAULT_CURSOR_ICON);
        setIsInteractive(true);
      }
    };

    const onPointerOut = (e) => {
      const next = e.relatedTarget;
      if (!next || !isInteractiveElement(next)) {
        setIsInteractive(false);
        setCursorIcon(DEFAULT_CURSOR_ICON);
      }
    };

    document.body.style.cursor = "none";
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerout", onPointerOut, true);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("pointerout", onPointerOut, true);
      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [x, y]);

  useEffect(() => {
    diameter.set(isInteractive ? 44 : 22);
  }, [isInteractive, diameter]);

  const renderIcon = (name) => {
    if (name === "dot") {
      return (
        <motion.div
          key="dot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          style={{
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: DOT_GRAY,
          }}
        />
      );
    }
    if (name === "grow") {
      return (
        <motion.div
          key="grow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.8 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: DOT_GRAY,
          }}
        />
      );
    }
    if (name === "mail") {
      return (
        <motion.svg
          key="mail"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
          <polyline points="3,5 12,13 21,5" />
        </motion.svg>
      );
    }
    if (name === "arrow") {
      return (
        <motion.svg
          key="arrow"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <path d="M6 18 L18 6" />
          <path d="M9 6 H18 V15" />
        </motion.svg>
      );
    }

    if (name === "copy") {
      return (
        <motion.svg
          key="copy"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </motion.svg>
      );
    }

    if (name === "cesiveroo") {
      return (
        <motion.div
          key="cesiveroo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiDeliveroo size={22} color="white" />
        </motion.div>
      );
    }

    if (name === "egg") {
      return (
        <motion.div
          key="egg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            ?
          </span>
        </motion.div>
      );
    }

    if (name === "egg#1") {
      const confettiColors = [
        "#3b82f6",
        "#fb923c",
        "#ef4444",
        "#22c55e",
        "#a855f7",
        "#f59e0b",
      ];
      const pieces = [
        { dx: -9, dy: -7, d: 0.0 },
        { dx: 10, dy: -6, d: 0.15 },
        { dx: -8, dy: 8, d: 0.3 },
        { dx: 8, dy: 9, d: 0.45 },
        { dx: 0, dy: -10, d: 0.6 },
      ];

      return (
        <motion.div
          key="egg#1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            position: "relative",
            display: "grid",
            placeItems: "center",
          }}
        >
          {pieces.map((p, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.9 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, p.dx, 0],
                y: [0, p.dy, 0],
                rotate: [0, 180, 360],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 1.6,
                delay: p.d,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                width: 3.5,
                height: 3.5,
                borderRadius: 1,
                backgroundColor: confettiColors[i % confettiColors.length],
              }}
            />
          ))}
        </motion.div>
      );
    }

    if (name === "egg#2") {
      return (
        <motion.div
          key="egg#2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaGlobeAmericas size={26} color="white" />
        </motion.div>
      );
    }

    if (name === "egg#3") {
      return (
        <motion.div
          key="egg#3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaMoon size={22} color="white" />
        </motion.div>
      );
    }

    if (name === "wife") {
      const heartColor = "#ff4d7d";
      const smallHearts = [
        { dx: -10, dy: -12, d: 0.0, s: 0.7 },
        { dx: 12, dy: -10, d: 0.15, s: 0.6 },
        { dx: -14, dy: 8, d: 0.3, s: 0.55 },
        { dx: 16, dy: 10, d: 0.45, s: 0.65 },
        { dx: 0, dy: -16, d: 0.6, s: 0.6 },
      ];

      const HeartSVG = ({ size = 22, fill = heartColor }) => (
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          style={{ display: "block" }}
        >
          {/* Classic heart shape */}
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.92 4.5 6 4.5c1.54 0 3.04.99 4 2.09 0.96-1.1 2.46-2.09 4-2.09 2.08 0 4 1.92 4 4 0 3.78-3.4 6.86-8.05 11.54L12 21.35z" />
        </motion.svg>
      );

      return (
        <motion.div
          key="wife"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{ position: "relative", display: "grid", placeItems: "center" }}
        >

          {/* Floating small hearts */}
          {smallHearts.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 0, y: 0, scale: h.s }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, h.dx, 0],
                y: [0, h.dy, 0],
                scale: [h.s, h.s * 1.15, h.s],
              }}
              transition={{ duration: 1.8, delay: h.d, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute" }}
            >
              <HeartSVG size={10} />
            </motion.div>
          ))}
        </motion.div>
      );
    }

    if (name === "egg#6") {
      return (
        <motion.div
          key="egg#6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="text-white text-sm font-bold select-none">404</span>
        </motion.div>
      );
    }


    return null;
  };

  if (isTouchDevice) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: x,
        top: y,
        translateX: "-50%",
        translateY: "-50%",
        width: diameter,
        height: diameter,
        borderRadius: 9999,
        zIndex: 999999999,
        pointerEvents: "none",
        background: GLASS_BG,
        backdropFilter: "blur(6px) saturate(120%)",
        WebkitBackdropFilter: "blur(6px) saturate(120%)",
        border: GLASS_BORDER,
        boxShadow:
          "inset 0 0 0.5px rgba(255,255,255,0.5), 0 6px 24px rgba(0,0,0,0.15)",
        display: "grid",
        placeItems: "center",
        willChange: "transform, width, height, backdrop-filter",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 480, damping: 30 }}
    >
      <AnimatePresence initial={false} mode="wait">
        {renderIcon(isInteractive ? cursorIcon : "dot")}
      </AnimatePresence>
    </motion.div>
  );
}
