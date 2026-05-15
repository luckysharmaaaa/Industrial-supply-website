import { useParams, Navigate, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { getProductBySlug, getRelatedProducts } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <Navigate to="/products" replace />;

  const related = getRelatedProducts(slug, 3);

  return (
    <>
      <PageHero
        title={product.name}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: product.shortName || product.name },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-square max-h-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://placehold.co/800x800/e07b20/ffffff?text=${encodeURIComponent(product.name)}`;
                }}
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-navy mb-6">{product.name}</h1>
              {product.fullDescription.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <Button to="/contact" className="mt-4">
                Contact Us to Order
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <span className="text-brand font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Applications</h2>
              <ul className="space-y-3">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-gray-700">
                    <span className="text-brand font-bold mt-0.5">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/products" className="text-brand font-semibold hover:underline">
                ← View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
