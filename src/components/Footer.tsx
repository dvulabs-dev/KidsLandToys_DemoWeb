import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { WhatsAppIcon } from './WhatsAppIcon'
import { STORE, waLink } from '../data/store'
import { CATEGORIES } from '../data/categories'

export function Footer() {
  return (
    <footer className="relative mt-20 bg-navy-deep text-white">
      {/* scalloped top edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-3 bg-repeat-x"
        style={{
          backgroundImage: 'radial-gradient(circle at 12px 0, #fff 11px, transparent 11.5px)',
          backgroundSize: '24px 12px',
        }}
      />

      <div className="container-x grid gap-10 pt-16 pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-white/75">
            Kids toys, soft toys, RC cars, ride-on jeeps and gifts — {STORE.tagline.toLowerCase()}.
          </p>
          <a href={waLink('Hello Asanka Toys!')} target="_blank" rel="noreferrer" className="btn-wa btn-sm mt-5">
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-sun">Shop</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link className="hover:text-white hover:underline" to={`/shop?category=${c.id}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-sun">Help</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><Link className="hover:text-white hover:underline" to="/about">About us</Link></li>
            <li><Link className="hover:text-white hover:underline" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-white hover:underline" to="/delivery-returns">Delivery &amp; returns</Link></li>
            <li><Link className="hover:text-white hover:underline" to="/faq">FAQ</Link></li>
            <li><Link className="hover:text-white hover:underline" to="/cart">Your cart</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-sun">Visit &amp; call</h3>
          <ul className="mt-3 space-y-3 text-white/85">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-pink" />
              <a href={STORE.mapUrl} target="_blank" rel="noreferrer" className="hover:underline">
                {STORE.address.line1}, {STORE.address.line2}
              </a>
            </li>
            {STORE.phones.map((p) => (
              <li key={p.tel} className="flex gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-pink" />
                <a href={`tel:${p.tel}`} className="hover:underline">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Clock size={20} className="mt-0.5 shrink-0 text-pink" />
              <span>{STORE.onlineHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {STORE.name}, {STORE.town}. All rights reserved.</p>
          <p>Demo preview — sample products, prices and stock. Frontend concept by DVU Labs.</p>
        </div>
      </div>
    </footer>
  )
}
