import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function PageBanner({ title, eyebrow, children }: { title: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="dotted-bg absolute inset-0" />
      <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-sun-soft blur-2xl" />
      <div className="container-x relative py-10 sm:py-14">
        <nav className="text-sm font-bold text-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-royal">Home</Link> <span aria-hidden>›</span>{' '}
          <span className="text-navy">{title}</span>
        </nav>
        {eyebrow && <p className="mt-3 font-script text-2xl leading-none text-pink">{eyebrow}</p>}
        <h1 className="mt-1 text-4xl font-extrabold text-navy sm:text-5xl">{title}</h1>
        {children && <div className="mt-2 max-w-2xl text-muted">{children}</div>}
      </div>
    </section>
  )
}

/** Small tag used where the owner still has to confirm a detail. */
export function ConfirmTag() {
  return (
    <span className="ml-2 inline-block rounded-full bg-sun-soft px-2.5 py-0.5 align-middle text-xs font-extrabold text-amber-700 ring-1 ring-sun/60">
      Shop to confirm
    </span>
  )
}
