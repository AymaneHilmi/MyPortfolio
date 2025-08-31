import React, { useState, useEffect } from "react";
import Step1 from "@/assets/CesiverooStep1.png";

export default function InteractiveStepsSection() {
  const steps = [
    {
      id: "discover",
      title: "Discover",
      desc: "Understand the context and constraints. Align on goals, audience, and success metrics before a single line of code.",
    },
    {
      id: "design",
      title: "Design",
      desc: "Sketch flows, wireframe, then craft high-fidelity UI components that feel crisp, fast, and cohesive.",
    },
    {
      id: "develop",
      title: "Develop",
      desc: "Build accessible, maintainable components with great DX. Ship iteratively with strong testing.",
    },
    {
      id: "deliver",
      title: "Deliver",
      desc: "Measure, polish, and launch with confidence. Gather feedback, optimize, and plan the next cycle.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = document.getElementById(`step-card-${active}`);
    if (window.innerWidth < 768 && el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [active]);

  const current = steps[active];

  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* LEFT */}
          <div className="md:col-span-5">
            <header className="mb-6">
              <p className="text-base uppercase tracking-widest text-sfregular text-gray-500 flex flex-row items-center gap-2">
                <img src={Step1} className="h-10 w-10" />
                Research
              </p>
              <h2 className="text-2xl md:text-5xl font-sfbold tracking-tight">
                Needs Assessment
              </h2>
            </header>

            <div
              key={current.id}
              className="space-y-3 animate-in fade-in duration-200"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                {current.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {current.desc}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border bg-card text-card-foreground px-4 py-2 text-sm shadow-sm hover:shadow-md transition-shadow"
                  onClick={() =>
                    console.log(`Primary action for ${current.id}`)
                  }
                >
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-70"
                  >
                    <path
                      d="M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    id={`step-card-${i}`}
                    key={s.id}
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={[
                      "relative group text-left rounded-2xl border bg-card text-card-foreground p-5 md:p-6",
                      "transition-all duration-300 focus:outline-none",
                      isActive
                        ? "ring-1 ring-[#20CFBD]/60 shadow-lg -translate-y-1.5 scale-[1.02]"
                        : "hover:-translate-y-1 hover:shadow-md",
                    ].join(" ")}
                  >
                    {/* subtle corner accent */}
                    <span
                      className={[
                        "pointer-events-none absolute -top-px -left-px h-10 w-10 rounded-tl-2xl rounded-br-[1.25rem]",
                        "bg-gradient-to-br from-[#20CFBD]/20 via-transparent to-transparent",
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100 transition-opacity",
                      ].join(" ")}
                      aria-hidden
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className={[
                          "grid place-items-center h-10 w-10 shrink-0 rounded-full border",
                          isActive
                            ? "border-[#20CFBD] bg-[#20CFBD]/10"
                            : "border-border",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "text-sm font-semibold",
                            isActive
                              ? "text-[#20CFBD]"
                              : "text-muted-foreground",
                          ].join(" ")}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base md:text-lg font-medium tracking-tight">
                          {s.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {s.desc}
                        </p>
                      </div>
                    </div>

                    {/* floating hint for active */}
                    {isActive && (
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_20px_50px_-20px_rgba(32,207,189,0.35)]"
                        aria-hidden
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
