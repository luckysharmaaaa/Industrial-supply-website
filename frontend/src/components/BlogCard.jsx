import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  const date = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-16/10 bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x375/e07b20/ffffff?text=Blog`;
          }}
        />
      </div>
      <div className="p-5">
        <time className="text-xs text-brand font-medium">{date}</time>
        <h3 className="font-semibold text-navy text-lg mt-2 mb-3 line-clamp-2 group-hover:text-brand transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        )}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all"
        >
          Read More <span>→</span>
        </Link>
      </div>
    </article>
  );
}
