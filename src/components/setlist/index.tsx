import { Card } from '@/components/ui/card'

interface SetlistSectionProps {
  setList: Array<string>
}

export function SetlistSection({ setList }: SetlistSectionProps) {
  return (
    <Card className="border-2 border-black bg-white/95 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl">
      <div className="p-6 md:p-8">
        {/* Song List */}
        <ul className="space-y-3">
          {setList.map((song, index) => (
            <li
              key={index}
              className="group flex items-start gap-3"
            >
              <span className="text-primary w-6 shrink-0 text-lg font-bold md:text-xl">
                {index + 1}.
              </span>
              <span className="text-foreground group-hover:text-primary text-base leading-relaxed font-medium transition-colors md:text-lg">
                {song}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
