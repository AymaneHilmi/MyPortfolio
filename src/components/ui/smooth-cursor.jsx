"use client";

import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiDeliveroo } from "react-icons/si";
import { FaGlobeAmericas, FaMoon } from "react-icons/fa";
import { Layers, Search, PartyPopper, Star, Play, Pause, RotateCcw } from "lucide-react";

/** Styles “glass” du curseur */
const GLASS_BG = "rgba(120, 120, 120, 0.28)";
const GLASS_BORDER = "1px solid rgba(255,255,255,0.28)";
const DOT_GRAY = "rgba(225, 225, 225, 0.95)";

/* curseur standard */
const DEFAULT_CURSOR_ICON = "grow";

// Unified minimal animation for cursor icons (fade + slight scale only; no Y move)
const ICON_ANIM = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.18, ease: "easeOut" },
};

const ICON_BOX = {
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

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
  const currentIconRef = useRef(DEFAULT_CURSOR_ICON);
  useEffect(() => { currentIconRef.current = cursorIcon; }, [cursorIcon]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorRef = useRef(null);
  const diameter = useSpring(22, { ...springConfig, stiffness: 500 });

  // Robustesse
  const lastXY = useRef({ x: 0, y: 0 });
  const idleToDefaultTimer = useRef(0);
  const rafIdRef = useRef(0);
  const HYST_MS = 120; // small delay to avoid flicker leaving interactive zones
  const leaveTimerRef = useRef(null);

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
      const interactive = !!target && (isInteractiveElement(target) || !!iconHost);

      if (interactive) {
        if (leaveTimerRef.current) {
          clearTimeout(leaveTimerRef.current);
          leaveTimerRef.current = null;
        }
        const custom =
          iconHost?.getAttribute?.("data-cursor-icon") ||
          target?.getAttribute?.("data-cursor-icon");
        const next = custom?.length ? custom : DEFAULT_CURSOR_ICON;
        if (currentIconRef.current !== next) setCursorIcon(next);
        setIsInteractive(true);
      } else {
        if (!leaveTimerRef.current) {
          leaveTimerRef.current = setTimeout(() => {
            setIsInteractive(false);
            if (currentIconRef.current !== DEFAULT_CURSOR_ICON) setCursorIcon(DEFAULT_CURSOR_ICON);
            leaveTimerRef.current = null;
          }, HYST_MS);
        }
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

    const rescanFromEvent = (e) => {
      const x = e?.clientX;
      const y = e?.clientY;

      const doScan = (sx, sy) => {
        if (typeof sx === "number" && typeof sy === "number") {
          lastXY.current = { x: sx, y: sy };
          recomputeFromPoint(sx, sy);
        } else {
          const { x: lx, y: ly } = lastXY.current;
          recomputeFromPoint(lx, ly);
        }
      };

      // 1) immediate (pre-react setState)
      doScan(x, y);
      // 2) next frame (after DOM updates from the click handler)
      requestAnimationFrame(() => {
        doScan(x, y);
        // 3) second frame (some libs batch over two frames)
        requestAnimationFrame(() => doScan(x, y));
      });
      // 4) microtask fallback
      setTimeout(() => doScan(x, y), 0);
      // 5) tiny delay in case state settles a bit later
      setTimeout(() => doScan(x, y), 60);
    };

    window.addEventListener("pointerdown", rescanFromEvent, { passive: true });
    window.addEventListener("pointerup", rescanFromEvent, { passive: true });
    window.addEventListener("mousedown", rescanFromEvent, { passive: true });
    window.addEventListener("mouseup", rescanFromEvent, { passive: true });
    window.addEventListener("click", rescanFromEvent, true);

    window.addEventListener("pointerenter", rescanFromEvent, { passive: true });
    window.addEventListener("pointerleave", rescanFromEvent, { passive: true });
    window.addEventListener("focusin", rescan, true);
    window.addEventListener("focusout", rescan, true);

    // Media events that often flip data-cursor-icon in React
    const mediaEvents = ["play", "pause", "ended", "loadeddata"];
    mediaEvents.forEach((evt) => window.addEventListener(evt, rescanFromEvent, true));

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
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      window.removeEventListener("pointerdown", rescanFromEvent);
      window.removeEventListener("pointerup", rescanFromEvent);
      window.removeEventListener("mousedown", rescanFromEvent);
      window.removeEventListener("mouseup", rescanFromEvent);
      window.removeEventListener("click", rescanFromEvent, true);

      window.removeEventListener("pointerenter", rescanFromEvent);
      window.removeEventListener("pointerleave", rescanFromEvent);
      window.removeEventListener("focusin", rescan, true);
      window.removeEventListener("focusout", rescan, true);

      // Remove media event listeners
      mediaEvents.forEach((evt) => window.removeEventListener(evt, rescanFromEvent, true));

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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
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
          {...ICON_ANIM}
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
          {...ICON_ANIM}
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
          {...ICON_ANIM}
          style={ICON_BOX}
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
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
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <SiDeliveroo size={22} color="white" />
        </motion.div>
      );
    }

    if (name === "egg") {
      return (
        <motion.div
          key="egg"
          {...ICON_ANIM}
          style={ICON_BOX}
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
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <PartyPopper
            size={22}
            color="white"
            strokeWidth={2}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          />
        </motion.div>
      );
    }

    if (name === "egg#2") {
      return (
        <motion.div
          key="egg#2"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <FaGlobeAmericas size={26} color="white" />
        </motion.div>
      );
    }
    if (name === "egg#3") {
      return (
        <motion.div
          key="egg#3"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <Layers size={26} color="white" strokeWidth={2} />
        </motion.div>
      );
    }
    if (name === "egg#4") {
      return (
        <motion.div
          key="egg#4"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <FaMoon size={22} color="white" />
        </motion.div>
      );
    }
    if (name === "egg#5") {
      return (
        <motion.div
          key="egg#5"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <Search size={22} color="white" strokeWidth={2} />
        </motion.div>
      );
    }

    if (name === "egg#6") {
      return (
        <motion.div
          key="egg#6"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          {" "}
          <span className="text-white text-sm font-sfbold select-none">
            404
          </span>{" "}
        </motion.div>
      );
    }

    if (name === "star") {
      return (
        <motion.div
          key="star"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <Star size={22} color="white" strokeWidth={2} />
        </motion.div>
      );
    }

    if (name === "start") {
      return (
        <motion.div
          key="start"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <Play size={22} color="white" strokeWidth={2} />
        </motion.div>
      );
    }

    if (name === "stop") {
      return (
        <motion.div
          key="stop"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <Pause size={22} color="white" strokeWidth={2} />
        </motion.div>
      );
    }

    if (name === "restart") {
      return (
        <motion.div
          key="restart"
          {...ICON_ANIM}
          style={ICON_BOX}
        >
          <RotateCcw size={22} color="white" strokeWidth={2} />
        </motion.div>
      );
    }


    // Default fallback
    return (
      <motion.div
        key="grow"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
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
        <AnimatePresence initial={false} mode="wait">
          {renderIcon(cursorIcon)}
        </AnimatePresence>
      ) : (
        renderIcon("dot")
      )}
    </motion.div>
  );
}
