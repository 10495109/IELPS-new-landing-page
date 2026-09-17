import { ArrowRight } from "lucide-react"

const levels = [
  { code: "A1", label: "Beginner", color: "var(--turquoise)" },
  { code: "A2", label: "Elementary", color: "var(--turquoise)" },
  { code: "B1", label: "Intermediate", color: "var(--blue)", here: true },
  { code: "B2", label: "Upper Int.", color: "var(--blue)" },
  { code: "C1", label: "Advanced", color: "var(--purple)" },
  { code: "C2", label: "Proficient", color: "var(--purple)" },
]

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] gap-0 border-x border-border lg:grid-cols-[1.35fr_0.65fr]">
        {/* Left: editorial statement */}
        <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:border-r lg:border-border lg:py-24">
          <div className="mb-8 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-purple">
            <span className="h-px w-8 bg-purple" />
            English Integrated Language Platform
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-indigo text-balance sm:text-6xl lg:text-7xl">
            Start at your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">real level</span>
              <span className="absolute inset-x-0 bottom-1.5 z-0 h-4 bg-yellow" aria-hidden />
            </span>{" "}
            — climb every rung.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A ten-minute placement test sets your CEFR level. Then IELPS assembles
            your full course — adaptive lessons, live coaching, and verified
            certificates — one rung at a time.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-purple px-6 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Start free placement
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md border border-indigo/25 px-6 py-3.5 text-base font-semibold text-indigo transition-colors hover:bg-lavender"
            >
              Create account
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border">
            {[
              { v: "10 min", l: "To place you" },
              { v: "A1–C2", l: "Six CEFR levels" },
              { v: "40+", l: "Countries" },
            ].map((s) => (
              <div key={s.l} className="px-4 py-4 first:pl-0">
                <dt className="font-display text-2xl font-extrabold text-indigo">{s.v}</dt>
                <dd className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: signature vertical CEFR ladder rail */}
        <aside className="flex flex-col bg-card px-4 py-12 sm:px-8">
          <p className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-turquoise">
            The one ladder
          </p>
          <ol className="relative flex flex-1 flex-col justify-between gap-3">
            <span
              className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-border"
              aria-hidden
            />
            {levels.map((lvl) => (
              <li key={lvl.code} className="relative flex items-center gap-4">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg font-display text-sm font-extrabold text-white shadow-sm"
                  style={{ backgroundColor: lvl.color }}
                >
                  {lvl.code}
                </span>
                <div className="flex min-w-0 flex-1 items-center justify-between">
                  <span className="text-sm font-bold text-indigo">{lvl.label}</span>
                  {lvl.here && (
                    <span className="rounded-full bg-yellow px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-indigo">
                      You&apos;re here
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
