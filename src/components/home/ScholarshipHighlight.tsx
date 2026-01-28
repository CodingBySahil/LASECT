import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Gift, Sparkles, ArrowRight } from "lucide-react";

export function ScholarshipHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  const rewards = [
    {
      icon: Trophy,
      label: "1st Position",
      value: "Certificate + Rs. 3,000 + One Full Course Free",
    },
    {
      icon: Trophy,
      label: "2nd Position",
      value: "Certificate + Rs. 2,000 + One Full Course Free",
    },
    {
      icon: Trophy,
      label: "3rd Position",
      value: "Certificate + Rs. 1,500 + One Full Course Free",
    },
    { icon: Gift, label: "Top 10 Candidates", value: "50% Fee Concession" },
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl p-8 md:p-12 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Limited Seats • Equal Opportunity
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                LASECT Scholarship Test 2026
              </h2>

              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Showcase your talent and earn scholarships for quality
                education. The test evaluates English, Computer Science, Islamic
                Studies, and General Knowledge.
              </p>

              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2 text-sm">
                <li>
                  <strong>Test Format:</strong> 100 MCQs in 1 Hour
                </li>
                <li>
                  <strong>Intakes:</strong> First - Feb 15, 2026 | Second -
                  After Eid-ul-Fitr
                </li>
                <li>
                  <strong>Timing Slots:</strong> 10 AM – 11 AM, 11 AM – 12 PM, 2
                  PM – 3 PM, 3 PM – 4 PM, 4 PM – 5 PM
                </li>
                <li>
                  <strong>Last Date to Apply:</strong> Feb 13, 2026
                </li>
              </ul>

              <Link
                to="/scholarship"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Apply for Scholarship Test
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Rewards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rewards.map((reward, index) => {
                const Icon = reward.icon;
                return (
                  <div
                    key={reward.label}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-500 hover:bg-white/20 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <Icon className="w-7 h-7 text-yellow-300 mb-2" />
                    <p className="text-white/80 text-sm">{reward.label}</p>
                    <p className="text-white font-semibold text-sm">
                      {reward.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
