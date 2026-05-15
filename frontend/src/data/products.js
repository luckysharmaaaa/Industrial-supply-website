export const products = [
  {
    id: 'old-dhoti-white',
    slug: 'old-dhoti-white',
    name: 'Old Dhoti White',
    shortName: 'Old Dhoti White',
    image: '/images/products/old-dhoti-white.jpg',
    description:
      'Premium white cotton old dhoti, ideal for industrial wiping and cleaning. Highly absorbent, soft, and durable. Used in automotive workshops, engineering units, and manufacturing plants.',
    fullDescription: [
      'Our Old Dhoti White is carefully sorted from premium cotton dhotis, offering exceptional absorbency and softness for demanding industrial cleaning tasks. Each batch undergoes rigorous quality checks for strength, lint-free performance, and durability.',
      'Trusted by leading automotive, engineering, and manufacturing industries across India since 1987, these wipers deliver consistent performance shift after shift. Available in customized sizes and bulk packaging to suit your operational needs.',
      'Eco-friendly and cost-effective, our white old dhotis help industries reduce waste while maintaining the highest cleaning standards.',
    ],
    features: [
      '100% premium cotton material',
      'High absorbency and softness',
      'Lint-free industrial wiping',
      'Carefully sorted and quality-checked',
      'Custom sizes and bulk packaging',
      'Eco-friendly recycled textile',
    ],
    applications: [
      'Automotive workshops and service centres',
      'Engineering and manufacturing plants',
      'Surface wiping and machine cleaning',
      'Oil and grease absorption tasks',
      'General industrial maintenance',
    ],
  },
  {
    id: 'old-dhoti-colour',
    slug: 'old-dhoti-colour',
    name: 'Old Dhoti Colour',
    shortName: 'Old Dhoti Colour',
    image: '/images/products/old-dhoti-colour.png',
    description:
      'Coloured cotton old dhoti, same high-quality absorbency as white variety. Suitable for general cleaning tasks in factories and workshops.',
    fullDescription: [
      'Old Dhoti Colour offers the same trusted quality as our white variety, sourced from premium coloured cotton dhotis. Ideal for general-purpose cleaning where colour-coding or cost efficiency matters.',
      'Each piece is sorted for absorbency, durability, and consistent performance. Perfect for factories, workshops, and industrial facilities across Delhi NCR and beyond.',
      'Bulk orders available with competitive pricing and on-time delivery guaranteed.',
    ],
    features: [
      'Premium coloured cotton',
      'Excellent absorbency',
      'Durable for heavy-duty use',
      'Cost-effective cleaning solution',
      'Sorted for consistent quality',
      'Bulk supply available',
    ],
    applications: [
      'Factory floor cleaning',
      'Workshop maintenance',
      'General surface wiping',
      'Industrial rag applications',
      'Bulk cleaning operations',
    ],
  },
  {
    id: 'old-cutting-cloth-sports-tshirt',
    slug: 'old-cutting-cloth-sports-tshirt',
    name: 'Old Cutting Cloth Colour Sports T-shirt (Nylon)',
    shortName: 'Old Cutting Cloth Colour Sports T-shirt',
    image: '/images/products/cutting-cloth-sports.jpg',
    description:
      'Recycled sports t-shirt cutting cloth, made from nylon/synthetic blend. Great for surface wiping and machine cleaning.',
    fullDescription: [
      'Our Old Cutting Cloth from recycled sports t-shirts provides a durable nylon/synthetic blend ideal for surface wiping and machine cleaning in industrial environments.',
      'Sorted and packed for consistent quality, these cutting cloths offer excellent performance for workshops that need reliable, cost-effective cleaning materials.',
      'Available in bulk with customized packaging options for your facility.',
    ],
    features: [
      'Recycled sports t-shirt material',
      'Nylon/synthetic blend',
      'Durable surface wiping',
      'Ideal for machine cleaning',
      'Sorted and packed for industrial use',
      'Competitive bulk pricing',
    ],
    applications: [
      'Machine and equipment cleaning',
      'Surface wiping in workshops',
      'Automotive industry',
      'Engineering units',
      'Manufacturing plants',
    ],
  },
  {
    id: 'old-cutting-cloth-cotton-mix',
    slug: 'old-cutting-cloth-cotton-mix',
    name: 'Old Cutting Cloth Colour Cotton Mix (CP)',
    shortName: 'Old Cutting Cloth Colour Cotton Mix',
    image: '/images/products/cutting-cloth-cotton.jpg',
    description:
      'Mixed cotton cutting cloth, sorted and packed for industrial use. Cost-effective solution for bulk cleaning requirements.',
    fullDescription: [
      'Old Cutting Cloth Colour Cotton Mix (CP) is a cost-effective industrial cleaning solution made from sorted mixed cotton materials. Perfect for bulk cleaning requirements across manufacturing and automotive sectors.',
      'Carefully sorted and packed to ensure consistent quality in every delivery. Trusted by industries for reliability and value.',
    ],
    features: [
      'Mixed cotton composition',
      'Cost-effective bulk solution',
      'Sorted and quality-checked',
      'Industrial-grade packaging',
      'Reliable absorbency',
      'On-time delivery',
    ],
    applications: [
      'Bulk industrial cleaning',
      'Manufacturing facilities',
      'Warehouse maintenance',
      'General workshop use',
      'Cost-sensitive operations',
    ],
  },
  {
    id: 'old-cutting-cloth-cts',
    slug: 'old-cutting-cloth-cts',
    name: 'Old Cutting Cloth Colour T-shirt Wiper (CTS)',
    shortName: 'Old Cutting Cloth Colour T-shirt Wiper',
    image: '/images/products/cutting-cloth-cts.jpg',
    description:
      'T-shirt wiper rags made from recycled cotton t-shirts. Lint-free, absorbent, and ideal for precision cleaning.',
    fullDescription: [
      'Old Cutting Cloth Colour T-shirt Wiper (CTS) is crafted from recycled cotton t-shirts, offering lint-free, highly absorbent performance for precision cleaning tasks.',
      'Ideal for automotive workshops, engineering units, and any application requiring reliable, soft wiping materials.',
    ],
    features: [
      'Recycled cotton t-shirt material',
      'Lint-free performance',
      'High absorbency',
      'Precision cleaning ideal',
      'Soft and durable',
      'Eco-friendly recycled product',
    ],
    applications: [
      'Precision surface cleaning',
      'Engine and parts maintenance',
      'Automotive service centres',
      'Electronics and delicate equipment',
      'Workshop detailing',
    ],
  },
  {
    id: 'knitted-hand-gloves',
    slug: 'knitted-hand-gloves',
    name: 'Knitted Hand Gloves Blue/White',
    shortName: 'Knitted Hand Gloves Blue/White',
    image: '/images/products/hand-gloves.jpg',
    description:
      'Industrial knitted hand gloves available in blue and white. Provides grip, protection, and comfort for factory workers.',
    fullDescription: [
      'Our Knitted Hand Gloves in blue and white are designed for industrial use, providing excellent grip, protection, and comfort for factory workers across sectors.',
      'Durable construction ensures long-lasting performance in demanding environments. Available in bulk for teams and facilities of all sizes.',
    ],
    features: [
      'Blue and white colour options',
      'Excellent grip and protection',
      'Comfortable for extended wear',
      'Durable knitted construction',
      'Industrial-grade quality',
      'Bulk supply available',
    ],
    applications: [
      'Factory and assembly line work',
      'Material handling',
      'General industrial protection',
      'Warehouse operations',
      'Manufacturing facilities',
    ],
  },
];

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (slug, count = 3) =>
  products.filter((p) => p.slug !== slug).slice(0, count);
