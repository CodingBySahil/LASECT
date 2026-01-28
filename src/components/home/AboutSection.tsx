import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "../ui/SectionTitle";
import { BookOpen, Users, Award } from "lucide-react";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-gradient-to-b from-secondary/60 to-background">
      {/* branded soft background accent */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <SectionTitle
          title="Welcome to LASECT"
          subtitle="A leading institution dedicated to transforming students through quality education in English and Computer Technology."
        />

        <div ref={ref} className="grid gap-8 mt-14 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Quality Education",
              description:
                "Our curriculum is carefully designed to build strong foundations in English and Computer Technology.",
              delay: "delay-1",
            },
            {
              icon: Users,
              title: "Expert Faculty",
              description:
                "Learn from experienced teachers and trainers committed to your academic and professional success.",
              delay: "delay-2",
            },
            {
              icon: Award,
              title: "Recognized Certificates",
              description:
                "Earn certificates that enhance your skills and are valued by institutions and employers.",
              delay: "delay-3",
            },
          ].map(({ icon: Icon, title, description, delay }) => (
            <div
              key={title}
              className={`academy-card text-center animate-on-scroll ${delay} ${
                isVisible ? "visible" : ""
              } transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold group"
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
