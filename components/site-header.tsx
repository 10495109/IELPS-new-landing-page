import { BookOpen } from "lucide-react"

const links = ["Learn", "Placement", "Dashboard", "Plans"]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-[min(1200px,calc(100%-2.5rem))] items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo text-background">
            <BookOpen className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-indigo">
            I<span className="text-purple">E</span>LPS
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-indigo"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-indigo transition-colors hover:bg-secondary sm:inline-block"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-purple px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  )
}
