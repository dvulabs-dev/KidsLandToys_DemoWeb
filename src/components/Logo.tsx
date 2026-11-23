import { Link } from 'react-router-dom'
import { STORE } from '../data/store'

export function LogoMark({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-xl bg-white font-display text-xl font-extrabold text-navy ring-[3px] ring-navy ${className}`}
      aria-hidden
    >
      K<span className="-ml-0.5 text-pink">L</span>
      <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-sun ring-2 ring-white" />
    </span>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${STORE.name} home`}>
      <LogoMark />
      <span className="leading-none">
        <span className={`block font-display text-2xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          KIDS <span className="text-pink">LAND</span>
        </span>
        <span className={`block text-[10px] font-extrabold tracking-[0.22em] ${light ? 'text-white/70' : 'text-muted'}`}>
          TOY STORE · {STORE.town.toUpperCase()}
        </span>
      </span>
    </Link>
  )
}
