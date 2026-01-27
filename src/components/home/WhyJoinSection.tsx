import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, Sparkles } from 'lucide-react';

export function WhyJoinSection() {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    'Practical, results-driven training',
    'Real, measurable improvement',
    'Learning by doing approach',
    'Continuous practice & guidance',
    'Apply learning immediately',
    'Change is a process you can feel',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Featured
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-8">
            Why Should Students Join LASECT?
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At <strong className="text-foreground">LASECT</strong>, education is not just taught — it is{' '}
              <em className="text-primary font-medium">experienced</em>.
            </p>
            <p>
              We are a practical, results-driven academy where students don't just attend classes;{' '}
              <strong className="text-foreground">they transform</strong>.
            </p>
            <p>
              Our training model is designed to ensure that every student sees{' '}
              <strong className="text-foreground">real, measurable improvement</strong> in a short period of time — 
              in skills, confidence, communication, and mindset.
            </p>
            <p>
              We focus on <strong className="text-foreground">learning by doing</strong>, continuous practice, 
              and personalized guidance so students can apply what they learn immediately in real-life 
              and professional situations.
            </p>
            <p className="text-xl font-heading text-primary italic text-center pt-4">
              "At LASECT, change is not a promise — it's a process you can feel."
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {highlights.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 p-4 bg-secondary/50 rounded-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
