
export default function TechniqueSection({
  codeImg = "/images/code-react-tailwind.jpg", // capture d’écran de ton code
  uiImg = "/images/ui-mock.jpg", // capture du rendu visuel (ton site)
  showStack = true,
}) {
  return (
    <section className="relative mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Section 4 — La Technique</p>
          <h2 className="mt-2 text-3xl md:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Integrating 3D with Spline
          </h2>
          <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
        </div>

        {/* Split: code (gauche) / interface (droite) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Code window */}
          <figure className="order-1 rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-200 bg-zinc-50">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs uppercase tracking-widest text-zinc-500">code.tsx</span>
            </div>
            <div className="relative">
              <img src={codeImg} alt="Code screenshot" className="h-full w-full object-cover" />
              <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
            <figcaption className="px-4 py-3 text-xs text-zinc-500 flex items-center justify-between">
              <span>React + Tailwind</span>
              <span className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
            </figcaption>
          </figure>

          {/* Laptop mockup */}
          <figure className="order-2">
            <div className="mx-auto w-full max-w-2xl">
              {/* screen */}
              <div className="relative rounded-xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-50 border-b border-zinc-200">
                  <span className="text-xs uppercase tracking-widest text-zinc-500">preview</span>
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-zinc-300" />
                    <span className="h-2 w-2 rounded-full bg-zinc-300" />
                    <span className="h-2 w-2 rounded-full bg-zinc-300" />
                  </span>
                </div>
                <img src={uiImg} alt="UI preview" className="h-[42vh] md:h-[52vh] w-full object-cover" />
                <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl" />
              </div>
              {/* base */}
              <div className="mx-auto h-3 w-[85%] rounded-b-2xl bg-zinc-200 mt-1" />
            </div>
            <figcaption className="mt-3 text-center text-xs text-zinc-500">Ce que voit l’utilisateur</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function TechChip({ label, Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm">
      {Icon ? (
        <Icon className="h-4 w-4" />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
      )}
      {label}
    </span>
  );
}
