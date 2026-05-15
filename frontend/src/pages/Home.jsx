import HeroSlider from '../components/HeroSlider';
import TrustedBy from '../components/TrustedBy';
import VisionMissionGoal from '../components/VisionMissionGoal';
import CredibilityBanner from '../components/CredibilityBanner';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { blogPosts } from '../data/blogPosts';

const whyColumns = [
  {
    image: '/images/why/quality-control.jpg',
    title: 'Supplying Trusted Industrial Cleaning Materials Since 1987',
    bullets: [
      'Unmatched Quality You Can Rely On',
      'On-Time, Every Time – Delivery Across Delhi NCR',
      'Customized Sizes at Competitive Prices',
    ],
    body: "For over 38 years, we've been delivering premium Old Dhoti, Cutting Cloth, and Hand Gloves to some of India's leading industries. Every piece is carefully sorted and checked for strength, absorbency, and durability, ensuring reliable performance for your cleaning and maintenance needs.",
    showTitle: true,
  },
  {
    image: '/images/why/delivery-map.jpg',
    body: "Our commitment to punctuality and quality service makes us a trusted partner for hundreds of clients across Delhi NCR and beyond. Whether it's bulk orders or customized requirements, we ensure hassle-free, timely delivery every time.",
  },
  {
    image: '/images/why/business-meeting.jpg',
    body: "We understand that every business has unique needs. That's why we offer tailor-made sizes and packaging at the most competitive prices, without compromising quality.",
  },
];

const features = [
  {
    title: '38+ Years of Experience',
    text: "A trusted supplier serving India's top industries since 1987, built on reliability and integrity.",
    image: '/images/features/quality-1.png',
  },
  {
    title: 'Consistent Quality',
    text: 'Every batch is carefully sorted and thoroughly checked for superior performance.',
    image: '/images/features/quality-2.png',
  },
  {
    title: 'Trusted by Leaders',
    text: 'Proudly partnering with automotive, engineering, and manufacturing giants for decades.',
    image: '/images/features/industry.png',
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustedBy />

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
              <img
                src="/images/about-preview.png"
                alt="Cleaning and textile materials"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    'https://placehold.co/800x600/f5f5f5/e07b20?text=Shiv+Enterprises';
                }}
              />
            </div>
            <div>
              <span className="text-brand font-semibold text-sm uppercase tracking-wider">
                About
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
                Welcome to Deepak Enterprises
              </h2>
              <p className="text-brand font-medium mb-4">
                38+ Years of Supplying Trusted Cleaning Materials to India&apos;s Top Industries,
                Delivered On Time, Every Time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Deepak Enterprises, we specialize in the collection, sorting, and supply of old
                dothis, used cotton clothes, and reclaimed textile materials, all with a deep
                commitment to sustainability and quality.
              </p>
              <Button to="/about">Read More</Button>
            </div>
          </div>
        </div>
      </section>

      <VisionMissionGoal />

      {/* Why Choose Us - 3 columns */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {whyColumns.map((col, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-100">
                  <img
                    src={col.image}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/800x450/e07b20/ffffff?text=Shiv+Enterprises`;
                    }}
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {col.showTitle && (
                  <>
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">{col.title}</h3>
                    <ul className="space-y-2 mb-4">
                      {col.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand mt-1">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="text-gray-600 leading-relaxed mb-6">{col.body}</p>
                <Button to="/contact">Contact Us Today</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Favorites */}
      <section id="products" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Customer Favorites</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Deepak Enterprises */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Why Choose Deepak Enterprises</h2>
            <p className="text-gray-600 leading-relaxed">
              At <strong>Deepak Enterprises</strong>, we know industries need reliable and
              high-quality cleaning materials. Our <strong>Old Dhoti Wipers</strong> are trusted
              nationwide for their <strong>superior quality, consistency, and eco-friendly nature</strong>.
              Made from <strong>100% cotton dhotis</strong>, they offer{' '}
              <strong>excellent absorbency, softness, and durability</strong> for all types of
              cleaning tasks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <article
                key={f.title}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <img src={f.image} alt={f.title} className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CredibilityBanner />

      {/* Blog Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Old Dhotis News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              blogPosts.find((p) => p.slug === 'why-cotton-materials-work-best-industry-cleaning'),
              blogPosts.find((p) => p.slug === 'improving-workshop-efficiency-reusable-cleaning-cloths'),
              blogPosts.find((p) => p.slug === 'maintaining-engine-parts-proper-cleaning-techniques'),
            ].filter(Boolean).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
