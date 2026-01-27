import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Trophy, Gift, Sparkles, ArrowRight } from 'lucide-react';

export function ScholarshipHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-academy-blue-light p-8 md:p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Limited Time Opportunity
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Scholarship Test 2025
              </h2>
              
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Give your best in the test and unlock amazing rewards including full scholarships, 
                cash prizes, and exclusive opportunities to excel in your education journey.
              </p>

              <Link
                to="/scholarship"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Apply for Scholarship Test
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Trophy, label: '1st Position', value: 'Full Scholarship + ₨5,000' },
                { icon: Trophy, label: '2nd Position', value: '50% Fee + ₨3,000' },
                { icon: Gift, label: '3rd Position', value: '30% Fee + ₨2,000' },
                { icon: Gift, label: 'All Participants', value: 'Certificate + Gift' },
              ].map((reward, index) => {
                const Icon = reward.icon;
                return (
                  <div
                    key={reward.label}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-500 hover:bg-white/20 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <Icon className="w-8 h-8 text-yellow-300 mb-2" />
                    <p className="text-white/80 text-sm">{reward.label}</p>
                    <p className="text-white font-semibold text-sm">{reward.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
