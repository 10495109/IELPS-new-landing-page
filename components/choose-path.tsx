import { ArrowRight } from "lucide-react"

const bullets = [
  { title: "Adaptive to your level", desc: "No two learner journeys are the same." },
  { title: "Short daily sessions", desc: "15–20 minutes is enough to progress." },
  { title: "Offline-ready lessons", desc: "Download and study without Wi-Fi." },
]

export function ChoosePath() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2.5rem))] border-x border-border lg:grid-cols-2">
        <div className="order-2 min-h-[320px] lg:order-1">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHOOSE%20YOUR%20PATH%20V2-bCu4gzIwnRLQKML4XZDvcgcF3iOvm9.png"
            alt="Student studying IELPS on a laptop while relaxing at home"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 flex flex-col justify-center border-b border-border px-4 py-16 sm:px-8 lg:order-2 lg:border-b-0 lg:border-l">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-purple">
            Study your way
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-indigo text-balance sm:text-5xl">
            Any device. Any time. Your pace.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Lessons are short enough to fit a commute — structured enough to build
            real, measurable progress.
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-4 py-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-turquoise" />
                <div>
                  <p className="font-bold text-indigo">{b.title}</p>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-purple px-6 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Find your level
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </section>
  )
}
