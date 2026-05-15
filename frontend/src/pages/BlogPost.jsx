import { useParams, Navigate, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import { getBlogBySlug, blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((b) => b.slug !== slug).slice(0, 3);
  const date = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.title.length > 40 ? `${post.title.slice(0, 40)}...` : post.title },
        ]}
      />

      <article className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <time className="text-brand font-medium text-sm">{date}</time>
          <div className="rounded-2xl overflow-hidden my-8 aspect-video bg-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/1200x675/e07b20/ffffff?text=Blog+Post';
              }}
            />
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&_p]:mb-4 [&_strong]:text-navy"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-10 pt-8 border-t">
            <Link to="/blog" className="text-brand font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
