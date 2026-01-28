import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MessageCircleMore } from "lucide-react";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`bg-primary rounded-3xl p-8 md:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join LASECT today and take the first step towards a successful
            career. Our doors are open for students who are ready to learn and
            grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+923087890019"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 transition-all hover:bg-white/20 hover:border-white/50"
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
