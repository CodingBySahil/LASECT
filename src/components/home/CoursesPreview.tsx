import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "../ui/SectionTitle";
import { Monitor, Globe, Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Diploma in Information Technology (DIT)",
    // duration: "1 Year",
    eligibility: "All students",
    mode: "On-campus",
    description:
      "Comprehensive IT training covering hardware, software, and professional skills.",
  },
  {
    icon: Monitor,
    title: "Certificate in Information Technology (CIT)",
    // duration: "3 Months",
    eligibility: "All students",
    mode: "On-campus",
    description: "Quick certification program for essential computer skills.",
  },
  {
    icon: Globe,
    title: "English Language Courses",
    // duration: "2 Years",
    eligibility: "All students",
    mode: "On-campus",
    description: "Master English communication with confidence and fluency.",
  },
];

export function CoursesPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden bg-[#0f172a] my-16">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -right-1/3 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 -left-1/3 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Our Courses"
          subtitle="Professional programs designed to equip you with in-demand skills for today's competitive world."
          titleClassName="text-[#00ffb3]"
          subtitleClassName="text-[#ff9f43]"
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mt-14">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className={`group rounded-2xl p-7 flex flex-col h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#00ffb3]/15 flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-8 h-8 text-[#00ffb3]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-[#00ffb3] transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 mb-6 flex-1 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 mb-6">
                  {/* <div className="flex items-center gap-2 text-sm text-white/80">
                    <Clock className="w-4 h-4 text-[#ff9f43]" />
                    <span>Duration:</span>
                    <span className="font-semibold text-white">
                      {course.duration}
                    </span>
                  </div> */}

                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span>Mode:</span>
                    <span className="font-semibold text-white">
                      {course.mode}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 text-[#ff9f43] font-semibold text-sm group/link hover:text-[#00ffb3] transition-all"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#00ffb3] text-[#0f172a] font-bold rounded-2xl shadow-lg transition-all hover:bg-[#00e6a4] hover:scale-105 active:scale-95"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
