import { ArrowRight } from "lucide-react"

const bullets = [
  { title: "Adaptive to your level", desc: "No two learner journeys are the same." },
  { title: "Short daily sessions", desc: "15–20 minutes is enough to progress." },
  { title: "Offline-ready lessons", desc: "Download and study without Wi-Fi." },
]

export function ChoosePath() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo lg:min-h-[46vw]">
      {/* the photograph is the full section background */}
      <picture>
        <source media="(max-width: 640px)" srcSet="/choose-path-1280.jpg" />
        <img
          src="/choose-path.jpg"
          alt="Student studying IELPS on a laptop while relaxing at home"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[64%_22%] lg:object-[70%_18%]"
          loading="lazy"
        />
      </picture>

      {/* scrim on the copy side */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(100deg, var(--indigo) 0%, color-mix(in srgb, var(--indigo) 94%, transparent) 30%, color-mix(in srgb, var(--indigo) 62%, transparent) 48%, color-mix(in srgb, var(--indigo) 16%, transparent) 66%, transparent 80%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
        aria-hidden
        style={{
          background:
            "linear-gradient(115deg, color-mix(in srgb, var(--indigo) 96%, transparent) 0%, color-mix(in srgb, var(--indigo) 88%, transparent) 45%, color-mix(in srgb, var(--indigo) 60%, transparent) 78%, color-mix(in srgb, var(--indigo) 36%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto grid w-[min(1200px,calc(100%-2.5rem))] items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div className="sm:max-w-[64%] lg:max-w-none">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-turquoise">
            Choose your path
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-background text-balance sm:text-5xl">
            Study anywhere. Learn at your own pace.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-violet">
            IELPS works on any device, any time. Lessons are short enough to fit a
            commute — structured enough to build real progress.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-turquoise" />
                <div>
                  <p className="font-bold text-background">{b.title}</p>
                  <p className="text-sm text-violet">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-purple px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Find your level
            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
          </a>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  )
}
