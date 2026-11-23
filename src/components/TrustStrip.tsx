import { Clock, MessageCircle, ShieldCheck, Truck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, title: 'All-island delivery', sub: 'Available — ask the shop', tone: 'bg-sun-soft text-amber-700' },
  { icon: Clock, title: 'Online orders 24 hours', sub: 'Order any time', tone: 'bg-pink-soft text-pink' },
  { icon: MessageCircle, title: 'Quick response', sub: 'Calls & WhatsApp', tone: 'bg-emerald-50 text-whatsapp' },
  { icon: ShieldCheck, title: 'Safe & trusted shop', sub: 'On Dambulla Road', tone: 'bg-mist text-royal' },
]

export function TrustStrip() {
  return (
    <section aria-label="Why shop with us" className="relative z-10 -mt-8">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-mist-line bg-mist-line shadow-card lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, sub, tone }) => (
            <li key={title} className="flex items-center gap-3 bg-white p-4 sm:p-5">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tone}`}>
                <Icon size={24} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-extrabold text-navy sm:text-base">{title}</span>
                <span className="block text-xs text-muted sm:text-sm">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
