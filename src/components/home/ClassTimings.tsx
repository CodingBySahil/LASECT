import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionTitle } from '../ui/SectionTitle';
import { Clock, Sun, Sunset } from 'lucide-react';

const timings = [
  {
    icon: Sun,
    shift: 'Morning Batch',
    time: '9:00 AM - 12:00 PM',
    description: 'Ideal for school students',
  },
  {
    icon: Clock,
    shift: 'Afternoon Batch',
    time: '2:00 PM - 5:00 PM',
    description: 'Perfect for college students',
  },
  {
    icon: Sunset,
    shift: 'Evening Batch',
    time: '5:00 PM - 8:00 PM',
    description: 'For working professionals',
  },
];

export function ClassTimings() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Class Timings"
          subtitle="Flexible schedules designed to fit your lifestyle and commitments."
        />

        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {timings.map((timing, index) => {
            const Icon = timing.icon;
            return (
              <div
                key={timing.shift}
                className={`academy-card text-center animate-on-scroll delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{timing.shift}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{timing.time}</p>
                <p className="text-muted-foreground text-sm">{timing.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
