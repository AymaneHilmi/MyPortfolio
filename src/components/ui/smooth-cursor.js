"use client";

import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiDeliveroo } from "react-icons/si";

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
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <SiDeliveroo size={22} color="white" />
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
        zIndex: 100,
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
