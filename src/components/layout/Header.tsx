import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, GraduationCap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="block leading-tight">
              <span
                className={`block font-bold text-lg transition-colors ${isScrolled ? "text-gray-900" : "text-white"
                  }`}
              >
                LASECT
              </span>
              <span
                className={`text-xs transition-colors ${isScrolled ? "text-gray-500" : "text-white/80"
                  }`}
              >
                The London Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isActive
                      ? isScrolled
                        ? "text-primary bg-primary/10"
                        : "text-white bg-white/20"
                      : isScrolled
                        ? "text-gray-700 hover:text-primary hover:bg-primary/10"
                        : "text-white/90 hover:text-white hover:bg-white/20"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/923354343943?text=Assalam%20o%20Alaikumo%Managingo%Director,%20I%20want%20to%20apply%20for%20LASECT%20Scholarship"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-colors ${isScrolled ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-[#00ffb3]"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>+92 335 4343943</span>
            </a>

            {/* Sign Up CTA */}
            <Link
              to="/register"
              className="px-5 py-2.5 bg-primary text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Sign Up Now
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled
              ? "text-gray-800 hover:bg-gray-100"
              : "text-white hover:bg-white/20"
              }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <nav className="container mx-auto px-4 py-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === link.href
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="tel:+923087890019"
                className="flex items-center gap-2 px-4 py-3 text-gray-600"
              >
                <a
                  href="https://wa.me/923354343943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  hover:text-[#00ffb3] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+92 335 4343943</span>
                </a>

              </a>

              <Link
                to="/register"
                className="block w-full mt-2 px-4 py-3 bg-primary text-white font-semibold rounded-xl text-center"
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
