import { Link } from "react-router-dom";
import {
  GraduationCap,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer
      ref={ref}
      className={`bg-primary text-primary-foreground transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Top Section */}
      <div className="container mx-auto px-4 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand / About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-bold text-xl">LASECT</h2>
                <p className="text-xs text-primary-foreground/70">
                  London Academy
                </p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
              The London Academy of Spoken English and Computer Technology is
              committed to empowering students with practical skills,
              confidence, and professional excellence.
            </p>

            <p className="text-sm italic text-primary-foreground/60">
              “LASECT is a fact where education shows its effect.”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Courses" },
                { href: "/scholarship", label: "Scholarship Test" },
                { href: "/register", label: "Register Now" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Diploma in IT (DIT)",
                "Certificate in IT (CIT)",
                "Spoken English Program",
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Qamardin Ghari, Peshawar, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70" />
                <a
                  href="tel:+923087890019"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +92 308 7890019
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70" />
                <a
                  href="mailto:info@lasect.edu.pk"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@lasect.edu.pk
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[320px] md:h-[380px]">
        <iframe
          title="LASECT Location"
          src="https://www.google.com/maps?q=33.9159683,71.5322002&z=15&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} The London Academy of Spoken English
            and Computer Technology. All rights reserved.
          </p>

          <p className="text-primary-foreground/60">
            Director:{" "}
            <span className="text-primary-foreground/80">Muhammad Noor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
