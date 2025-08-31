import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { useEasterEgg } from "@/context/EasterEggContext";
import { CheckCircle2, Lock, Star, Flame, Skull, Crown, HelpCircle, Keyboard, MousePointer2, Globe2, RotateCcw, Scan, ShieldAlert, Bug, Bot, AlertTriangle } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ToolTip";

const placeholders = [
  "Are we truly lost if the search is the way?",
  "What if we’re not lost, but just early to a path not mapped?",
  "isn't it strange how we find ourselves in the most unexpected places?",
];

// ---------- Small helpers ----------
const DIFFS = ["Easy", "Medium", "Hard", "Ultimate"];
const diffMeta = {
  Easy: {
    icon: Star,
    bar: "bg-emerald-500",
    chip: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  Medium: {
    icon: Flame,
    bar: "bg-amber-500",
    chip: "text-amber-700 bg-amber-50 border-amber-200",
  },
  Hard: {
    icon: Skull,
    bar: "bg-rose-500",
    chip: "text-rose-700 bg-rose-50 border-rose-200",
  },
  Ultimate: {
    icon: Crown,
    bar: "bg-indigo-500",
    chip: "text-indigo-700 bg-indigo-50 border-indigo-200",
  },
};
const getMeta = (lvl) =>
  diffMeta[lvl] || {
    icon: HelpCircle,
    bar: "bg-gray-900",
    chip: "text-gray-700 bg-gray-50 border-gray-200",
  };

function pct(n) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

// ---------- Circular progress (SVG) ----------
function CircularProgress({ value = 0, size = 120, stroke = 10 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = pct(value);
  const offset = c - (p / 100) * c;
  return (
    <svg width={size} height={size} className="block">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={stroke}
        className="fill-none stroke-gray-200"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={stroke}
        className="fill-none transition-[stroke-dashoffset] duration-500"
        stroke="url(#gradient)"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="font-ramidots"
        style={{ fontSize: size * 0.4 }}
      >
        {p}%
      </text>
    </svg>
  );
}

// ---------- Linear progress ----------
function ProgressBar({
  value = 0,
  label,
  ariaLabel,
  barClass = "bg-gray-900",
}) {
  const p = pct(value);
  return (
    <div className="w-full">
      {label ? (
        <div className="mb-1 flex items-center justify-between text-xs text-gray-600">
          <span className="font-medium">{label}</span>
          <span aria-hidden>{p}%</span>
        </div>
      ) : null}
      <div
        className="h-2.5 w-full rounded-full bg-gray-200"
        aria-label={ariaLabel}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={p}
      >
        <div
          className={`h-2.5 rounded-full transition-all ${barClass}`}
          style={{ width: `${p}%` }}
        />
      </div>
    </div>
  );
}

// ---------- Difficulty card ----------
function DifficultyCard({ level, total = 0, found = 0 }) {
  const Icon = diffMeta[level]?.icon || HelpCircle;
  const bar = diffMeta[level]?.bar || "bg-gray-900";
  const chip =
    diffMeta[level]?.chip || "text-gray-700 bg-gray-50 border-gray-200";
  const p = total > 0 ? (found / total) * 100 : 0;
  const done = total > 0 && found === total;
  return (
    <div
      className={`rounded-2xl border ${
        done ? "border-green-300 bg-green-50" : "border-gray-200 bg-white"
      } p-4 transition-colors`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${chip}`}
          >
            <Icon className="h-3.5 w-3.5" /> {level}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          {found}/{total}
        </span>
      </div>
      <ProgressBar
        value={p}
        ariaLabel={`${level} difficulty progress`}
        barClass={bar}
      />
    </div>
  );
}
// ---------- Main screen ----------
export default function EasterEggsScreen() {
  const {
    EggList,
    foundEggs,
    eggsTotal,
    resetEggs,
    resetMissions,
    incrementEggs,
    completedMissions,
    completeMission,
  } = useEasterEgg();

  const [egg6Value, setEgg6Value] = useState("");
  const [baitTriggered, setBaitTriggered] = useState(false);

  const handleChange = (e) => {
    const v = (e?.target?.value ?? "").toString();
    setEgg6Value(v);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Bait code handler
    if (egg6Value === "12123490") {
      if (!baitTriggered) {
        setBaitTriggered(true);
      }
      return;
    }
    // Vérifie le code secret pour l'egg #6
    if (egg6Value === "29220213") {
      if (!foundEggs.includes("#6")) {
        incrementEggs("#6");
      }
    }
  };

  const stats = useMemo(() => {
    const total = eggsTotal || EggList.length;
    const foundSet = new Set(foundEggs);

    const byLevel = DIFFS.reduce((acc, lvl) => {
      acc[lvl] = { total: 0, found: 0 };
      return acc;
    }, {});

    EggList.forEach((egg) => {
      const lvl = egg.level || "Easy";
      if (!byLevel[lvl]) byLevel[lvl] = { total: 0, found: 0 };
      byLevel[lvl].total += 1;
      if (foundSet.has(egg.id)) byLevel[lvl].found += 1;
    });

    const globalFound = foundEggs.length;
    const globalPct = total > 0 ? (globalFound / total) * 100 : 0;

    return { total, globalFound, globalPct, byLevel };
  }, [EggList, foundEggs, eggsTotal]);

  const grouped = useMemo(() => {
    const lanes = DIFFS.reduce((acc, lvl) => {
      acc[lvl] = [];
      return acc;
    }, {});
    EggList.forEach((egg) => {
      const lvl = egg.level || "Easy";
      if (!lanes[lvl]) lanes[lvl] = [];
      lanes[lvl].push(egg);
    });
    // sort within each lane: found first, then alpha
    const foundSet = new Set(foundEggs);
    DIFFS.forEach((lvl) => {
      lanes[lvl] = (lanes[lvl] || []).sort((a, b) => {
        const fa = foundSet.has(a.id) ? 0 : 1;
        const fb = foundSet.has(b.id) ? 0 : 1;
        if (fa !== fb) return fa - fb;
        const na = (a.name || a.id).toLowerCase();
        const nb = (b.name || b.id).toLowerCase();
        return na.localeCompare(nb);
      });
    });
    return lanes;
  }, [EggList, foundEggs]);

  const nextEgg = useMemo(
    () => EggList.find((e) => !foundEggs.includes(e.id)),
    [EggList, foundEggs]
  );

  const recentFound = useMemo(() => {
    return foundEggs
      .slice(-3)
      .reverse()
      .map((id) => EggList.find((e) => e.id === id))
      .filter(Boolean);
  }, [foundEggs, EggList]);

  const totalEggsCount = stats.total || EggList.length || 0;
  const milestones = useMemo(() => {
    const base = [1, 2, 4, 6, totalEggsCount].filter(
      (v, idx, arr) => v > 0 && arr.indexOf(v) === idx
    );
    return base.map((n) => ({ n, reached: foundEggs.length >= n }));
  }, [foundEggs.length, totalEggsCount]);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 space-y-10">
      {/* Top grid: header + mission + difficulties with a tall right panel */}
      <section className="grid md:grid-cols-3 items-stretch gap-5">
        {/* Left column: header + mission + difficulties */}
        <div className="md:col-span-2 space-y-5">
          {/* Hero / Header */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit inline-block">
                  Easter Eggs Dashboard
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Track your discoveries and progress towards the ultimate
                  quest.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <CircularProgress value={stats.globalPct} />
              </div>
            </div>
          </div>

          {/* Mission Description */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
            <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
              {/* Left: narrative */}
              <div>
                <h2 className="text-xl font-sfbold text-gray-900 mb-3">
                  The Story Behind
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  As a big competitor I like challenges that's why I decided to
                  develop this entire Easter Eggs system. Each egg is around me,
                  my personality, my cultures (for some exception maybe not...).
                  <br />
                  Hope you enjoy discovering them !
                </p>
              </div>

              {/* Right: small info cards */}
              <div className="grid gap-3">
                <div className="rounded-xl border border-gray-200 bg-white p-3 flex items-start gap-2">
                  <Keyboard className="h-4 w-4 text-gray-700 mt-0.5" />
                  <p className="text-xs text-gray-700">
                    Use your <span className="font-medium">keyboard</span> and{" "}
                    <span className="font-medium">mouse</span>. Both matter.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-3 flex items-start gap-2">
                  <Globe2 className="h-4 w-4 text-gray-700 mt-0.5" />
                  <p className="text-xs text-gray-700">
                    All Easter Eggs are hidden{" "}
                    <span className="font-medium">inside this portfolio</span>,
                    not outside it.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-3 flex items-start gap-2">
                  <MousePointer2 className="h-4 w-4 text-gray-700 mt-0.5" />
                  <p className="text-xs text-gray-700">
                    The <span className="font-medium">cursor</span> can
                    sometimes be your best ally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Difficulties */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFS.map((lvl) => (
              <DifficultyCard
                key={lvl}
                level={lvl}
                total={stats.byLevel[lvl]?.total || 0}
                found={stats.byLevel[lvl]?.found || 0}
              />
            ))}
          </div>
        </div>

        {/* Right column: tall card spanning header + difficulties */}
        <aside className="self-stretch h-full flex flex-col rounded-3xl border border-gray-200 bg-white p-6">
          <h3 className="text-sm font-sfbold text-gray-900 mb-4">
            Quest Tracker
          </h3>

          {/* Overall progress card */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700 font-medium">Overall</p>
              <span className="text-xs text-gray-500">
                {stats.globalFound}/{stats.total}
              </span>
            </div>
            <div className="mt-3">
              <ProgressBar
                value={stats.globalPct}
                ariaLabel="Overall Easter eggs progress"
                barClass="bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
              />
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              {Math.round(stats.globalPct)}% complete
            </p>
          </div>

          {/* Milestones */}
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-700 font-medium mb-2">Milestones</p>
            <ul className="space-y-2">
              {milestones.map((m) => (
                <li
                  key={m.n}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-700">
                    {m.n === totalEggsCount ? "Egg Lord" : `${m.n} eggs`}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${
                      m.reached
                        ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                        : "text-gray-600 bg-gray-50 border-gray-200"
                    }`}
                  >
                    {m.reached ? "Reached" : "Locked"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              resetEggs();
              resetMissions();
            }}
            className="group mt-4 w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 px-6 py-4 
                                   text-white font-ramidots text-2xl tracking-wider shadow-lg hover:opacity-95 transition"
          >
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition"></span>

            {/* Content */}
            <span className="flex items-center justify-center gap-3 relative z-10">
              <RotateCcw className="h-5 w-5 group-hover:rotate-[-20deg] transition-transform" />
              Reset Progression
            </span>
          </button>
        </aside>
      </section>

      {/* Eggs & right sidebar */}
      <section>
        <div id="all-eggs" className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-sfbold text-gray-900">All Easter Eggs</h2>
        </div>

        <div className="grid lg:grid-cols-3 items-stretch gap-6">
          {/* List (spans 2 cols on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            {EggList.map((egg) => {
              const isFound = foundEggs.includes(egg.id);
              const cardClass = isFound
                ? "bg-green-50 border-green-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                : "bg-gray-50 border-gray-200";

              return (
                <div
                  key={egg.id}
                  className={`relative flex flex-col gap-3 border p-4 rounded-xl overflow-hidden transition-all duration-300 ${cardClass}`}
                  data-cursor-icon={egg.cursor}
                >
                  <span className="absolute left-2 top-2 text-6xl sm:text-7xl md:text-8xl font-extrabold text-gray-300 select-none pointer-events-none opacity-30">
                    {egg.id}
                  </span>

                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-700">
                          {egg.name}
                        </p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            getMeta(egg.level).chip
                          }`}
                        >
                          {egg.level}
                        </span>
                      </div>

                      {/* Tooltip spécifique à l'egg #5 */}
                      {egg.id === "#5" ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <p className="text-sm text-gray-500">{egg.tip}</p>
                            </TooltipTrigger>
                            <TooltipContent className="w-96 p-4 bg-white shadow-lg">
                              <div className="space-y-2">
                                <p className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                                  Tooltip Quest
                                </p>
                                <div className="relative pl-6">
                                  {/* vertical line */}
                                  <span className="absolute left-2 top-2 bottom-2 w-px bg-gray-200" />

                                  {/* Step 1 */}
                                  <div className="relative pb-4">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <p className="text-sm font-medium text-gray-800">
                                          Tooltip 1 — Cesiveroo Page
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          Page:{" "}
                                          <a
                                            className="font-medium underline"
                                            href="/Cesiveroo"
                                          >
                                            [Cesiveroo]
                                          </a>
                                        </p>
                                      </div>
                                      <span
                                        className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium
                                        ${
                                          completedMissions.includes("tip#1")
                                            ? "bg-green-100 text-green-700 border border-green-300"
                                            : "bg-gray-100 text-gray-600 border border-gray-200"
                                        }`}
                                      >
                                        {completedMissions.includes("tip#1")
                                          ? "Found"
                                          : "Not Found"}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Step 2 */}
                                  <div className="relative pb-4">
                                    <div
                                      className={`flex items-start justify-between ${
                                        completedMissions.includes("tip#1")
                                          ? ""
                                          : "blur-sm opacity-50 select-none pointer-events-none"
                                      }`}
                                    >
                                      <div>
                                        <p className="text-sm font-medium text-gray-800">
                                          Tooltip 2 - About
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          Page:{" "}
                                          <a
                                            className="font-medium underline"
                                            href="/About"
                                          >
                                            [About]
                                          </a>
                                        </p>
                                      </div>
                                      <span
                                        className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium
                                        ${
                                          completedMissions.includes("tip#2")
                                            ? "bg-green-100 text-green-700 border border-green-300"
                                            : "bg-gray-100 text-gray-600 border border-gray-200"
                                        }`}
                                      >
                                        {completedMissions.includes("tip#2")
                                          ? "Found"
                                          : "Not Found"}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Step 3 */}
                                  <div className="relative">
                                    <div
                                      className={`flex items-start justify-between ${
                                        completedMissions.includes("tip#2")
                                          ? ""
                                          : "blur-sm opacity-50 select-none pointer-events-none"
                                      }`}
                                    >
                                      <div>
                                        <p className="text-sm font-medium text-gray-800">
                                          Tooltip 3 - FinalEgg
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          Page:{" "}
                                          <a
                                            className="font-medium underline"
                                            href="/easter-eggs"
                                          >
                                            [????]
                                          </a>
                                        </p>
                                      </div>
                                      <span
                                        className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium
                                        ${
                                          completedMissions.includes("tip#3")
                                            ? "bg-green-100 text-green-700 border border-green-300"
                                            : "bg-gray-100 text-gray-600 border border-gray-200"
                                        }`}
                                      >
                                        {completedMissions.includes("tip#3")
                                          ? "Found"
                                          : "Not Found"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <p className="text-sm text-gray-500 italic">
                          {egg.tip}
                        </p>
                      )}
                    </div>
                    <div className="ml-4 mt-1">
                      {isFound ? (
                        <CheckCircle2 className="text-green-500 w-5 h-5" />
                      ) : (
                        <Lock className="text-gray-400 w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* 👉 Spécifique à l'egg #6 */}
                  {egg.id === "#6" && !isFound && (
                    <PlaceholdersAndVanishInput
                      placeholders={placeholders}
                      onChange={handleChange}
                      onSubmit={onSubmit}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right sidebar beside list */}
          <aside className="space-y-4 self-stretch h-full flex flex-col">
            {/* Egg Scanner (troll) */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-sfbold text-gray-900 flex items-center gap-2">
                  <Scan className="h-4 w-4" /> Egg Scanner (Beta)
                </p>
                <span className="text-[10px] rounded-full border px-2 py-0.5 text-gray-600 bg-gray-50">
                  radar offline
                </span>
              </div>
              <div className="mt-3">
                <div className="h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-2/5 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 animate-pulse"></div>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  Scanning… 39% (approx).
                </p>
              </div>
              <button
                className="mt-3 w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition"
                onClick={() => {
                  if (
                    completedMissions.includes("tip#2") &&
                    !completedMissions.includes("tip#3.0")
                  ) {
                    toast("Something has been activated on this page.");
                    completeMission("tip#3.0");
                  } else if (!completedMissions.includes("tip#2")) {
                    toast("Scanning again...");
                  }
                }}
              >
                {completedMissions.includes("tip#2")
                  ? "Activate"
                  : "Scan again"}
              </button>
            </div>

            {/* Patch Notes (troll) */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-sfbold text-gray-900 mb-2 flex items-center gap-2">
                <Bug className="h-4 w-4" /> Patch Notes v0.0.egg
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                <li>The pineapple knows when you’re online.</li>
                <li>Never trust a left shoe after midnight.</li>
                <AnimatePresence mode="wait">
                  {baitTriggered ? (
                    <motion.li
                      key="gotcha"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs font-semibold text-rose-600"
                    >
                      Did you really thought it was that? Cute.
                    </motion.li>
                  ) : (
                    <motion.li
                      key="bait"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-gray-700"
                    >
                      The Easter eggs like the 12123490 number.
                    </motion.li>
                  )}
                </AnimatePresence>
                <li>Two clicks forward, one sneeze back.</li>
                <li className="text-gray-400">* probably not trustworthy .</li>
              </ul>
              <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1">
                <Bot className="h-3.5 w-3.5" /> Release managed by
                <TooltipProvider>
                  {completedMissions.includes("tip#3.0") &&
                  !completedMissions.includes("tip#3") ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className=" text-gray-500">Aymane</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm w-fit space-x-2">
                          <span className="text-gray-600 text-sm font-medium">
                            Hidden Tip #3
                          </span>
                          <button
                            onClick={() => completeMission("tip#3")}
                            className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                            data-cursor-icon="discover"
                          >
                            Discover Tip
                          </button>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <span className="text-gray-500">Aymane</span>
                  )}
                </TooltipProvider>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 mt-4">
              <p className="text-sm font-sfbold text-gray-900 mb-2">
                Need real help?
              </p>
              <p className="text-xs text-gray-600 mb-3">
                If you’re really stuck and can’t find the eggs, you can reach
                out to me directly i will may help you... or not :
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/aymanehilmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  data-cursor-icon="arrow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@aymanehilmi.com"
                  data-cursor-icon="mail"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12H8m0 0l4-4m-4 4l4 4"
                    />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
