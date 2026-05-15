import Button from './Button';

export default function CredibilityBanner() {
  return (
    <section className="py-16 lg:py-20 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Credibility Is Our Identity
        </h2>
        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
          At Deepak Enterprises, Credibility isn&apos;t a buzzword; it&apos;s our business model. By{' '}
          <strong>recycling and reusing textile waste</strong>, we help industries minimize their
          carbon footprint and reduce textile waste that would otherwise end up in landfills.
        </p>
        <Button to="/products" variant="white">
          Explore Now
        </Button>
      </div>
    </section>
  );
}
