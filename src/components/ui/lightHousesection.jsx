// Gauge donut (Lighthouse-like)
function Gauge({ label, score }) {
    const s = Math.max(0, Math.min(score, 100));
    const radius = 36;            // SVG units
    const stroke = 8;
    const r = radius - stroke / 2;
    const C = 2 * Math.PI * r;

    // open-donut track (like Lighthouse ~ 300°)
    const track = C * 0.8;
    const gap = C - track;

    // score arc length
    const arc = track * (s / 100);

    const color =
        s >= 90 ? "stroke-emerald-500 text-emerald-600"
            : s >= 50 ? "stroke-orange-500 text-orange-600"
                : "stroke-red-500 text-red-600";

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-24 w-24">
                <svg
                    width="100%" height="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                    className="-rotate-135"
                    aria-label={`${label} score ${s}`}
                >
                    {/* track */}
                    <circle
                        cx={radius} cy={radius} r={r}
                        fill="none"
                        strokeWidth={stroke}
                        className="stroke-zinc-200"
                        strokeDasharray={`${track} ${gap}`}
                        strokeLinecap="round"
                    />
                    {/* value */}
                    <circle
                        cx={radius} cy={radius} r={r}
                        fill="none"
                        strokeWidth={stroke}
                        className={`${color}`}
                        strokeDasharray={`${arc} ${C - arc}`}
                        strokeLinecap="round"
                    />
                </svg>

                {/* score number */}
                <div className={`absolute inset-0 grid place-items-center text-sm font-semibold ${color.replace("stroke-", "text-")}`}>
                    {s}
                </div>
            </div>

            <p className="mt-2 text-sm text-zinc-700 text-center">{label}</p>
        </div>
    );
}

// Section
export default function LighthouseSection() {
    const SCORES = [
        { label: "Performance", score: 30 },
        { label: "Progressive Web App", score: 34 },
        { label: "Accessibility", score: 98 },
        { label: "Best Practices", score: 75 },
        { label: "SEO", score: 92 },
    ];

    return (
        <section className="relative mt-24 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                {/* gauges */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {SCORES.map((g) => (
                        <Gauge key={g.label} label={g.label} score={g.score} />
                    ))}
                </div>

                {/* optional hint */}

            </div>
        </section>
    );
}