import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "../ui/SectionTitle";
import {
  ClipboardList,
  FileText,
  CheckCircle,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Fill Application",
    description: "Complete the online registration form with your details.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Submit Documents",
    description: "Provide required documents for verification.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Confirmation",
    description: "Receive confirmation and class schedule.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Start Learning",
    description: "Begin your journey at LASECT!",
  },
];

export function RegistrationProcess() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden bg-[#0f172a] mt-16">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Registration Process"
          subtitle="Simple steps to join LASECT and start your learning journey."
          titleClassName="text-[#00ffb3]"
          subtitleClassName="text-white/70"
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-[#00ffb3]/20" />
                )}

                {/* Card */}
                <div className="academy-card relative text-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                  {/* Step Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#ffb547] text-black flex items-center justify-center text-sm font-bold shadow-md">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00ffb3]/10 flex items-center justify-center mt-6 mb-4">
                    <Icon className="w-8 h-8 text-[#00ffb3]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-semibold mb-2 text-[#ff9f43]">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
