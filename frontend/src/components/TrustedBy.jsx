import { trustedLogos } from '../data/heroSlides';

export default function TrustedBy() {
  const doubled = [...trustedLogos, ...trustedLogos];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h3 className="text-center text-xl font-bold text-navy mb-8">
          Trusted By
        </h3>

        <div className="overflow-hidden">
          <div className="flex marquee-track w-max gap-12 items-center">
            
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 w-32 h-16 flex items-center justify-center opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/160x64/f5f5f5/333333?text=${encodeURIComponent(
                      logo.name
                    )}`;
                  }}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}