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
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 fade-in-up">
              About LASECT
            </h1>
            <p
              className="text-lg text-white/80 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              The London Academy of Spoken English and Computer Technology
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Who We Are"
              subtitle="A premier institution dedicated to transforming lives through quality education."
            />

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">
                  The London Academy of Spoken English and Computer Technology
                  (LASECT)
                </strong>{" "}
                is a leading educational institution located in Qamardin Ghari,
                Peshawar. We are committed to providing world-class education in
                English language and computer technology to students from all
                backgrounds.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded with the vision of bridging the gap between education
                and employment, LASECT focuses on practical, hands-on training
                that prepares students for real-world challenges. Our curriculum
                is designed to develop not just technical skills, but also
                confidence, communication abilities, and a professional mindset.
              </p>
              <p className="text-lg leading-relaxed italic text-primary font-heading">
                "LASECT is a fact where education shows its effect."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Mission */}
            <div
              ref={missionRef}
              className={`academy-card transition-all duration-700 ${
                missionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
              className={`academy-card transition-all duration-700 delay-200 ${
                visionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and recognized academy for English
                and IT education in the region, known for producing skilled,
                confident graduates who contribute positively to society and
                excel in their chosen careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do at LASECT."
          />

          <div
            ref={valuesRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`text-center transition-all duration-500 ${
                    valuesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership"
            subtitle="Meet the visionary behind LASECT's mission."
          />

          <div className="max-w-2xl mx-auto">
            <div className="academy-card text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-4xl font-heading font-bold text-primary">
                  MN
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">
                Muhammad Noor
              </h3>
              <p className="text-primary font-semibold mb-4">Director</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
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
