import PageHero from '../components/PageHero';
import VisionMissionGoal from '../components/VisionMissionGoal';
import CredibilityBanner from '../components/CredibilityBanner';

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-gray-100 sticky top-32">
              <img
                src="/images/about-detail.jpg"
                alt="Cut cloth and dhoti products"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    'https://placehold.co/800x600/e07b20/ffffff?text=About+Shiv+Enterprises';
                }}
              />
            </div>
            <div>
              <span className="text-brand font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-6">
                A Legacy of Quality and Trust
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 38 years of industry experience, Deepak Enterprises has earned the trust of
                leading industries across India as a reliable supplier of high-quality cleaning
                materials and reclaimed textiles. We take pride in delivering products that combine
                quality, sustainability, and timely service, ensuring that our customers always
                receive value and dependability.
              </p>

              <h3 className="text-xl font-bold text-navy mb-4">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <strong className="text-navy">Collection & Sorting:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      We carefully collect and sort old dothis, used cotton clothes, and reclaimed
                      textile materials for industrial reuse.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <strong className="text-navy">Supply of Cleaning Materials:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      We provide top-grade cleaning cloths and materials to industries across
                      sectors like manufacturing, automotive, shipping, and engineering.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <strong className="text-navy">Sustainability Focus:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Our process promotes environmental responsibility by reducing textile waste
                      and encouraging reuse.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <VisionMissionGoal />
      <CredibilityBanner />
    </>
  );
}
