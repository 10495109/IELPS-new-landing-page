import { ArrowRight, BookOpen } from "lucide-react"

const footerCols = [
  { heading: "Learn", links: ["Placement test", "CEFR levels", "Adaptive lessons", "Certificates"] },
  { heading: "Platform", links: ["Dashboard", "Coaching", "Mobile app", "Offline mode"] },
  { heading: "Company", links: ["About", "Careers", "Contact", "Sign in"] },
]

export function CtaFooter() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-[min(1240px,calc(100%-2.5rem))] border-x border-border">
          <div className="flex flex-col items-start justify-between gap-8 px-4 py-16 sm:px-8 lg:flex-row lg:items-center lg:py-20">
            <div className="max-w-xl">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-purple">
                No account needed
              </p>
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-indigo text-balance sm:text-6xl">
                Start where you{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">actually are.</span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-4 bg-yellow" aria-hidden />
                </span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Take the free placement test and see your CEFR level in ten minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-purple px-6 py-3.5 text-base font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Start free placement
                <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-indigo/25 px-6 py-3.5 text-base font-semibold text-indigo transition-colors hover:bg-lavender"
              >
                See plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo">
        <div className="mx-auto w-[min(1240px,calc(100%-2.5rem))]">
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-background text-indigo">
                  <BookOpen className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="font-display text-xl font-extrabold tracking-tight text-background">
                  I<span className="text-turquoise">E</span>LPS
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-violet">
                English Integrated Language Platform. One ladder, every level, from
                A1 to C2.
              </p>
            </div>

            {footerCols.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-turquoise">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-violet transition-colors hover:text-background"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-2 border-t border-violet/20 py-6 sm:flex-row sm:items-center">
            <span className="text-sm text-violet">© 2026 IELPS. All rights reserved.</span>
            <span className="text-sm text-violet">CEFR-aligned · A1 to C2</span>
          </div>
        </div>
      </footer>
    </>
  )
}
