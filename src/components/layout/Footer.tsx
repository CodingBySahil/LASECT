import { Link } from "react-router-dom";
import {
  GraduationCap,
  MessageCircleMore,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MonitorPlay,
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
                  The London Academy
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
                "English Language Courses",
                "Diploma in IT (DIT)",
                "Computer Courses",
                "Calligraphy",
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
          {/* Contact + Social */}
          <div className="academy-card p-6 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl">
            <h3 className="font-semibold text-lg mb-6 text-[#00ffb3]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="min-w-5 min-h-5 text-[#ff9f43]/80 mt-0.5" />
                <span className="text-white/80">
                  Ring Road Bridge on Kohat Road, Near Girls primary school,
                  Ghari qamar din Peshawar
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <MessageCircleMore className="w-5 h-5 text-[#ff9f43]/80" />
                <a
                  href="tel:+923354343943"
                  className="text-white/80 hover:text-[#00ffb3] transition-colors"
                >
                  +92 335 4343943
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff9f43]/80" />
                <a
                  href="mailto:info@lasect.edu.pk"
                  className="text-white/80 hover:text-[#00ffb3] transition-colors"
                >
                  info@lasect.edu.pk
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/share/18Ly3NK6vy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#ff9f43]/20 flex items-center justify-center hover:bg-[#ff9f43]/40 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.instagram.com/lasect2026?igsh=aGVtZHdsdXdhaGpw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#00ffb3]/20 flex items-center justify-center hover:bg-[#00ffb3]/40 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.tiktok.com/@lasect?_r=1&_t=ZS-93RxJL9yMcb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#ff0066]/20 flex items-center justify-center hover:bg-[#ff0066]/40 transition-colors"
              >
                <MonitorPlay className="w-5 h-5 text-white" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#00bfff]/20 flex items-center justify-center hover:bg-[#00bfff]/40 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[320px] md:h-[380px]">
        <iframe
          title="LASECT Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.77948664942812!2d71.56632956265942!3d33.98041368445364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9174e9593b339%3A0xae2516b365d392b9!2sPearl%20Stationary%20%26%20Paper%20Mart!5e0!3m2!1sen!2s!4v1769606722665!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen
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
            Managing Director :{" "}
            <span className="text-primary-foreground/80">Muhammad Noor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
