export const SECTORS = [
  'All Sectors',
  'Imperial Garden',
  'Orchard Homes',
  'Executive Cottages',
  'Barki Road Block',
  'Commercial Boulevard',
  'Green Valley Block'
];

export const PROPERTY_TYPES = [
  'All Types',
  'House / Villa',
  'Residential Plot',
  'Commercial Plot',
  'Commercial Plaza',
  'Luxury Apartment'
];

export const PROPERTIES = [
  {
    id: 'pc-101',
    title: '1 Kanal Ultra Modern Designer Spanish Villa',
    sector: 'Imperial Garden',
    location: 'Imperial Garden, Paragon City, Lahore',
    purpose: 'sale',
    type: 'House / Villa',
    price: 68000000, // 6.8 Crore
    size: 1,
    unit: 'Kanal',
    bedrooms: 5,
    bathrooms: 6,
    parking: 3,
    featured: true,
    badge: 'Super Luxury',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Immaculate 1 Kanal brand new designer villa in prime Imperial Garden. Features imported Spanish tiles, high-end Italian fixtures, double height lobby, swimming pool, servant quarter, and solar backup system.',
    amenities: ['Private Pool', 'Solar Powered', 'Smart Home Automation', 'Double Glazed Windows', 'Lush Lawn', 'Servant Quarter', 'Underground Wiring'],
    agent: {
      name: 'Chaudhry Malik Tariq',
      phone: '+92 300 8472910',
      email: 'tariq@paragoncityrealestate.com',
      experience: '14 years'
    },
    publishedDate: '2 days ago'
  },
  {
    id: 'pc-102',
    title: '10 Marla Solid Built Luxury Bungalow',
    sector: 'Orchard Homes',
    location: 'Sector C, Orchard Homes, Paragon City',
    purpose: 'sale',
    type: 'House / Villa',
    price: 36500000, // 3.65 Crore
    size: 10,
    unit: 'Marla',
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    featured: true,
    badge: 'Hot Deal',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Near to 50ft wide boulevard and central park. Solid architectural construction, Ash wood doors, modern open kitchen with appliances, and rooftop terrace.',
    amenities: ['Park Facing', 'Modern Kitchen', 'Rooftop Terrace', 'CCTV Security', 'Nearby Commercial Hub'],
    agent: {
      name: 'Hassan Raza',
      phone: '+92 321 9924811',
      email: 'hassan@paragoncityrealestate.com',
      experience: '8 years'
    },
    publishedDate: 'Just now'
  },
  {
    id: 'pc-103',
    title: '1 Kanal Corner Residential Plot with Possession',
    sector: 'Executive Cottages',
    location: 'Executive Cottages Extension, Paragon City',
    purpose: 'plot',
    type: 'Residential Plot',
    price: 24500000, // 2.45 Crore
    size: 1,
    unit: 'Kanal',
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    featured: false,
    badge: 'Possession Ready',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Prime 1 Kanal corner plot on a 60-ft wide road with all utilities underground (Gas, Electricity, Water). Ideal location for dream home construction or solid capital gains.',
    amenities: ['Corner Plot', 'Underground Utilities', 'Immediate Possession', 'Near Mosque', 'Gated Community'],
    agent: {
      name: 'Kamran Sheikh',
      phone: '+92 301 4401823',
      email: 'kamran@paragoncityrealestate.com',
      experience: '11 years'
    },
    publishedDate: '1 week ago'
  },
  {
    id: 'pc-104',
    title: '5 Marla Brand New Elegant Family House',
    sector: 'Barki Road Block',
    location: 'Block A, Barki Road Gate, Paragon City',
    purpose: 'sale',
    type: 'House / Villa',
    price: 19500000, // 1.95 Crore
    size: 5,
    unit: 'Marla',
    bedrooms: 3,
    bathrooms: 4,
    parking: 1,
    featured: true,
    badge: 'Featured',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A masterpiece 5 Marla home with high ceilings, spacious living areas, designer baths, and quick access to Barki Road main gate.',
    amenities: ['Imported Fittings', 'Store Room', 'Laundry Area', '24/7 Security Patrol', 'Near School'],
    agent: {
      name: 'Hassan Raza',
      phone: '+92 321 9924811',
      email: 'hassan@paragoncityrealestate.com',
      experience: '8 years'
    },
    publishedDate: '3 days ago'
  },
  {
    id: 'pc-105',
    title: 'Commercial 4 Marla Plaza with Steady Rental Income',
    sector: 'Commercial Boulevard',
    location: 'Main Commercial Broadway, Paragon City',
    purpose: 'sale',
    type: 'Commercial Plaza',
    price: 85000000, // 8.5 Crore
    size: 4,
    unit: 'Marla',
    bedrooms: 0,
    bathrooms: 4,
    parking: 4,
    featured: true,
    badge: 'High ROI',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Triple storey commercial building situated on 150ft Broadway. Currently tenanted to multinational bank and corporate clinic yielding 6.5 Lacs monthly rent.',
    amenities: ['150ft Frontage', 'Dedicated Basement Parking', 'High Footfall', 'Elevator Shaft', 'Full Commercial Clearance'],
    agent: {
      name: 'Chaudhry Malik Tariq',
      phone: '+92 300 8472910',
      email: 'tariq@paragoncityrealestate.com',
      experience: '14 years'
    },
    publishedDate: '5 days ago'
  },
  {
    id: 'pc-106',
    title: '10 Marla Fully Furnished Executive Rental Villa',
    sector: 'Imperial Garden',
    location: 'Imperial Garden, Main Boulevard',
    purpose: 'rent',
    type: 'House / Villa',
    price: 220000, // 2.2 Lac / month
    size: 10,
    unit: 'Marla',
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    featured: false,
    badge: 'For Rent',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Fully furnished with imported leather sofas, 75-inch smart TVs, inverter ACs in all rooms, and equipped modular kitchen. Ready to move in.',
    amenities: ['Fully Furnished', 'Inverter ACs', 'UPS & Gen Wiring', 'Wi-Fi Fiber Ready', 'Secure Community'],
    agent: {
      name: 'Kamran Sheikh',
      phone: '+92 301 4401823',
      email: 'kamran@paragoncityrealestate.com',
      experience: '11 years'
    },
    publishedDate: '4 days ago'
  },
  {
    id: 'pc-107',
    title: '5 Marla Residential Plot in Developed Sector',
    sector: 'Green Valley Block',
    location: 'Green Valley Block, Near Central Mosque',
    purpose: 'plot',
    type: 'Residential Plot',
    price: 8200000, // 82 Lac
    size: 5,
    unit: 'Marla',
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    featured: false,
    badge: 'Best Value',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Best price 5 Marla residential plot. Level land, direct transfer with clear title. Surrounded by newly built residences.',
    amenities: ['Direct Transfer', 'Immediate Construction', 'Sui Gas Approved', 'Water Filtration Plant Nearby'],
    agent: {
      name: 'Hassan Raza',
      phone: '+92 321 9924811',
      email: 'hassan@paragoncityrealestate.com',
      experience: '8 years'
    },
    publishedDate: '1 day ago'
  },
  {
    id: 'pc-108',
    title: '3-Bed Luxury Penthouse with Terrace View',
    sector: 'Commercial Boulevard',
    location: 'Paragon Heights, Commercial Boulevard',
    purpose: 'sale',
    type: 'Luxury Apartment',
    price: 29000000, // 2.9 Crore
    size: 9,
    unit: 'Marla',
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    featured: true,
    badge: 'Penthouse',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Top floor modern penthouse with 360-degree panoramic terrace overlooking Paragon green belts. Includes high-speed elevators and standby generators.',
    amenities: ['High Speed Lifts', 'Standby Generator', 'Terrace BBQ Area', 'Gym & Health Club', 'Card Key Access'],
    agent: {
      name: 'Chaudhry Malik Tariq',
      phone: '+92 300 8472910',
      email: 'tariq@paragoncityrealestate.com',
      experience: '14 years'
    },
    publishedDate: '6 days ago'
  }
];

export const SECTOR_CARDS = [
  {
    id: 'imperial',
    name: 'Imperial Garden',
    tagline: 'The Pinnacle of Luxury Living',
    plots: '1 & 2 Kanal Mansions & Plots',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Lush wide boulevards, elite architectural guidelines, underground infrastructure, and high security.',
    averagePrice: '1 Kanal ~ PKR 2.4 - 7.5 Crore'
  },
  {
    id: 'orchard',
    name: 'Orchard Homes',
    tagline: 'Tranquil & Green Family Community',
    plots: '10 Marla & 1 Kanal Villas',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Interspersed with lush thematic parks, community sports clubs, and leading schools.',
    averagePrice: '10 Marla ~ PKR 1.6 - 4.2 Crore'
  },
  {
    id: 'executive',
    name: 'Executive Cottages',
    tagline: 'Modern Lifestyle for Professionals',
    plots: '5 & 10 Marla Cottages',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Conveniently located near the main entry gates, community commercial areas, and recreational facilities.',
    averagePrice: '5 Marla ~ PKR 80 Lac - 2.2 Crore'
  },
  {
    id: 'commercial',
    name: 'Commercial Boulevard',
    tagline: 'Thriving Retail & Corporate Hub',
    plots: '4 & 8 Marla Commercial Plazas',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'High footfall boulevard hosting top food chains, banks, shopping marts, and corporate suites.',
    averagePrice: 'Commercial ~ PKR 5 - 18 Crore'
  }
];
