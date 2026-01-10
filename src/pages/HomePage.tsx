import { SetlistSection } from '@/components/setlist'
import { SETLIST } from '@/constants'
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-y-scroll bg-[#f3f4f6]">
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <header className="mb-8 text-center md:mb-16 lg:mb-20">
          <h1 className="mb-4 text-5xl leading-tight font-extrabold text-balance md:text-6xl lg:text-7xl xl:text-8xl">
            Take the
            <br />
            <span className="inline-block text-[#0052d4]">{'"MUSE"'}</span>
            <br />
            train
          </h1>
          <p className="mb-2 text-lg font-semibold md:text-xl">
            New-year jazz Performance
          </p>
          <p className="text-base text-[#767676] md:text-lg">
            2026년 1월 17일 6 pm · 신촌 세시봉
          </p>
        </header>

        <h2 className="py-4 text-4xl font-extrabold">SETLIST</h2>

        {/* Setlists */}
        <div className="gap-6">
          <SetlistSection setList={SETLIST} />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center md:mt-20">
          <p className="text-sm text-white/70 md:text-base">Ticket 7,000₩</p>
        </footer>
      </div>
    </main>
  )
}
