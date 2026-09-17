const steps = [
  { title: "Placement test", desc: "Know your level in 10 minutes." },
  { title: "Personalised path", desc: "Your course set up automatically." },
  { title: "Practice daily", desc: "Short, focused adaptive sessions." },
  { title: "Get coached", desc: "Live human support when you need it." },
  { title: "Earn certificate", desc: "CEFR-aligned and shareable." },
]

export function StudentRoute() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto w-[min(1240px,calc(100%-2.5rem))] border-x border-border px-4 py-20 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-purple">
            The student route
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-indigo text-balance sm:text-5xl">
            From placement to certificate.
          </h2>
        </div>

        <ol className="relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* connecting rule across the top of the markers on desktop */}
          <span
            className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-border lg:block"
            aria-hidden
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-indigo bg-background font-display text-sm font-extrabold text-indigo">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 font-display text-lg font-bold text-indigo">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
