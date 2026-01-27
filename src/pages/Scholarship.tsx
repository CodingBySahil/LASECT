import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Trophy, Gift, Calendar, Clock, MapPin, 
  CheckCircle, Star, Sparkles, ArrowRight, 
  Users, FileText, Award, Target
} from 'lucide-react';

const Scholarship = () => {
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { ref: prizesRef, isVisible: prizesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: syllabusRef, isVisible: syllabusVisible } = useScrollAnimation();

  const prizes = [
    {
      position: '1st Position',
      color: 'from-yellow-400 to-amber-500',
      icon: Trophy,
      rewards: [
        'Full Scholarship (100% fee waiver)',
        '₨5,000 Cash Prize',
        'Certificate of Excellence',
        'Medal',
        'Special Recognition',
      ],
    },
    {
      position: '2nd Position',
      color: 'from-gray-300 to-gray-400',
      icon: Trophy,
      rewards: [
        '50% Fee Scholarship',
        '₨3,000 Cash Prize',
        'Certificate of Merit',
        'Medal',
      ],
    },
    {
      position: '3rd Position',
      color: 'from-amber-600 to-amber-700',
      icon: Trophy,
      rewards: [
        '30% Fee Scholarship',
        '₨2,000 Cash Prize',
        'Certificate of Achievement',
        'Medal',
      ],
    },
  ];

  const allParticipantRewards = [
    'Certificate of Participation',
    'Special Gift',
    'Discount on Course Fee',
    'Membership Card',
  ];

  const testDetails = [
    { icon: Calendar, label: 'Test Date', value: 'Announced Soon' },
    { icon: Clock, label: 'Duration', value: '2 Hours' },
    { icon: MapPin, label: 'Venue', value: 'LASECT Campus' },
    { icon: Users, label: 'Eligibility', value: 'All Students' },
  ];

  const syllabusTopics = [
    { category: 'English', topics: ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Writing Skills'] },
    { category: 'General Knowledge', topics: ['Current Affairs', 'Science & Technology', 'Pakistan Studies'] },
    { category: 'Basic Math', topics: ['Arithmetic', 'Basic Algebra', 'Percentages'] },
    { category: 'Computer Basics', topics: ['Computer Fundamentals', 'MS Office Basics', 'Internet Awareness'] },
  ];

  const howToApply = [
    { step: 1, title: 'Visit Academy', desc: 'Come to LASECT campus in person or contact us' },
    { step: 2, title: 'Get Application', desc: 'Collect scholarship test application form' },
    { step: 3, title: 'Submit Form', desc: 'Fill and submit with required documents' },
    { step: 4, title: 'Receive Admit Card', desc: 'Get your test date and admit card' },
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

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
              Scholarship Test 2025
            </h1>

            <p className="text-lg text-white/80 mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Give your best in the test and unlock amazing rewards including full scholarships, 
              cash prizes, and exclusive opportunities.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105 active:scale-95 fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Apply for Test
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Test Details */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {testDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="academy-card text-center">
                  <Icon className="w-8 h-8 mx-auto text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                  <p className="font-semibold">{detail.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={overviewRef}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <SectionTitle
              title="About the Scholarship Test"
              subtitle="Your gateway to quality education with financial support."
            />

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                The <strong className="text-foreground">LASECT Scholarship Test</strong> is an annual competitive 
                examination designed to identify talented students and provide them with financial assistance to 
                pursue their education at our academy.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This is a unique opportunity for students who have the talent but may lack the resources to 
                access quality education. Top performers will receive scholarships ranging from 30% to 100% 
                fee waiver, along with cash prizes and recognition.
              </p>
              <p className="text-lg leading-relaxed">
                The test is open to all students regardless of their educational background. All you need is 
                the determination to succeed and the willingness to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Prizes & Rewards"
            subtitle="Compete for amazing prizes that can transform your educational journey."
          />

          <div 
            ref={prizesRef}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div
                  key={prize.position}
                  className={`academy-card relative overflow-hidden transition-all duration-700 ${
                    prizesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${prize.color}`} />
                  
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-center mb-4">{prize.position}</h3>

                  <ul className="space-y-3">
                    {prize.rewards.map((reward) => (
                      <li key={reward} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* All Participants */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="academy-card bg-primary/5 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-heading font-semibold">All Participants Receive</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {allParticipantRewards.map((reward) => (
                  <div key={reward} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="How to Apply"
            subtitle="Follow these simple steps to register for the scholarship test."
          />

          <div 
            ref={processRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {howToApply.map((item, index) => (
              <div
                key={item.step}
                className={`relative transition-all duration-700 ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {index < howToApply.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-border" />
                )}

                <div className="relative academy-card text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Test Syllabus"
            subtitle="What you need to prepare for the scholarship test."
          />

          <div 
            ref={syllabusRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {syllabusTopics.map((section, index) => (
              <div
                key={section.category}
                className={`academy-card transition-all duration-700 ${
                  syllabusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-semibold">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Target className="w-3 h-3 text-primary flex-shrink-0 mt-1.5" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Important Notes"
              subtitle="Please read carefully before applying."
            />

            <div className="academy-card">
              <ul className="space-y-4">
                {[
                  'Bring your original CNIC/B-Form and educational certificates on test day.',
                  'Reach the venue at least 30 minutes before the test starts.',
                  'Use of electronic devices is strictly prohibited during the test.',
                  'Results will be announced within 7 days of the test.',
                  'Scholarship is valid for one academic year and may be renewed based on performance.',
                  'The decision of LASECT management regarding results is final.',
                ].map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{note}</span>
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
            Apply now for the LASECT Scholarship Test and take the first step towards a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+923087890019"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 transition-all hover:bg-white/20"
            >
              Call: +92 308 7890019
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;
