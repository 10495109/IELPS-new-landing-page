import { ArrowRight, Check, TrendingUp } from "lucide-react"

const checks = ["No credit card needed", "CEFR A1–C2", "Verified certificates"]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-indigo">
      {/* dotted brand texture over the indigo field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--violet) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto grid w-[min(1200px,calc(100%-2.5rem))] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/40 bg-purple/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet">
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
              className="inline-flex items-center rounded-xl border border-violet/40 px-6 py-3.5 text-base font-semibold text-background transition-colors hover:bg-purple/40"
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

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-violet/20 shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO%20PAGE%20V2-Fg9FwhQaOIjsSuOszTzTKtqpEbG1ef.jpg"
              alt="Smiling student holding notebooks, ready to learn English"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 w-56 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8">
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
