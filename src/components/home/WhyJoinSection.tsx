import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Sparkles } from "lucide-react";

export function WhyJoinSection() {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    "Practical, results-driven training",
    "Real, measurable improvement",
    "Learning by doing approach",
    "Continuous practice & guidance",
    "Apply learning immediately",
    "Change is a process you can feel",
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#0f172a] mt-16 ">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={` mx-auto rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#00ffb3]/10 text-[#00ffb3] rounded-full text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              Why LASECT
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#00ffb3] mb-8">
            Why Should Students Join LASECT ?
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At <strong className="text-white">LASECT</strong>, education is
              not just taught — it is{" "}
              <em className="text-[#00ffb3] font-medium">experienced</em>.
            </p>

            <p>
              We are a practical, results-driven academy where students don’t
              just attend classes;{" "}
              <strong className="text-white">they transform</strong>.
            </p>

            <p>
              Our training model ensures{" "}
              <strong className="text-white">
                real, measurable improvement
              </strong>{" "}
              in skills, confidence, communication, and mindset — in a short
              period of time.
            </p>

            <p>
              We focus on{" "}
              <strong className="text-white">learning by doing</strong>,
              continuous practice, and personalized guidance so students can
              apply what they learn immediately in real-life and professional
              situations.
            </p>

            <p className="text-xl font-heading text-[#ff9f43] italic text-center pt-4">
              “At LASECT, change is not a promise — it’s a process you can
              feel.”
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {highlights.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 p-4 rounded-xl bg-[#00ffb3]/10 border border-[#00ffb3]/20 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${(index + 1) * 120}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-[#00ffb3] flex-shrink-0" />
                <span className="font-medium text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
