import { SetlistSection } from '@/components/setlist'
import { Card } from '@/components/ui/card'
import { SETLIST_OB, SETLIST_OOB, SETLIST_YB } from '@/constants'
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-y-hidden bg-[#f3f4f6]">
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-10 py-20 md:px-30 lg:px-40">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="font-eras mb-4 text-7xl leading-tight md:text-8xl">
            Take the
            <br />
            <span className="inline-block text-[#0052d4]">{'"MUSE"'}</span>
            <br />
            train
          </h1>
          <p className="font-eras mb-2 text-lg font-semibold md:text-2xl">
            New-year jazz Performance
          </p>
          <p className="font-one text-[#767676] md:text-lg">
            2026년 1월 17일 6 pm · 신촌 세시봉
          </p>
        </header>

        <h2 className="font-eras py-4 text-2xl font-extrabold md:text-4xl">
          SETLIST
        </h2>

        {/* Setlists */}
        <Card className="font-eras rounded-xl border-2 border-black bg-white/95 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl">
          <SetlistSection
            setList={SETLIST_OOB}
            className="text-[#6687e2]"
          />
          <SetlistSection
            setList={SETLIST_OB}
            className="text-[#ef3939]"
          />
          <SetlistSection
            setList={SETLIST_YB}
            className="text-[#f59e0b]"
          />
        </Card>

        {/* Footer */}
        <footer className="mt-16 text-center md:mt-20">
          <p className="text-sm text-white/70 md:text-base">Ticket 7,000₩</p>
        </footer>
      </div>
    </main>
  )
}
