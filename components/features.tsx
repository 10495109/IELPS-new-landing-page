import { Layers, Mic, BadgeCheck, LineChart } from "lucide-react"

export function Features() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-[min(1240px,calc(100%-2.5rem))] border-x border-border px-4 py-20 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-purple">
              Fully equipped
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-indigo text-balance sm:text-5xl">
              Everything a serious learner needs, in one platform.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Placement, adaptive study, human coaching and recognised
            certification — no bolt-on tools required.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large signature tile */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-indigo p-8 lg:col-span-2 lg:row-span-2">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--violet) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-turquoise/20 text-turquoise">
                <Layers className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-background sm:text-3xl">
                An engine that adapts every single session.
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-violet">
                IELPS rebuilds each lesson from what you got right and wrong last
                time — so you spend your minutes on the gaps that actually move
                your level, never on revision you don&apos;t need.
              </p>
            </div>
            <dl className="relative mt-8 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-xl border border-violet/20 bg-violet/20">
              {[
                { v: "15 min", l: "Daily session" },
                { v: "+1 level", l: "In ~6 months" },
              ].map((s) => (
                <div key={s.l} className="bg-indigo p-5">
                  <dt className="font-display text-2xl font-extrabold text-yellow">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-violet">{s.l}</dd>
                </div>
              ))}
            </dl>
          </article>

          <FeatureCard
            icon={Mic}
            title="Speaking & writing coach"
            desc="Guided rubrics with live tutor feedback. Speak, submit, and improve fast."
            color="var(--purple)"
            tint="rgba(81,46,171,0.10)"
          />
          <FeatureCard
            icon={BadgeCheck}
            title="Verified certificates"
            desc="Finish a CEFR level and unlock a shareable, employer-recognised certificate."
            color="var(--blue)"
            tint="rgba(56,96,190,0.10)"
          />
        </div>

        {/* Progress-tracking full-width strip */}
        <article className="mt-4 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lavender text-indigo">
              <LineChart className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-indigo">
                One dashboard, zero guesswork
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your streak, level progress and next step — always visible, always
                current.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-purple transition-colors hover:text-indigo"
          >
            See the dashboard →
          </a>
        </article>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  color,
  tint,
}: {
  icon: React.ElementType
  title: string
  desc: string
  color: string
  tint: string
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      <span
        className="grid h-12 w-12 place-items-center rounded-xl"
        style={{ backgroundColor: tint, color }}
      >
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-indigo">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </article>
  )
}
