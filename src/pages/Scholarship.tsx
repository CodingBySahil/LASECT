import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Trophy,
  Gift,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Users,
  FileText,
  Award,
  Target,
  Phone,
  User,
  UserPlus,
} from "lucide-react";

const Scholarship = () => {
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { ref: prizesRef, isVisible: prizesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: syllabusRef, isVisible: syllabusVisible } = useScrollAnimation();

  const prizes = [
    {
      position: "1st Position",
      color: "from-yellow-400 to-amber-500",
      icon: Trophy,
      rewards: [
        "Certificate of Excellence",
        "₨3,000 Cash Prize",
        "One Complete Course Absolutely FREE (DIT / CIT / Spoken English)",
      ],
    },
    {
      position: "2nd Position",
      color: "from-gray-300 to-gray-400",
      icon: Trophy,
      rewards: [
        "Certificate of Achievement",
        "₨2,000 Cash Prize",
        "One Complete Course Absolutely FREE (DIT / CIT / Spoken English)",
      ],
    },
    {
      position: "3rd Position",
      color: "from-amber-600 to-amber-700",
      icon: Trophy,
      rewards: [
        "Certificate of Merit",
        "₨1,500 Cash Prize",
        "One Complete Course Absolutely FREE (DIT / CIT / Spoken English)",
      ],
    },
  ];

  const allParticipantRewards = ["Discount on Course Fee"];

  const testDetails = [
    { icon: Calendar, label: "Test Date", value: "Announced Soon" },
    { icon: Clock, label: "Duration", value: "2 Hours" },
    { icon: MapPin, label: "Venue", value: "LASECT Campus" },
    { icon: Users, label: "Eligibility", value: "All Students" },
  ];

  const syllabusTopics = [
    {
      category: "English",
      topics: [
        "Grammar",
        "Vocabulary",
        "Reading Comprehension",
        "Writing Skills",
      ],
    },
    {
      category: "General Knowledge",
      topics: ["Current Affairs", "Science & Technology", "Pakistan Studies"],
    },
    {
      category: "Basic Math",
      topics: ["Arithmetic", "Basic Algebra", "Percentages"],
    },
    {
      category: "Computer Basics",
      topics: [
        "Computer Fundamentals",
        "MS Office Basics",
        "Internet Awareness",
      ],
    },
  ];

  const howToApply = [
    {
      step: 1,
      title: "Visit Academy",
      desc: "Come to LASECT campus in person or contact us",
    },
    {
      step: 2,
      title: "Get Application",
      desc: "Collect scholarship test application form",
    },
    {
      step: 3,
      title: "Submit Form",
      desc: "Fill and submit with required documents",
    },
    {
      step: 4,
      title: "Receive Admit Card",
      desc: "Get your test date and admit card",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-academy-blue-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6 fade-in-up">
              <Sparkles className="w-4 h-4" />
              Limited Time Opportunity
            </div>

            <h1
              className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-6 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Scholarship Test 2026
            </h1>

            <p
              className="flex items-center justify-center  gap-3 text-lg md:text-3xl font-semibold text-[#ff9f43] mb-8 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <User className="w-6 h-6 text-[#00ffb3]" />
              for Boys & Girls
              <UserPlus className="w-6 h-6 text-[#00ffb3]" />
            </p>

            <p
              className="text-lg text-white/80 mb-8 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Give your best in the test and unlock amazing rewards including
              full scholarships, cash prizes, and exclusive opportunities.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffb547] text-black shadow-lg hover:bg-[#ff9f1a] transition-all font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105 active:scale-95 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Apply for Test
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Test Details */}
      <section className="py-16 bg-[#0f172a]/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {testDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className="academy-card bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 mb-3 text-[#00ffb3]" />
                  <p className="text-sm text-white/70 mb-1">{detail.label}</p>
                  <p className="font-bold text-lg text-[#ff9f43]">
                    {detail.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#0f172a]/30">
        <div className="container mx-auto px-4">
          <div
            ref={overviewRef}
            className={`max-w-4xl mx-auto transition-all duration-700 rounded-2xl p-8 bg-[#1e293b] shadow-lg ${
              overviewVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <SectionTitle
              title="About the Scholarship Test"
              subtitle="Your gateway to quality education with financial support."
              titleClassName="text-[#00ffb3]"
              subtitleClassName="text-[#ff9f43]"
            />

            <div className="prose prose-lg max-w-none text-white/80">
              <p className="text-lg leading-relaxed mb-6">
                The{" "}
                <strong className="text-[#00ffb3]">
                  LASECT Scholarship Test
                </strong>{" "}
                is an annual competitive examination designed to identify
                talented students and provide them with financial assistance to
                pursue their education at our academy.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This is a unique opportunity for students who have the talent
                but may lack the resources to access quality education. Top
                performers will receive scholarships ranging from 30% to 100%
                fee waiver, along with cash prizes and recognition.
              </p>
              <p className="text-lg leading-relaxed">
                The test is open to all students regardless of their educational
                background. All you need is the determination to succeed and the
                willingness to learn.
              </p>

              <p className="text-lg leading-relaxed mt-6 font-semibold flex items-center gap-2 text-[#ff9f43]">
                <Sparkles className="w-5 h-5 text-[#00ffb3]" />
                For announcing the result of this scholarship test, we are going
                to have a grand ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-[#0f172a]/90">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Prizes & Rewards"
            subtitle="Compete for amazing prizes that can transform your educational journey."
            titleClassName="text-[#00ffb3]"
            subtitleClassName="text-[#ff9f43]"
          />

          <div
            ref={prizesRef}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12"
          >
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div
                  key={prize.position}
                  className={`academy-card relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-700 ${
                    prizesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Top bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${prize.color}`}
                  />

                  {/* Icon circle */}
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-center mb-4 text-[#00ffb3]">
                    {prize.position}
                  </h3>

                  <ul className="space-y-3">
                    {prize.rewards.map((reward) => (
                      <li key={reward} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#ff9f43] flex-shrink-0 mt-1" />
                        <span className="text-white/80 text-sm">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* All Participants */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="academy-card bg-[#1e293b] border-2 border-[#00ffb3]/20 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-[#00ffb3]" />
                <h3 className="text-xl font-heading font-semibold text-[#00ffb3]">
                  All Participants Receive
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {allParticipantRewards.map((reward) => (
                  <div key={reward} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff9f43]" />
                    <span className="text-white/80 text-sm">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-[#0f172a]/70 mt-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="How to Apply"
            subtitle="Follow these simple steps to register for the scholarship test."
            titleClassName="text-[#00ffb3]"
            subtitleClassName="text-[#ff9f43]"
          />

          <div
            ref={processRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12 relative"
          >
            {howToApply.map((item, index) => (
              <div
                key={item.step}
                className={`relative transition-all duration-700 ${
                  processVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Horizontal connector for desktop */}
                {index < howToApply.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-[#00ffb3]/30" />
                )}

                {/* Step Card */}
                <div className="academy-card relative rounded-2xl p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#00ffb3] text-[#0f172a] flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-[#ff9f43] text-lg">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="relative py-20 overflow-hidden bg-[#0f172a]/70 mt-8">
        {/* Background gradient & glows */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#00ffb3]/20 via-[#ff9f43]/20 to-[#0f172a] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[100%] h-[100%] bg-gradient-radial from-[#ff9f43]/15 via-[#00ffb3]/10 to-[#1e293b] rounded-full filter blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 z-10">
          <SectionTitle
            title="Test Syllabus"
            subtitle="What you need to prepare for the scholarship test."
            titleClassName="text-[#00ffb3]"
            subtitleClassName="text-[#ff9f43]"
          />

          <div
            ref={syllabusRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12"
          >
            {syllabusTopics.map((section, index) => (
              <div
                key={section.category}
                className={`academy-card rounded-2xl p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-700 ${
                  syllabusVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-[#00ffb3]" />
                  <h3 className="font-heading font-semibold text-[#ff9f43]">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-white/80"
                    >
                      <Target className="w-3 h-3 text-[#00ffb3] flex-shrink-0 mt-1.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="relative py-20 overflow-hidden bg-[#0f172a]/70 mt-8">
        {/* Background Gradient & Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#00ffb3]/20 via-[#ff9f43]/20 to-[#0f172a] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[100%] h-[100%] bg-gradient-radial from-[#ff9f43]/15 via-[#00ffb3]/10 to-[#1e293b] rounded-full filter blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Important Notes"
              subtitle="Please read carefully before applying."
              titleClassName="text-[#00ffb3]"
              subtitleClassName="text-[#ff9f43]"
            />

            <div className="academy-card rounded-2xl p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl mt-8">
              <ul className="space-y-4">
                {[
                  "Bring your original CNIC/B-Form and educational certificates on test day.",
                  "Reach the venue at least 30 minutes before the test starts.",
                  "Use of electronic devices is strictly prohibited during the test.",
                  "Results will be announced within 7 days of the test.",
                  "Scholarship is valid for one academic year and may be renewed based on performance.",
                  "The decision of LASECT management regarding results is final.",
                ].map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#00ffb3] flex-shrink-0 mt-1" />
                    <span className="text-white/80">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Don't Miss This Opportunity!
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Apply now for the LASECT Scholarship Test and take the first step
            towards a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {/* Apply Now Button */}
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-[#0f172a] font-bold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Call / WhatsApp Button */}
            <a
              href="tel:+923354343943"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              +92 335 4343943
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;
