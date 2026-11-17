export interface PortfolioProject {
  id: string
  slug: string
  title: string
  category: string
  subcategory: string
  client: string
  industry: string
  year: string
  thumbnail: string
  images: string[]
  description: string
  challenge: string
  solution: string
  results: string[]
  services: string[]
  tags: string[]
  featured: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'aurelia-skincare-packaging',
    title: 'Aurelia Skincare — Luxury Packaging System',
    category: 'packaging',
    subcategory: 'Luxury Beauty Packaging',
    client: 'Aurelia Skincare',
    industry: 'Beauty & Cosmetics',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1596747361560-b516f30c6e76?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596747361560-b516f30c6e76?w=1200&q=80',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80',
      'https://images.unsplash.com/photo-1609205882191-1f6d8f5b2b64?w=1200&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
    ],
    description: 'Complete packaging redesign for a premium skincare brand launching into luxury retail. The system includes primary packaging, secondary cartons, and retail display solutions.',
    challenge: 'Aurelia needed to elevate from direct-to-consumer to luxury retail presence while maintaining brand recognition. The packaging had to communicate clinical efficacy alongside botanical luxury, withstand international shipping, and meet sustainability commitments.',
    solution: 'We developed a cohesive packaging architecture using heavyweight matte-finish cartons with soft-touch lamination, copper foil stamping, and embossed logo details. Primary containers feature airless pump technology in frosted glass with custom-molded caps. The unboxing experience was choreographed with tissue, inserts, and a brand book.',
    results: [
      'Successfully launched in 200+ Sephora doors globally',
      '40% increase in perceived value scoring',
      'Reduced shipping damage to <0.5%',
      'Won 2024 Dieline Awards — Best Beauty Packaging',
    ],
    services: ['Packaging Design', 'Structural Engineering', 'Print Production', 'Brand Guidelines'],
    tags: ['Luxury', 'Beauty', 'Sustainable', 'Foil Stamping', 'Soft-touch'],
    featured: true,
  },
  {
    id: '2',
    slug: 'meridian-bank-rebrand',
    title: 'Meridian Bank — Complete Rebrand',
    category: 'branding',
    subcategory: 'Financial Services Branding',
    client: 'Meridian Bank',
    industry: 'Banking & Finance',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edf4a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558655146-9f40138edf4a?w=1200&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    ],
    description: 'Full brand transformation for a regional bank expanding nationally. New visual identity, brand strategy, and comprehensive rollout across 150+ branches and digital platforms.',
    challenge: 'Meridian Bank was perceived as traditional and local. With national expansion plans, they needed a brand that signaled modernity, trust, and accessibility without alienating their loyal customer base.',
    solution: 'We crafted a brand strategy centered on "Progress with Purpose." The visual identity features a refined wordmark with a custom ligature, a dynamic color system shifting from deep navy to vibrant teal, and a photographic style emphasizing real customers. Applications span signage, digital, print, environmental, and employer branding.',
    results: [
      'Brand awareness increased 65% in new markets',
      'Deposit growth of 28% YoY post-launch',
      'Employee pride scores up 42%',
      'Featured in Communication Arts Branding Annual',
    ],
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Environmental Graphics', 'Digital Design'],
    tags: ['Financial', 'Rebrand', 'Large Scale', 'Multi-channel'],
    featured: true,
  },
  {
    id: '3',
    slug: 'artisan-foods-catalogue',
    title: 'Artisan Foods — Seasonal Product Catalogue',
    category: 'catalogue',
    subcategory: 'Food & Beverage Catalogue',
    client: 'Artisan Foods Co.',
    industry: 'Food & Beverage',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=1200&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
      'https://images.unsplash.com/photo-1474932922978-5e7f3a2b8c4e?w=1200&q=80',
    ],
    description: '180-page premium product catalogue for a gourmet food distributor. Designed for both wholesale buyers and retail consumers with shoppable digital companion.',
    challenge: 'Artisan Foods needed a catalogue that could serve both B2B wholesale buyers (who need specs, pricing, case packs) and inspire retail consumers. The previous catalogue was purely functional and didn\'t convey the premium quality of their products.',
    solution: 'We created a dual-purpose catalogue with a magazine-inspired editorial section showcasing recipes and producer stories, followed by a clean, structured product reference section. Printed on uncoated premium stock with a soft-cover perfect binding. A synchronized digital flipbook includes "Add to Cart" functionality for retail.',
    results: [
      'Wholesale orders increased 35% from catalogue recipients',
      'Digital flipbook engagement: 12min avg session',
      'Retail website traffic up 180% during distribution',
      'Catalogue retained by 78% of recipients after 6 months',
    ],
    services: ['Catalogue Design', 'Product Photography Direction', 'Print Production', 'Digital Flipbook'],
    tags: ['Food', 'Editorial', 'B2B+B2C', 'Perfect Binding'],
    featured: true,
  },
  {
    id: '4',
    slug: 'techflow-annual-report',
    title: 'TechFlow — Annual Report 2024',
    category: 'printing',
    subcategory: 'Corporate Reporting',
    client: 'TechFlow Solutions',
    industry: 'Technology',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
    ],
    description: 'Integrated annual report for a publicly traded SaaS company. Combines financial performance, ESG initiatives, and product innovation narrative in a premium print and digital experience.',
    challenge: 'TechFlow\'s previous reports were dense, compliance-driven documents. They wanted to transform the annual report into a strategic communication tool for investors, employees, and prospects—while meeting all regulatory requirements.',
    solution: 'We restructured the narrative around three pillars: Growth, Responsibility, Innovation. The design uses a sophisticated grid system with data visualization, custom photography, and premium production: matte cover with spot UV on key metrics, French fold inserts for financial statements, and a companion microsite with interactive charts.',
    results: [
      'Investor relations downloads up 300%',
      'Employee engagement: 94% read rate',
      'Won 2024 ARC Awards — Best Annual Report (Tech)',
      'Reduced print quantity by 40% through digital-first strategy',
    ],
    services: ['Annual Report Design', 'Data Visualization', 'Print Production', 'Microsite Development'],
    tags: ['Corporate', 'Data Viz', 'Premium Print', 'Digital Companion'],
    featured: false,
  },
  {
    id: '5',
    slug: 'horizon-real-estate-branding',
    title: 'Horizon Properties — Brand Identity & Signage',
    category: 'branding',
    subcategory: 'Real Estate Branding',
    client: 'Horizon Properties',
    industry: 'Real Estate',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    ],
    description: 'Complete brand identity and environmental signage system for a luxury residential developer. Includes logo, wayfinding, sales center design, and marketing collateral suite.',
    challenge: 'Horizon Properties was repositioning from mid-market to luxury. The brand needed to communicate architectural excellence, location prestige, and lifestyle aspiration—while remaining approachable to Asian and Middle Eastern buyer demographics.',
    solution: 'We developed an identity system inspired by architectural principles: a modular monogram, a refined serif/display sans pairing, and a color palette of stone, bronze, and charcoal. Environmental graphics extend the language into physical space—sales center, model units, site hoarding, and wayfinding.',
    results: [
      'Pre-sales exceeded targets by 40% in first phase',
      'Brand recall in target demographic: 72%',
      'Sales center awarded "Best Design" at Property Awards',
      'Consistent application across 5 international markets',
    ],
    services: ['Brand Identity', 'Environmental Signage', 'Sales Center Design', 'Marketing Collateral'],
    tags: ['Real Estate', 'Luxury', 'Environmental', 'Multi-market'],
    featured: true,
  },
  {
    id: '6',
    slug: 'vitality-health-campaign',
    title: 'Vitality Health — Integrated Campaign',
    category: 'advertising',
    subcategory: 'Healthcare Advertising',
    client: 'Vitality Health Insurance',
    industry: 'Healthcare',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80',
    ],
    description: 'Multi-channel brand campaign for a health insurance disruptor. TV, OOH, digital, social, and experiential activation centered on "Health Made Simple."',
    challenge: 'Vitality Health needed to differentiate in a crowded, low-trust category. The insight: people don\'t buy insurance—they buy peace of mind. The campaign had to simplify complex products and build emotional connection.',
    solution: 'We created a campaign platform using real member stories, not actors. Visual language: warm, authentic photography with a distinctive duotone treatment. TV spots directed by award-winning documentarian. OOH used dynamic creative showing real-time claim approval rates. Digital included a "health age" calculator tool.',
    results: [
      'Quote requests up 156% during campaign',
      'Unaided brand awareness: 12% → 34%',
      'Customer acquisition cost reduced 28%',
      'Cannes Lions Silver — Healthcare Marketing',
    ],
    services: ['Campaign Strategy', 'TV Production', 'OOH Design', 'Digital Creative', 'Experiential'],
    tags: ['Healthcare', 'Integrated', 'TV', 'Experiential', 'Award-winning'],
    featured: false,
  },
  {
    id: '7',
    slug: 'mercantile-stationery-suite',
    title: 'The Mercantile — Executive Stationery',
    category: 'stationery',
    subcategory: 'Corporate Stationery',
    client: 'The Mercantile Group',
    industry: 'Professional Services',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1589492477829-5e6539555592?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1589492477829-5e6539555592?w=1200&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80',
      'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=1200&q=80',
    ],
    description: 'Bespoke executive stationery suite for a century-old merchant bank. Letterpress business cards, cotton letterheads, lined envelopes, and presentation folders.',
    challenge: 'The Mercantile wanted stationery that reflected their heritage and gravitas while feeling contemporary. Every detail—paper weight, ink impression, edge coloring—needed to be flawless.',
    solution: 'We specified 600gsm cotton paper with triple-thick duplexing, letterpress printing with deep impression, hand-painted edge coloring in their signature burgundy, and foil-stamped monogram. Presentation folders use a custom die-cut with magnetic closure. Packaged in a custom slipcase.',
    results: [
      'Client retention rate: 98% among recipients',
      'Featured in "Stationery Design Now" publication',
      'Reordered for 3 consecutive years',
      'Partners cite stationery in referral conversations',
    ],
    services: ['Stationery Design', 'Letterpress Printing', 'Custom Die-cutting', 'Premium Finishing'],
    tags: ['Letterpress', 'Heritage', 'Executive', 'Premium Papers'],
    featured: false,
  },
  {
    id: '8',
    slug: 'craft-brewery-packaging',
    title: 'Ironwood Brewery — Craft Beer Packaging',
    category: 'packaging',
    subcategory: 'Beverage Packaging',
    client: 'Ironwood Brewery',
    industry: 'Food & Beverage',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1565546524279-b7bb4c24c455?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1565546524279-b7bb4c24c455?w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'https://images.unsplash.com/photo-1609205882191-1f6d8f5b2b64?w=1200&q=80',
    ],
    description: 'Complete packaging range for a craft brewery expansion: 440ml cans, 750ml bottles, variety packs, and taproom merchandise.',
    challenge: 'Ironwood was moving from taproom-only to retail distribution. Their packaging needed to stand out on crowded craft beer shelves, communicate flavor profiles clearly, and meet retailer requirements for barcode placement and regulatory text.',
    solution: 'We created a modular label system: a consistent structural grid with flavor-specific illustrations by a commissioned artist. Cans use matte varnish with spot gloss on illustrations. Bottles feature heavyweight labels with embossing. Variety packs use a custom-designed carrier with die-cut windows.',
    results: [
      'Secured distribution in 500+ retail accounts',
      'Sell-through velocity 3x category average',
      'Cans rated "Best Packaging" by Beer Advocate',
      'Taproom merchandise revenue up 200%',
    ],
    services: ['Packaging Design', 'Illustration Commission', 'Can & Bottle Production', 'Carrier Design'],
    tags: ['Beverage', 'Craft Beer', 'Illustration', 'Retail Ready'],
    featured: false,
  },
  {
    id: '9',
    slug: 'university-prospectus',
    title: 'Riverside University — Prospectus & Viewbook',
    category: 'catalogue',
    subcategory: 'Education Prospectus',
    client: 'Riverside University',
    industry: 'Education',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
    ],
    description: 'Undergraduate prospectus and international viewbook for a top-50 university. 120-page main prospectus + 48-page international supplement.',
    challenge: 'Riverside University needed to attract diverse domestic and international students. The prospectus had to communicate academic rigor, campus life, career outcomes, and application guidance—while reflecting a modern, inclusive brand.',
    solution: 'We designed a modular system: a "core" prospectus with course info, and interchangeable inserts for faculties. International viewbook focuses on student stories, visa support, and global rankings. Printed on FSC-certified silk stock with perfect binding. Digital version includes interactive campus map and course finder.',
    results: [
      'Applications up 22% YoY',
      'International applications up 38%',
      'Prospectus request-to-application conversion: 18%',
      'Ranked #1 "Best University Prospectus" by Student Survey',
    ],
    services: ['Prospectus Design', 'Photography Direction', 'Print Production', 'Digital Interactive'],
    tags: ['Education', 'Prospectus', 'International', 'Modular System'],
    featured: false,
  },
  {
    id: '10',
    slug: 'apex-manufacturing-catalog',
    title: 'Apex Manufacturing — Industrial Product Catalog',
    category: 'catalogue',
    subcategory: 'Industrial Catalogue',
    client: 'Apex Manufacturing',
    industry: 'Manufacturing',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356bae?w=1200&q=80',
    ],
    description: 'Technical product catalog for a precision components manufacturer. 300+ SKUs with specifications, CAD drawings, and application guides.',
    challenge: 'Apex\'s previous catalog was a dense PDF engineers struggled to navigate. They needed a print and digital catalog that helped specifiers find, compare, and specify products quickly.',
    solution: 'We implemented a parametric categorization system with color-coded sections, comparison tables, and QR codes linking to 3D models and datasheets. Print version uses lay-flat binding for bench reference. Digital version includes parametric search and BOM export.',
    results: [
      'Specifier inquiries up 65%',
      'Sample requests converted to orders: 42%',
      'Digital catalog: 15,000+ sessions/month',
      'Reduced sales team technical queries by 30%',
    ],
    services: ['Technical Catalogue Design', 'Information Architecture', 'Print Production', 'Digital Catalog Platform'],
    tags: ['Industrial', 'Technical', 'Parametric Search', 'Lay-flat Binding'],
    featured: false,
  },
]

export const portfolioCategories = [
  { id: 'all', label: 'All Work' },
  { id: 'packaging', label: 'Packaging Design' },
  { id: 'branding', label: 'Branding & Identity' },
  { id: 'printing', label: 'Commercial Printing' },
  { id: 'advertising', label: 'Advertising & Marketing' },
  { id: 'catalogue', label: 'Catalogues & Brochures' },
  { id: 'stationery', label: 'Corporate Stationery' },
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === 'all') return portfolioProjects
  return portfolioProjects.filter((p) => p.category === category)
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured)
}

export function getRelatedProjects(currentSlug: string, category: string, limit = 3): PortfolioProject[] {
  return portfolioProjects
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit)
}