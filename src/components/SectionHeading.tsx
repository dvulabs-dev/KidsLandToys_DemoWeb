import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  eyebrow?: string
  title: ReactNode
  sub?: string
  linkTo?: string
  linkLabel?: string
  light?: boolean
  center?: boolean
}

export function SectionHeading({ eyebrow, title, sub, linkTo, linkLabel, light, center }: Props) {
  return (
    <div className={`mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 ${center ? 'justify-center text-center' : ''}`}>
      <div className={center ? 'mx-auto' : ''}>
        {eyebrow && <p className={`font-script text-2xl leading-none ${light ? 'text-sun' : 'text-pink'}`}>{eyebrow}</p>}
        <h2 className={`mt-1 text-3xl font-extrabold sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
        {sub && <p className={`mt-2 max-w-xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-muted'}`}>{sub}</p>}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className={`group inline-flex items-center gap-1.5 font-bold ${light ? 'text-sun' : 'text-royal'} hover:underline`}
        >
          {linkLabel ?? 'View all'}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}
