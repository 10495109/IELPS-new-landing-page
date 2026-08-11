import { ArrowRight, BookOpen } from "lucide-react"

const footerLinks = ["Learn", "Placement", "Plans", "Sign in"]

export function CtaFooter() {
  return (
    <>
      <section className="bg-background pb-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2.5rem))]">
          <div className="relative overflow-hidden rounded-3xl bg-indigo px-8 py-14 sm:px-14">
            <div
              className="absolute inset-0 opacity-[0.16]"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--violet) 1px, transparent 0)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-background text-balance sm:text-5xl">
                  Start where you actually are.
                </h2>
                <p className="mt-4 text-lg text-violet">
                  Take a free placement test — no account needed to see your level.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow px-6 py-3.5 text-base font-bold text-indigo shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Start free placement
                  <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-xl border border-violet/40 px-6 py-3.5 text-base font-semibold text-background transition-colors hover:bg-purple/40"
                >
                  See plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface py-12">
        <div className="mx-auto flex w-[min(1200px,calc(100%-2.5rem))] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo text-background">
                <BookOpen className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-indigo">
                I<span className="text-purple">E</span>LPS
              </span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              English Integrated Language Platform
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {footerLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-indigo"
              >
                {l}
              </a>
            ))}
          </nav>

          <span className="text-sm text-muted-foreground">© 2026 IELPS</span>
        </div>
      </footer>
    </>
  )
}
