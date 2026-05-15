import { Link } from 'react-router-dom';

export default function ProductCard({ product, showDescription = false }) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x450/e07b20/ffffff?text=${encodeURIComponent(product.shortName || product.name)}`;
          }}
        />
        <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy text-lg mb-2 group-hover:text-brand transition-colors">
          {product.shortName || product.name}
        </h3>
        {showDescription && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        )}
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all"
        >
          View More
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
