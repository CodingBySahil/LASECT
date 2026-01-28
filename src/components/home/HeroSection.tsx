import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content Section - Left */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-heading font-bold mb-6 text-white">
              {/* Main Highlighted Text */}
              <span
                className="block text-3xl md:text-4xl lg:text-5xl text-[#00ffb3] drop-shadow-[0_0_10px_#00ffb3] animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                The London Academy
              </span>

              {/* Subtext */}
              <span
                className="block text-2xl md:text-3xl lg:text-4xl text-white/80 drop-shadow-lg animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                of Spoken English and Computer Technology
              </span>
            </h1>

            <p
              className="text-lg md:text-xl mb-10 leading-relaxed fade-in-up"
              style={{ animationDelay: "0.4s", color: "#f0f0f0" }}
            >
              <b style={{ color: "#ff9f43" }}>
                Empowering Students with English & Computer Skills
              </b>{" "}
              <br />
              The London Academy of Spoken English and Computer Technology
              provides professional education in English language and computer
              courses to help students build confidence, skills, and a
              successful future.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                to="/scholarship"
                className="btn-hero-secondary bg-[#4ade80] hover:bg-[#22c55e] text-black px-6 py-3 rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center"
              >
                Apply for Scholarship Test
              </Link>
              <Link
                to="/register"
                className="btn-hero-primary group bg-[#ffb547] text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#ff9f1a] transition-all flex items-center justify-center"
              >
                Sign Up Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { value: "500+", label: "Students Trained" },
                { value: "3+", label: "Professional Courses" },
                { value: "100%", label: "Practical Learning" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-[#00ffb3] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section - Right */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end bg-[#3b5d94] rounded-3xl p-6">
            <div
              className="w-3/4 lg:w-full fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="/LASECT_logo.png"
                alt="LASECT Logo"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <p className="text-[#ff9f43] font-bold text-center text-lg italic mt-4">
                LASECT is a fact where education shows its effect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
