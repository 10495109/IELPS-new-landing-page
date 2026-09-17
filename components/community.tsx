import { ArrowRight } from "lucide-react"

const stats = [
  { value: "40+", label: "Countries" },
  { value: "6", label: "CEFR levels" },
  { value: "12k+", label: "Learners" },
]

export function Community() {
  return (
    <section className="bg-lavender py-20">
      <div className="mx-auto grid w-[min(1200px,calc(100%-2.5rem))] items-center gap-14 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-3xl border border-border shadow-xl lg:order-1">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USE%20where%20students%20start%201-Cqkb9uTS0UYVwkSzxT8br8aZsBz8s7.jpg"
            alt="A diverse group of international IELPS learners smiling together"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-turquoise">
            Where students start
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-indigo text-balance sm:text-5xl">
            Learners from every corner of the world.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
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
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-indigo px-6 py-3.5 text-base font-bold text-background transition-transform hover:-translate-y-0.5"
          >
            Join the community
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </section>
  )
}
