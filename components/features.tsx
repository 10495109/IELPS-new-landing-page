import { Layers, Mic, BadgeCheck, LineChart } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Adaptive lessons",
    desc: "Every session is built from what you got right and wrong last time — so you never revise what you already know.",
    color: "var(--turquoise)",
    tint: "rgba(34,199,198,0.12)",
  },
  {
    icon: Mic,
    title: "Speaking & writing coach",
    desc: "Guided rubrics with live tutor support. Speak, submit, and get real, actionable feedback.",
    color: "var(--purple)",
    tint: "rgba(81,46,171,0.10)",
  },
  {
    icon: BadgeCheck,
    title: "Verified certificates",
    desc: "Finish a CEFR level and unlock a shareable certificate that employers recognise.",
    color: "var(--blue)",
    tint: "rgba(56,96,190,0.10)",
  },
  {
    icon: LineChart,
    title: "Clear progress tracking",
    desc: "One dashboard. Your streak, level progress, and next step — no guesswork.",
    color: "var(--indigo)",
    tint: "rgba(13,0,77,0.08)",
  },
]

export function Features() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto w-[min(1200px,calc(100%-2.5rem))]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-purple">
            Built for real learners
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-indigo text-balance sm:text-5xl">
            Everything a learner needs, in one place.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ backgroundColor: f.tint, color: f.color }}
              >
                <f.icon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-indigo">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
