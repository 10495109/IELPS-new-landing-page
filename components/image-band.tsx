export function ImageBand() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-[min(1240px,calc(100%-2.5rem))] border-x border-border">
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USE%20photo-2286133139-1024x1024-4dYpRS65vG58ca4PGHwF9JgpKwTNf0.jpg"
            alt="Confident international students together after class"
            className="h-[280px] w-full object-cover object-center sm:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo/85 via-indigo/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10">
            <p className="max-w-md font-display text-2xl font-extrabold leading-tight text-background text-balance sm:text-3xl">
              Learners in 40+ countries, all on the same ladder.
            </p>
            <a
              href="#"
              className="inline-flex w-fit items-center rounded-md bg-yellow px-5 py-3 text-sm font-bold text-indigo transition-transform hover:-translate-y-0.5"
            >
              Meet the community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
