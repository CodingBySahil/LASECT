import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionTitle } from '../ui/SectionTitle';
import { BookOpen, Users, Award } from 'lucide-react';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Welcome to LASECT"
          subtitle="A leading institution dedicated to transforming students through quality education in English and Computer Technology."
        />

        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {[
            {
              icon: BookOpen,
              title: 'Quality Education',
              description: 'Our curriculum is designed by experts to ensure students receive the best learning experience.',
              delay: 'delay-1',
            },
            {
              icon: Users,
              title: 'Expert Faculty',
              description: 'Learn from experienced professionals who are passionate about teaching and mentoring.',
              delay: 'delay-2',
            },
            {
              icon: Award,
              title: 'Recognized Certificates',
              description: 'Receive certificates that are valued by employers and institutions alike.',
              delay: 'delay-3',
            },
          ].map(({ icon: Icon, title, description, delay }) => (
            <div
              key={title}
              className={`academy-card text-center animate-on-scroll ${delay} ${isVisible ? 'visible' : ''}`}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Learn more about us
            <span className="transition-transform hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
