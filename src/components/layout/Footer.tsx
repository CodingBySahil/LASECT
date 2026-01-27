import { Link } from 'react-router-dom';
import { GraduationCap, Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer 
      ref={ref}
      className={`bg-primary text-primary-foreground pt-16 pb-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">LASECT</span>
                <p className="text-xs text-primary-foreground/70">London Academy</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              The London Academy of Spoken English and Computer Technology provides professional education to help students build confidence, skills, and a successful future.
            </p>
            <p className="text-primary-foreground/60 text-sm italic font-heading">
              "LASECT is a fact where education shows its effect."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/courses', label: 'Courses' },
                { href: '/scholarship', label: 'Scholarship Test' },
                { href: '/register', label: 'Register Now' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {[
                'Diploma in IT (DIT)',
                'Certificate in IT (CIT)',
                'Spoken English Program',
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/80 text-sm">
                  Qamardin Ghari, Peshawar, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-foreground/70" />
                <a
                  href="tel:+923087890019"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  +92 308 7890019
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-foreground/70" />
                <a
                  href="mailto:info@lasect.edu.pk"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@lasect.edu.pk
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} The London Academy of Spoken English and Computer Technology. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Director: <span className="text-primary-foreground/80">Muhammad Noor</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
