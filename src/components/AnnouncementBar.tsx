import { PRIMARY_PHONE, STORE } from '../data/store'

const MESSAGES = [
  '🌙 Online orders open 24 hours',
  '🚚 All-island delivery available',
  `📞 Call / WhatsApp ${PRIMARY_PHONE.display}`,
  '🛡️ 3-month warranty on ride-on jeeps',
  `📍 Visit us on Dambulla Road, ${STORE.town}`,
]

export function AnnouncementBar() {
  // Content is rendered twice so the marquee loops seamlessly.
  const row = [...MESSAGES, ...MESSAGES]
  return (
    <div className="relative z-50 flex items-center bg-pink text-sm font-bold text-white">
      <span className="z-10 hidden shrink-0 bg-navy-deep px-3 py-2 text-[11px] font-extrabold tracking-widest text-sun uppercase sm:block">
        Demo preview
      </span>
      <div className="relative flex-1 overflow-hidden py-2" aria-label="Store announcements">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pr-12 hover:[animation-play-state:paused]">
          {row.map((m, i) => (
            <span key={i} aria-hidden={i >= MESSAGES.length}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
