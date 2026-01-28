import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "../ui/SectionTitle";
import { Clock } from "lucide-react";

const timings = [
  {
    icon: Clock,
    shift: "Afternoon",
    time: "2:00 PM – 3:30 PM",
    description: "Perfect for college students",
  },

  {
    icon: Clock,
    shift: "Evening",
    time: "3:30 PM – 5:30 PM",
    description: "For working professionals",
  },
  {
    icon: Clock,
    shift: "Evening",
    time: "5:30 PM – 7:00 PM",
    description: "For working professionals",
  },
];

export function ClassTimings() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden bg-[#0f172a] mt-16">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -right-1/3 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 -left-1/3 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Class Timings"
          subtitle="Flexible schedules designed to fit your lifestyle and commitments."
          titleClassName="text-[#00ffb3]"
          subtitleClassName="text-[#ff9f43]"
        />

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
        >
          {timings.map((timing, index) => {
            const Icon = timing.icon;
            return (
              <div
                key={timing.description}
                className={`relative rounded-2xl p-8 text-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-[#00ffb3]/15 flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-8 h-8 text-[#00ffb3]" />
                </div>

                {/* Shift */}
                <h3 className="text-xl font-heading font-semibold text-[#ff9f43] mb-2">
                  {timing.shift}
                </h3>

                {/* Time */}
                <p className="text-2xl font-bold text-white mb-2">
                  {timing.time}
                </p>

                {/* Description */}
                <p className="text-sm text-white/70">{timing.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
