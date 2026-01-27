import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Monitor, Globe, Clock, Users, Award, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 'dit',
    icon: Monitor,
    title: 'Diploma in Information Technology (DIT)',
    duration: '1 Year',
    eligibility: 'All students',
    mode: 'On-campus',
    description: 'A comprehensive program covering all aspects of information technology, from basic computer operations to advanced software applications.',
    highlights: [
      'Computer fundamentals & hardware',
      'Microsoft Office Suite mastery',
      'Internet & email management',
      'Basic programming concepts',
      'Database management',
      'Professional IT skills',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'cit',
    icon: Monitor,
    title: 'Certificate in Information Technology (CIT)',
    duration: '3 Months',
    eligibility: 'All students',
    mode: 'On-campus',
    description: 'A fast-track certification program designed to quickly equip students with essential computer skills needed in today\'s workplace.',
    highlights: [
      'Basic computer operations',
      'Word processing & spreadsheets',
      'Internet basics',
      'Email communication',
      'File management',
      'Typing skills',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'spoken-english',
    icon: Globe,
    title: 'Spoken English Language Program',
    duration: '2 Years',
    eligibility: 'All students',
    mode: 'On-campus',
    description: 'Master the English language with our comprehensive spoken English program designed to build confidence and fluency in communication.',
    highlights: [
      'Pronunciation & accent training',
      'Grammar & vocabulary building',
      'Conversation practice',
      'Public speaking skills',
      'Professional communication',
      'IELTS preparation basics',
    ],
    color: 'from-purple-500 to-purple-600',
  },
];

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 fade-in-up">
              Our Courses
            </h1>
            <p className="text-lg text-white/80 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Professional programs designed to equip you with in-demand skills
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Courses */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, title: 'Expert Instructors', desc: 'Learn from industry professionals' },
              { icon: BookOpen, title: 'Practical Training', desc: 'Hands-on learning approach' },
              { icon: Award, title: 'Recognized Certificates', desc: 'Valued by employers' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Choose Your Path"
            subtitle="Select from our range of professional courses tailored to your goals."
          />

          <div 
            ref={ref}
            className="space-y-12"
          >
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className={`academy-card overflow-hidden transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Course Info */}
                    <div className="p-2">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-heading font-bold mb-4">{course.title}</h3>
                      <p className="text-muted-foreground mb-6">{course.description}</p>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{course.eligibility}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{course.mode}</span>
                        </div>
                      </div>

                      <Link
                        to="/register"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        Register Now
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Course Highlights */}
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <h4 className="font-heading font-semibold mb-4">What You'll Learn</h4>
                      <ul className="space-y-3">
                        {course.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{highlight}</span>
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

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Choose your course and take the first step towards a brighter future today.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105"
          >
            Register Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
