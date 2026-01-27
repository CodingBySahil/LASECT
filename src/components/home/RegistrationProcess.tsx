import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionTitle } from '../ui/SectionTitle';
import { ClipboardList, FileText, CheckCircle, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Fill Application',
    description: 'Complete the online registration form with your details.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Submit Documents',
    description: 'Provide required documents for verification.',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Confirmation',
    description: 'Receive confirmation and class schedule.',
  },
  {
    icon: PartyPopper,
    step: '04',
    title: 'Start Learning',
    description: 'Begin your journey at LASECT!',
  },
];

export function RegistrationProcess() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Registration Process"
          subtitle="Simple steps to join LASECT and start your learning journey."
        />

        <div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative animate-on-scroll delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                
                <div className="relative academy-card text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mt-4 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
