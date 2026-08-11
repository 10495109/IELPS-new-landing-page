import { ArrowRight, Check, TrendingUp } from "lucide-react"

const checks = ["No credit card needed", "CEFR A1–C2", "Verified certificates"]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo">
      {/* the photograph is the hero banner - everything below sits on top of it */}
      <picture>
        <source media="(max-width: 640px)" srcSet="/hero-student-1280.jpg" />
        <img
          src="/hero-student.jpg"
          alt="Smiling student holding notebooks, ready to learn English"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[76%_40%] sm:object-[80%_6%] lg:object-[74%_6%]"
          fetchPriority="high"
        />
      </picture>

      {/* scrim: keeps the copy legible over the street without hiding her */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(100deg, var(--indigo) 0%, color-mix(in srgb, var(--indigo) 93%, transparent) 26%, color-mix(in srgb, var(--indigo) 55%, transparent) 44%, color-mix(in srgb, var(--indigo) 12%, transparent) 60%, transparent 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
        aria-hidden
        style={{
          background:
            "linear-gradient(115deg, color-mix(in srgb, var(--indigo) 96%, transparent) 0%, color-mix(in srgb, var(--indigo) 88%, transparent) 45%, color-mix(in srgb, var(--indigo) 58%, transparent) 78%, color-mix(in srgb, var(--indigo) 34%, transparent) 100%)",
        }}
      />

      {/* dotted brand texture over the indigo field */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--violet) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(100deg, black 0%, black 28%, transparent 52%)",
          WebkitMaskImage: "linear-gradient(100deg, black 0%, black 28%, transparent 52%)",
        }}
      />

      <div className="relative mx-auto grid w-[min(1200px,calc(100%-2.5rem))] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="sm:max-w-[64%] lg:max-w-none">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/40 bg-purple/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-turquoise" />
            English from A1 to C2
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-background text-balance sm:text-6xl">
            The English course that{" "}
            <span className="text-yellow">adjusts to you.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-violet">
            Placement test in 10 minutes. Then IELPS builds your full course —
            lessons, practice, and coaching — around your exact level.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow px-6 py-3.5 text-base font-bold text-indigo shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Start free placement
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-xl border border-violet/40 bg-indigo/30 px-6 py-3.5 text-base font-semibold text-background backdrop-blur-sm transition-colors hover:bg-purple/40"
            >
              Create account
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-medium text-violet">
                <Check className="h-4 w-4 text-turquoise" strokeWidth={3} />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* the stat card now floats on the banner rather than under a framed photo */}
        <div className="relative lg:min-h-[22rem]">
          <div className="w-56 rounded-2xl border border-border bg-card p-4 shadow-xl lg:absolute lg:bottom-2 lg:-left-10">
            <div className="flex items-center gap-2 text-turquoise">
              <TrendingUp className="h-4 w-4" strokeWidth={2.6} />
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Average level gain
              </span>
            </div>
            <p className="mt-1 font-display text-2xl font-extrabold text-indigo">
              +1 CEFR <span className="text-purple">level</span>
            </p>
            <p className="text-xs text-muted-foreground">in 6 months of regular study</p>
          </div>
        </div>
      </div>
    </section>
  )
}
