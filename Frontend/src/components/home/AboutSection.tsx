import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "../ui/SectionTitle";
import { BookOpen, Users, Award } from "lucide-react";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 overflow-hidden bg-[#0f172a] mt-16">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/3 w-1/2 h-1/2 bg-[#00ffb3]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/3 w-1/2 h-1/2 bg-[#ff9f43]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <SectionTitle
          title="Welcome to LASECT"
          subtitle="A leading institution dedicated to transforming students through quality education in English and Computer Technology."
          titleClassName="text-[#00ffb3]"
          subtitleClassName="text-white/70"
        />

        <div
          ref={ref}
          className="grid gap-8 mt-16 md:grid-cols-3 max-w-6xl mx-auto"
        >
          {[
            {
              icon: BookOpen,
              title: "Quality Education",
              description:
                "Our curriculum is carefully designed to build strong foundations in English and Computer Technology.",
            },
            {
              icon: Users,
              title: "Expert Faculty",
              description:
                "Learn from experienced teachers and trainers committed to your academic and professional success.",
            },
            {
              icon: Award,
              title: "Recognized Certificates",
              description:
                "Earn certificates that enhance your skills and are valued by institutions and employers.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`academy-card relative text-center rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#020617]
              transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00ffb3]/15 flex items-center justify-center mb-6 shadow-inner">
                <Icon className="w-8 h-8 text-[#00ffb3]" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-[#ff9f43] mb-3">
                {title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[#00ffb3] font-semibold group text-lg"
          >
            Learn more about us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
