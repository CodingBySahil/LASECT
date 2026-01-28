import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MessageCircleMore } from "lucide-react";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-[#0f172a] my-16"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 -left-1/3 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-3xl p-8 md:p-16 text-center shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#00ffb3] mb-6">
            Ready to Transform Your Future?
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join <strong className="text-white">LASECT</strong> today and take
            the first step towards a successful career. Our doors are open for
            students who are ready to{" "}
            <strong className="text-[#ff9f43]">learn and grow</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffb547] text-black font-bold rounded-xl shadow-lg transition-all hover:bg-[#ff9f43] hover:scale-105 active:scale-95"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+923087890019"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ffb3]/10 text-[#00ffb3] font-semibold rounded-xl border-2 border-[#00ffb3]/30 transition-all hover:bg-[#00ffb3]/20 hover:border-[#00ffb3]/50"
            >
              <MessageCircleMore className="w-5 h-5" />
              +92 335 4343943
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
