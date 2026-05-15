import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105';
  const variants = {
    primary: 'bg-brand hover:bg-brand-dark text-white',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
    white: 'bg-white text-brand hover:bg-gray-100',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
