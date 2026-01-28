import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Award, Users, BookOpen, Heart } from "lucide-react";

const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  const values = [
    {
      icon: BookOpen,
      title: "Excellence",
      description:
        "We strive for the highest standards in education and training.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We build a supportive learning environment for all students.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical practices.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new teaching methods and technologies.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0f172a] overflow-hidden">
        {/* Background decorations (optional, like Hero) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-[#00ffb3] mb-6 drop-shadow-[0_0_10px_#00ffb3] animate-fade-in-up">
              About LASECT
            </h1>
            <p
              className="text-lg md:text-xl text-white/80 leading-relaxed fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <b style={{ color: "#ff9f43" }}>
                The London Academy of Spoken English and Computer Technology
              </b>{" "}
              provides professional education in English language and computer
              courses to help students build confidence, skills, and a
              successful future.
            </p>
          </div>
        </div>
      </section>

      {/* who we are section */}
      <section className="relative py-20 bg-[#0f172a] overflow-hidden mt-16">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-6  animate-fade-in-up">
              Who We Are
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              A premier institution dedicated to transforming lives through
              quality education.
            </p>
          </div>

          {/* About Paragraphs */}
          <div
            className="max-w-5xl mx-auto space-y-6 text-white fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg leading-relaxed">
              <strong className="text-[#ff9f43]">
                The London Academy of Spoken English and Computer Technology
                (LASECT)
              </strong>{" "}
              is a leading educational institution located in Qamardin Ghari,
              Peshawar. We are committed to providing world-class education in
              English language and computer technology to students from all
              backgrounds.
            </p>

            <p className="text-lg leading-relaxed">
              Founded with the vision of bridging the gap between education and
              employment, LASECT focuses on practical, hands-on training that
              prepares students for real-world challenges. Our curriculum is
              designed to develop not just technical skills, but also
              confidence, communication abilities, and a professional mindset.
            </p>

            <p className="text-lg leading-relaxed italic text-[#ff9f43] font-heading">
              "LASECT is a fact where education shows its effect."
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16">
            {/* Mission */}
            <div
              ref={missionRef}
              className={`academy-card bg-[#1a2238] p-8 rounded-3xl shadow-lg transition-all duration-700 ${
                missionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00ffb3]/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#00ffb3]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#00ffb3] mb-4 animate-fade-in-up">
                Our Mission
              </h3>
              <p
                className="text-white/80 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                To provide accessible, high-quality education that empowers
                students with practical skills in English communication and
                computer technology. We aim to transform every student into a
                confident, capable individual ready to succeed in today's
                competitive world.
              </p>
            </div>

            {/* Vision */}
            <div
              ref={visionRef}
              className={`academy-card bg-[#1a2238] p-8 rounded-3xl shadow-lg transition-all duration-700 delay-200 ${
                visionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00ffb3]/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#00ffb3]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#00ffb3] mb-4 animate-fade-in-up">
                Our Vision
              </h3>
              <p
                className="text-white/80 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                To become the most trusted and recognized academy for English
                and IT education in the region, known for producing skilled,
                confident graduates who contribute positively to society and
                excel in their chosen careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-[#0f172a] overflow-hidden mt-16">
        {/* Optional background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-4 animate-fade-in-up">
              Our Core Values
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              The principles that guide everything we do at LASECT.
            </p>
          </div>

          {/* Values Grid */}
          <div
            ref={valuesRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`text-center bg-[#1a2238] p-6 rounded-3xl shadow-lg transition-all duration-500 ${
                    valuesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00ffb3]/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#00ffb3]" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#00ffb3] mb-2 animate-fade-in-up">
                    {value.title}
                  </h3>
                  <p
                    className="text-white/80 text-sm leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-20 bg-[#0f172a] overflow-hidden my-16">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-4 drop-shadow-[0_0_10px_#00ffb3] animate-fade-in-up">
              Our Leadership
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Meet the visionary behind LASECT's mission.
            </p>
          </div>

          {/* Leader Card */}
          <div
            className="max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="academy-card bg-[#1a2238] p-8 rounded-3xl shadow-lg text-center">
              {/* Avatar Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#00ffb3] shadow-md">
                <img
                  src="/noor.png"
                  alt="Muhammad Noor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Position */}
              <h3 className="text-2xl font-heading font-bold text-[#00ffb3] mb-2 animate-fade-in-up">
                Muhammad Noor
              </h3>
              <p className="text-[#ff9f43] font-semibold mb-4 animate-fade-in-up">
                Director
              </p>

              {/* Description */}
              <p
                className="text-white/80 leading-relaxed max-w-lg mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Under the dedicated leadership of Muhammad Noor, LASECT has
                grown into a trusted institution known for its commitment to
                student success. His vision of practical, transformative
                education continues to guide the academy's mission of empowering
                students through quality learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
