import PageHero from '../components/PageHero';

const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Old Dhoti White products' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Cutting cloth packing' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Industrial hand gloves' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Quality control sorting' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Old cut cloth fleece' },
  { src: '/images/gallery/gallery-6.jpg', alt: 'Delivery across Delhi NCR' },
  { src: '/images/gallery/gallery-7.jpg', alt: 'Cotton old dhoti' },
  { src: '/images/gallery/gallery-8.jpg', alt: 'T-shirt wiper cloth CTS' },
  { src: '/images/gallery/gallery-9.jpg', alt: 'Deepak Enterprises facility' },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Gallery' },
        ]}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-end p-4">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
