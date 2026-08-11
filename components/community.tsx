import { ArrowRight } from "lucide-react"

const stats = [
  { value: "40+", label: "Countries" },
  { value: "6", label: "CEFR levels" },
  { value: "12k+", label: "Learners" },
]

export function Community() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo lg:min-h-[46vw]">
      {/* the photograph is the full section background */}
      <picture>
        <source media="(max-width: 640px)" srcSet="/community-1280.jpg" />
        <img
          src="/community.jpg"
          alt="A diverse group of international IELPS learners smiling together"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[38%_45%] lg:object-[30%_45%]"
          loading="lazy"
        />
      </picture>

      {/* scrim on the copy side - this one reads right to left */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(260deg, var(--indigo) 0%, color-mix(in srgb, var(--indigo) 94%, transparent) 30%, color-mix(in srgb, var(--indigo) 62%, transparent) 48%, color-mix(in srgb, var(--indigo) 16%, transparent) 66%, transparent 80%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--indigo) 34%, transparent) 0%, color-mix(in srgb, var(--indigo) 74%, transparent) 38%, color-mix(in srgb, var(--indigo) 90%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto grid w-[min(1200px,calc(100%-2.5rem))] items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div aria-hidden className="hidden lg:block" />

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-turquoise">
            Where students start
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-background text-balance sm:text-5xl">
            Learners from every corner of the world.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-violet">
            IELPS learners come from 40+ countries. Whatever your background or
            starting level, the platform meets you where you are and builds you up —
            step by step.
          </p>

          <dl className="mt-9 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-purple">{s.value}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-yellow px-6 py-3.5 text-base font-bold text-indigo shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Join the community
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </section>
  )
}
