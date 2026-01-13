import { Music2 } from 'lucide-react'
interface SetlistSectionProps {
  setList: Array<string>
  className: string
}

export function SetlistSection({ setList, className }: SetlistSectionProps) {
  return (
    <div className="px-4 py-6 md:px-6 lg:px-10">
      {/* Song List */}
      <ul className="space-y-3">
        {setList.map((song, index) => (
          <li
            key={index}
            className="group flex items-center gap-3"
          >
            <span className="text-primary w-5 text-xl font-bold">
              <Music2 className={className} />
            </span>
            <span className="text-foreground text-sm font-semibold md:text-lg">
              {song}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
