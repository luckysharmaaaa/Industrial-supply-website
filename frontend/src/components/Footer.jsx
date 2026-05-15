import { Link } from 'react-router-dom';
import { BRAND } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Deepak Enterprises"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              <strong className="text-white">Deepak Enterprises</strong> – Supplying quality{' '}
              <strong>Old Dhoti Wipers, Cotton Cleaning Cloths, and Industrial Hand Gloves</strong>{' '}
              across India since 1987.
            </p>
            <a
              href={BRAND.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About us', path: '/about' },
                { label: 'Blog', path: '/blog' },
                { label: 'Product', path: '/products' },
                { label: 'Gallery', path: '/gallery' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-brand text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-brand font-semibold text-lg mb-4">Our Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-brand text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand font-semibold text-lg mb-4">Contact Details</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="text-brand shrink-0">📍</span>
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand shrink-0">📧</span>
                <a href={`mailto:${BRAND.email}`} className="hover:text-brand transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-brand shrink-0">📞</span>
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-brand transition-colors">
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        Copyright by Deepak Enterprises 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
