const levels = [
  { code: "A1", label: "Beginner", color: "var(--turquoise)" },
  { code: "A2", label: "Elementary", color: "var(--turquoise)" },
  { code: "B1", label: "Intermediate", color: "var(--blue)" },
  { code: "B2", label: "Upper Int.", color: "var(--blue)" },
  { code: "C1", label: "Advanced", color: "var(--purple)" },
  { code: "C2", label: "Proficient", color: "var(--purple)" },
]

export function LevelLadder() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto w-[min(1200px,calc(100%-2.5rem))]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-turquoise">
            One ladder, six rungs
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-indigo text-balance sm:text-5xl">
            Every learner placed on the right step.
          </h2>
        </div>

        <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {levels.map((lvl, i) => (
            <li
              key={lvl.code}
              className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <span
                className="grid h-14 w-14 place-items-center rounded-xl font-display text-lg font-extrabold text-white"
                style={{ backgroundColor: lvl.color }}
              >
                {lvl.code}
              </span>
              <div>
                <p className="text-sm font-bold text-indigo">{lvl.label}</p>
                <p className="text-xs text-muted-foreground">Step {i + 1} of 6</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
