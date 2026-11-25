/**
 * Everything the shop owner may want to correct lives here, in one place.
 * Details marked "from leaflet" were taken from the shop's printed artwork.
 */
export const STORE = {
  name: 'Asanka Toys',
  short: 'Asanka Toys',
  town: 'Kurunegala',
  tagline: 'Where every child’s smile begins', // from leaflet

  phones: [
    { display: '077 883 9780', tel: '+94778839780', wa: '94778839780' }, // call & WhatsApp
  ],

  address: {
    line1: 'No. 182/2, Dambulla Road', // from leaflet
    line2: 'Kurunegala',
    full: 'No. 182/2, Dambulla Road, Kurunegala',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Asanka+Toys+Dambulla+Road+Kurunegala',

  onlineHours: 'Online orders open 24 hours', // from leaflet — owner to confirm
  storeHours: 'Shop opening hours — please call to confirm', // owner to supply

  deliveryNote: 'All-island delivery available', // from leaflet — owner to confirm
  deliveryChargeNote: 'Delivery charges are confirmed by the shop when your order is accepted.',
} as const

export const PRIMARY_PHONE = STORE.phones[0]

/** Open WhatsApp with a ready-made message. */
export function waLink(message: string, number: string = PRIMARY_PHONE.wa) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const JEEP_FROM_PRICE = 23800 // from leaflet: "Starting from Rs. 23,800"

/** Feature pills shown on the Ride-on Jeep promo (from leaflet). */
export const JEEP_FEATURES = [
  { icon: 'truck', title: 'All-island delivery', sub: 'Available' },
  { icon: 'shield', title: '3-month warranty', sub: 'On the motors & battery' },
  { icon: 'zap', title: 'Powerful rear motors', sub: 'Climbs & cruises' },
  { icon: 'battery', title: 'Rechargeable battery', sub: 'Plug in & go' },
  { icon: 'lock', title: 'Strong & safe', sub: 'Sturdy build' },
  { icon: 'clock', title: 'Long battery life', sub: 'More play per charge' },
  { icon: 'seat', title: 'Comfortable seat', sub: 'Made for little riders' },
] as const
