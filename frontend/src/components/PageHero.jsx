import { Link } from 'react-router-dom';

export default function PageHero({ title, breadcrumbs = [] }) {
  return (
    <section className="relative bg-gradient-to-r from-navy to-navy-light pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-brand transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
