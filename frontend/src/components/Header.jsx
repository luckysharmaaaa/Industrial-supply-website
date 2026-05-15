import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND, NAV_LINKS } from '../data/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const productsLink = NAV_LINKS.find((l) => l.children);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      {/* Top call bar */}
      <div className="hidden lg:block bg-brand text-white text-center text-sm py-1.5">
        <a href={`tel:${BRAND.phoneRaw}`} className="hover:underline font-medium">
          Call Now: {BRAND.phone}
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Deepak Enterprises"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive ? 'text-brand' : 'text-navy hover:text-brand'
                      }`
                    }
                  >
                    {link.label} ▾
                  </NavLink>
                  <div
                    className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top ${
                      productsOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-navy hover:bg-orange-50 hover:text-brand transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <Link
                      to="/products"
                      className="block px-4 py-2.5 text-sm font-semibold text-brand border-t border-gray-100 mt-1"
                    >
                      View All Products →
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive ? 'text-brand' : 'text-navy hover:text-brand'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Call button desktop */}
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="hidden lg:inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-navy hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black/50 z-40 transition-opacity ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 overflow-y-auto h-full">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-navy font-medium"
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    {link.label}
                    <span className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {productsOpen && (
                    <ul className="pl-4 space-y-1 border-l-2 border-brand/30 mb-2">
                      {link.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className="block py-2 text-sm text-gray-600 hover:text-brand"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          to="/products"
                          className="block py-2 text-sm font-semibold text-brand"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All Products
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block py-3 font-medium ${isActive ? 'text-brand' : 'text-navy'}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="mt-6 flex items-center justify-center gap-2 w-full bg-brand text-white font-semibold py-3 rounded-full"
          >
            Call Now: {BRAND.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
