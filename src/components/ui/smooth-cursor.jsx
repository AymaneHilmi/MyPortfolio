"use client";

import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiDeliveroo } from "react-icons/si";
import { FaGlobeAmericas, FaMoon } from "react-icons/fa";
import { Layers, Search, PartyPopper, Star } from "lucide-react";

/** Styles “glass” du curseur */
const GLASS_BG = "rgba(120, 120, 120, 0.28)";
const GLASS_BORDER = "1px solid rgba(255,255,255,0.28)";
const DOT_GRAY = "rgba(225, 225, 225, 0.95)";

/* curseur standard */
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

  const cursorRef = useRef(null);
  const diameter = useSpring(22, { ...springConfig, stiffness: 500 });

  // Robustesse
  const lastXY = useRef({ x: 0, y: 0 });
  const idleToDefaultTimer = useRef(0);
  const rafIdRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = cursorRef.current;
    if (!el) return;

    // Touch → pas de curseur custom
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
      let n = node instanceof Element ? node : null;
      while (n && n !== document.body) {
        if (n.matches?.(interactiveSelector)) return true;
        if (n.getAttribute?.("data-cursor") === "interactive") return true;
        const cs = window.getComputedStyle(n);
        if (cs?.cursor === "pointer") return true;
        const ti = n.getAttribute?.("tabindex");
        if (ti !== null && ti !== undefined && ti !== "-1") return true;
        n = n.parentElement;
      }
      return false;
    };

    // Reset total
    const hardReset = () => {
      setIsInteractive(false);
      setCursorIcon(DEFAULT_CURSOR_ICON);
    };

    // Recalcule ce qu’il y a sous le pointeur
    const recomputeFromPoint = (x, y) => {
      const target = document.elementFromPoint(x, y);
      const iconHost = target?.closest?.("[data-cursor-icon]");
      const interactive =
        !!target && (isInteractiveElement(target) || !!iconHost);

      if (interactive) {
        const custom =
          iconHost?.getAttribute?.("data-cursor-icon") ||
          target?.getAttribute?.("data-cursor-icon");
        setCursorIcon(custom?.length ? custom : DEFAULT_CURSOR_ICON);
        setIsInteractive(true);
      } else {
        // 👉 Sortie d’une zone interactive → force retour instantané au DOT
        setIsInteractive(false);
        setCursorIcon(DEFAULT_CURSOR_ICON);
      }
    };

    const onPointerMove = (e) => {
      lastXY.current = { x: e.clientX, y: e.clientY };
      if (rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(() => {
        const { x, y } = lastXY.current;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        recomputeFromPoint(x, y);
        rafIdRef.current = 0;
      });
    };

    // Sortie fenêtre
    const onMouseOutWindow = (ev) => {
      if (!ev.relatedTarget && !ev.toElement) hardReset();
    };

    // Rescan au scroll/resize/visibility (capture tous les scrolls)
    const rescan = () => {
      const { x, y } = lastXY.current;
      recomputeFromPoint(x, y);
    };

    document.body.style.cursor = "none";
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mouseout", onMouseOutWindow);
    window.addEventListener("blur", hardReset);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hardReset();
      else rescan();
    });
    window.addEventListener("resize", rescan);
    window.addEventListener("scroll", rescan, { passive: true });
    document.addEventListener("scroll", rescan, true); // ✅ scroll des conteneurs internes

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mouseout", onMouseOutWindow);
      window.removeEventListener("blur", hardReset);
      window.removeEventListener("resize", rescan);
      window.removeEventListener("scroll", rescan);
      document.removeEventListener("scroll", rescan, true);
      document.body.style.cursor = "auto";
      if (idleToDefaultTimer.current) clearTimeout(idleToDefaultTimer.current);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  useEffect(() => {
    diameter.set(isInteractive ? 44 : 22);
  }, [isInteractive, diameter]);

  // icones
  const renderIcon = (name) => {
    if (name === "dot") {
      return (
        <motion.div
          key="dot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          style={{
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: DOT_GRAY,
          }}
        />
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
          {" "}
          <path d="M6 18 L18 6" /> <path d="M9 6 H18 V15" />{" "}
        </motion.svg>
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
          {" "}
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />{" "}
          <polyline points="3,5 12,13 21,5" />{" "}
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
          {" "}
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />{" "}
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />{" "}
        </motion.svg>
      );
    }

    if (name === "grow") {
      return (
        <motion.div
          key="grow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.8 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.12 }}
          style={{
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: DOT_GRAY,
          }}
        />
      );
    }
    if (name === "cesiveroo") {
      return (
        <motion.div
          key="cesiveroo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.12 }}
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
          {" "}
          <span
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            {" "}
            ?{" "}
          </span>{" "}
        </motion.div>
      );
    }

    if (name === "egg#1") {
      return (
        <motion.div
          key="egg#1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.12 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PartyPopper
            size={22}
            color="white"
            strokeWidth={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
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
          transition={{ duration: 0.12 }}
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
          transition={{ duration: 0.12 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Layers size={26} color="white" strokeWidth={2} />
        </motion.div>
      );
    }
    if (name === "egg#4") {
      return (
        <motion.div
          key="egg#4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.12 }}
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
    if (name === "egg#5") {
      return (
        <motion.div
          key="egg#5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.12 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search size={22} color="white" strokeWidth={2} />
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
          {" "}
          <span className="text-white text-sm font-bold select-none">
            404
          </span>{" "}
        </motion.div>
      );
    }

    if (name === "star") {
  return (
    <motion.div
      key="star"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.12 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Star size={22} color="white" strokeWidth={2} />
    </motion.div>
  );
}
    // Default fallback
    return (
      <motion.div
        key="grow"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.8 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.12 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: 9999,
          background: DOT_GRAY,
        }}
      />
    );
  };

  if (isTouchDevice) return null;

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
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
      {/* 👉 Pas d'AnimatePresence lors du retour au DOT pour éviter toute icône “bloquée” */}
      {isInteractive ? (
        <AnimatePresence initial={false} mode="sync">
          {renderIcon(cursorIcon)}
        </AnimatePresence>
      ) : (
        renderIcon("dot")
      )}
    </motion.div>
  );
}
