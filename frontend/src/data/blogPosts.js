export const blogPosts = [
  {
    id: 1,
    slug: 'improving-workshop-efficiency-reusable-cleaning-cloths',
    title: 'Improving Workshop Efficiency with Reusable Cleaning Cloths',
    excerpt:
      'Discover how reusable industrial cleaning cloths can boost workshop productivity, reduce waste, and lower operational costs for automotive and manufacturing facilities.',
    date: '2025-03-12',
    image: '/images/blog/blog-2.jpg',
    content: `
      <p>Industrial workshops across India are constantly seeking ways to improve efficiency while maintaining high cleaning standards. Reusable cleaning cloths, such as Old Dhoti wipers and cutting cloth rags, offer a proven solution.</p>
      <p>Unlike disposable alternatives, quality cotton cleaning materials can be used multiple times before replacement, significantly reducing waste and cost per cleaning cycle. For automotive service centres handling dozens of vehicles daily, this translates to measurable savings.</p>
      <p>At Deepak Enterprises, we supply premium Old Dhoti and cutting cloth materials trusted by leading industries since 1987. Our products are carefully sorted for absorbency, durability, and consistent performance.</p>
      <p>Contact us today to learn how our cleaning materials can improve your workshop efficiency.</p>
    `,
  },
  {
    id: 2,
    slug: 'maintaining-engine-parts-proper-cleaning-techniques',
    title: 'Maintaining Engine Parts with Proper Cleaning Techniques',
    excerpt:
      'Learn the best practices for cleaning engine components using industrial-grade cotton wipers and rags for optimal performance and longevity.',
    date: '2025-02-28',
    image: '/images/blog/blog-3.jpg',
    content: `
      <p>Proper cleaning of engine parts is critical for automotive workshops and manufacturing facilities. Using the right cleaning materials ensures parts are free from oil, grease, and debris without causing damage.</p>
      <p>Old Dhoti white cotton wipers are ideal for engine maintenance due to their high absorbency, softness, and lint-free properties. T-shirt wiper rags (CTS) are perfect for precision cleaning of delicate components.</p>
      <p>Deepak Enterprises has been supplying trusted cleaning materials to India's leading automotive brands for over 38 years. Our products meet the rigorous demands of professional workshops.</p>
    `,
  },
  {
    id: 3,
    slug: 'cleaning-process-slowing-service-centre-fix',
    title: "Is Your Cleaning Process Slowing Down Your Service Centre? Here's the Fix",
    excerpt:
      'Slow cleaning processes can bottleneck your service centre. Find out how the right industrial cleaning supplies can speed up operations.',
    date: '2025-02-15',
    image: '/images/blog/blog-3.jpg',
    content: `
      <p>Service centres that struggle with slow turnaround times often overlook the role of cleaning materials in their workflow. Low-quality rags that shed lint, tear easily, or fail to absorb properly can add minutes to every job.</p>
      <p>Investing in premium Old Dhoti wipers and cutting cloth from a trusted supplier like Deepak Enterprises ensures your team has reliable materials that work the first time, every time.</p>
      <p>With on-time delivery across Delhi NCR and customized sizing options, we help service centres operate at peak efficiency.</p>
    `,
  },
  {
    id: 4,
    slug: 'why-cotton-materials-work-best-industry-cleaning',
    title: 'Why Cotton Materials Work Best for Industry Cleaning Tasks',
    excerpt:
      'Explore why 100% cotton old dhotis and cutting cloths remain the preferred choice for industrial cleaning across automotive and manufacturing sectors.',
    date: '2025-01-20',
    image: '/images/blog/blog-1.jpg',
    content: `
      <p>Cotton has been the gold standard for industrial cleaning for decades. Its natural absorbency, softness, and durability make it ideal for wiping oil, grease, and fluids in workshop environments.</p>
      <p>Recycled cotton from old dhotis and t-shirts offers an eco-friendly alternative that doesn't compromise on performance. Deepak Enterprises specializes in sourcing and sorting the finest cotton materials for industrial reuse.</p>
    `,
  },
  {
    id: 5,
    slug: 'sustainable-textile-recycling-industrial-benefits',
    title: 'Sustainable Textile Recycling: Benefits for Industrial Buyers',
    excerpt:
      'How choosing recycled industrial cleaning materials helps your business reduce its carbon footprint while maintaining quality standards.',
    date: '2025-01-08',
    image: '/images/blog/blog-5.jpg',
    content: `
      <p>Sustainability is no longer optional for modern industries. By choosing recycled Old Dhoti and cutting cloth materials, businesses can significantly reduce textile waste sent to landfills.</p>
      <p>Deepak Enterprises has built its business model on credibility and environmental responsibility, recycling and reusing textile waste to supply India's top industries since 1987.</p>
    `,
  },
  {
    id: 6,
    slug: 'choosing-right-hand-gloves-factory-workers',
    title: 'Choosing the Right Hand Gloves for Factory Workers',
    excerpt:
      'A guide to selecting industrial knitted hand gloves that provide comfort, grip, and protection for your workforce.',
    date: '2024-12-18',
    image: '/images/blog/blog-6.jpg',
    content: `
      <p>Factory workers need hand protection that doesn't compromise dexterity or comfort. Knitted hand gloves in blue and white offer the perfect balance of grip, protection, and breathability.</p>
      <p>Deepak Enterprises supplies durable knitted gloves trusted by manufacturing and automotive industries across India. Contact us for bulk orders and competitive pricing.</p>
    `,
  },
];

export const getBlogBySlug = (slug) =>
  blogPosts.find((b) => b.slug === slug);
