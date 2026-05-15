import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <>
      <PageHero
        title="Blog"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog' },
        ]}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
