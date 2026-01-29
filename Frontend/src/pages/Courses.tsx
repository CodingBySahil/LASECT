import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Monitor,
  Globe,
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    id: "dit",
    icon: Monitor,
    title: "Diploma in Information Technology (DIT)",
    duration: "1 Year",
    eligibility: "All students",
    mode: "On-campus",
    description:
      "A comprehensive program covering all aspects of information technology, from basic computer operations to advanced software applications.",
    highlights: [
      "Computer fundamentals & hardware",
      "Microsoft Office Suite mastery",
      "Internet & email management",
      "Basic programming concepts",
      "Database management",
      "Professional IT skills",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "cit",
    icon: Monitor,
    title: "Certificate in Information Technology (CIT)",
    duration: "3 Months",
    eligibility: "All students",
    mode: "On-campus",
    description:
      "A fast-track certification program designed to quickly equip students with essential computer skills needed in today's workplace.",
    highlights: [
      "Basic computer operations",
      "Word processing & spreadsheets",
      "Internet basics",
      "Email communication",
      "File management",
      "Typing skills",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    id: "spoken-english",
    icon: Globe,
    title: "Spoken English Language Program",
    duration: "2 Years",
    eligibility: "All students",
    mode: "On-campus",
    description:
      "Master the English language with our comprehensive spoken English program designed to build confidence and fluency in communication.",
    highlights: [
      "Pronunciation & accent training",
      "Grammar & vocabulary building",
      "Conversation practice",
      "Public speaking skills",
      "Professional communication",
      "IELTS preparation basics",
    ],
    color: "from-purple-500 to-purple-600",
  },
];

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Courses Section */}
      <section className="relative pt-32 pb-20 bg-[#0f172a] overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-6 drop-shadow-[0_0_10px_#00ffb3] animate-fade-in-up">
              Our Courses
            </h1>
            <p
              className="text-lg md:text-xl text-white/80 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Professional programs designed to equip you with in-demand skills
            </p>
          </div>

          {/* Courses Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                desc: "Learn from industry professionals",
              },
              {
                icon: BookOpen,
                title: "Practical Training",
                desc: "Hands-on learning approach",
              },
              {
                icon: Award,
                title: "Recognized Certificates",
                desc: "Valued by employers",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`text-center bg-[#1a2238] p-6 rounded-3xl shadow-lg transition-all duration-500 fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#00ffb3]/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#00ffb3]" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#00ffb3] mb-1 animate-fade-in-up">
                    {item.title}
                  </h3>
                  <p
                    className="text-white/80 text-sm leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Choose Your Path / Course Details Section */}
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
            <SectionTitle
              title="Choose Your Path"
              subtitle="Select from our range of professional courses tailored to your goals."
            />
          </div>

          {/* Course Cards */}
          <div ref={ref} className="space-y-12">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className={`academy-card overflow-hidden rounded-3xl shadow-lg bg-[#1a2238] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 p-6">
                    {/* Course Info */}
                    <div className="space-y-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-heading font-bold text-[#00ffb3]">
                        {course.title}
                      </h3>
                      <p className="text-white/80">{course.description}</p>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#0f172a]/50 rounded-lg">
                          <Clock className="w-4 h-4 text-[#00ffb3]" />
                          <span className="text-white/80 text-sm font-medium">
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#0f172a]/50 rounded-lg">
                          <Users className="w-4 h-4 text-[#00ffb3]" />
                          <span className="text-white/80 text-sm font-medium">
                            {course.eligibility}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#0f172a]/50 rounded-lg">
                          <BookOpen className="w-4 h-4 text-[#00ffb3]" />
                          <span className="text-white/80 text-sm font-medium">
                            {course.mode}
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/register"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ffb3] text-black font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        Register Now
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Course Highlights */}
                    <div className="bg-[#0f172a]/50 rounded-xl p-6 space-y-4">
                      <h4 className="font-heading font-semibold text-[#00ffb3] mb-4">
                        What You'll Learn
                      </h4>
                      <ul className="space-y-3">
                        {course.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-[#00ffb3] flex-shrink-0 mt-0.5" />
                            <span className="text-white/80">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0f172a] overflow-hidden my-16">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
      from-white/10 via-transparent to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-4 drop-shadow-[0_0_10px_#00ffb3] animate-fade-in-up">
              Ready to Start Your Journey?
            </h2>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-white/80 mb-8 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Choose your course and take the first step towards a brighter
              future today.
            </p>

            {/* Button */}
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ffb3] text-black font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
