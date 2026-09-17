const steps = [
  { title: "Placement test", desc: "Know your level in 10 min." },
  { title: "Personalised path", desc: "Course set up automatically." },
  { title: "Practice daily", desc: "Short, focused sessions." },
  { title: "Get coached", desc: "Live support when you need it." },
  { title: "Earn certificate", desc: "CEFR-aligned and shareable." },
]

export function StudentRoute() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto w-[min(1200px,calc(100%-2.5rem))]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-purple">
            The student route
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-indigo text-balance sm:text-5xl">
            From placement to certificate.
          </h2>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-display text-4xl font-extrabold text-lilac">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-bold text-indigo">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
