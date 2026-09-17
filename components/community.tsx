import { ArrowRight } from "lucide-react"

const stats = [
  { value: "40+", label: "Countries represented" },
  { value: "6", label: "CEFR levels covered" },
  { value: "12k+", label: "Active learners" },
]

export function Community() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] border-x border-border lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:border-r lg:border-border">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-turquoise">
            Where students start
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-indigo text-balance sm:text-5xl">
            A serious platform, a global classroom.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Whatever your background or starting level, IELPS meets you where you
            are and builds you up — rung by rung, alongside learners worldwide.
          </p>

          <dl className="mt-9 divide-y divide-border border-y border-border">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between py-4">
                <dt className="text-sm font-medium text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-purple">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-indigo px-6 py-3.5 text-base font-bold text-background transition-transform hover:-translate-y-0.5"
          >
            Join the community
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </div>

        <div className="min-h-[360px]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USE%20where%20students%20start%201-Cqkb9uTS0UYVwkSzxT8br8aZsBz8s7.jpg"
            alt="A diverse group of international IELPS learners smiling together"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
