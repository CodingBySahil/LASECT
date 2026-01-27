import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/scholarship', label: 'Scholarship' },
  { href: '/register', label: 'Register' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">
                LASECT
              </span>
              <p className="text-xs text-muted-foreground">
                London Academy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link px-4 py-2 rounded-lg ${
                  location.pathname === link.href ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+923087890019"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+92 308 7890019</span>
            </a>
            <Link
              to="/register"
              className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Sign Up Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="tel:+923087890019"
                className="flex items-center gap-2 px-4 py-3 text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>+92 308 7890019</span>
              </a>
              <Link
                to="/register"
                className="block w-full mt-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl text-center"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
