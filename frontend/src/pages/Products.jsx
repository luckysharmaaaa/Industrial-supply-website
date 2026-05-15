import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <>
      <PageHero
        title="Products"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products' },
        ]}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} showDescription />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
