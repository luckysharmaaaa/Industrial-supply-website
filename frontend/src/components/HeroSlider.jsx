import { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../data/heroSlides';
import Button from './Button';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(
    () => goTo((current - 1 + heroSlides.length) % heroSlides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative pt-[104px] lg:pt-[120px] bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[420px] lg:min-h-[480px]">
          {/* Image */}
          <div className="relative order-2 lg:order-1 hero-slide-enter" key={`img-${current}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://placehold.co/800x600/e07b20/ffffff?text=${encodeURIComponent(slide.heading)}`;
                }}
              />
              <a
                href="#products"
                className="absolute bottom-4 left-4 bg-white/90 text-brand text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-white transition-colors"
              >
                view more
              </a>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 hero-slide-enter" key={`text-${current}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4">
              {slide.heading.split(' ').map((word, i, arr) => {
                const isLast = i >= arr.length - 2;
                return (
                  <span key={i}>
                    {isLast ? (
                      <span className="text-brand">{word} </span>
                    ) : (
                      <>{word} </>
                    )}
                  </span>
                );
              })}
            </h2>
            <p className="text-brand font-medium text-base sm:text-lg mb-3">{slide.subtext}</p>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">{slide.body}</p>
            <Button to="/contact">Contact us</Button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-brand' : 'w-2 bg-gray-300 hover:bg-brand/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
