import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="fade-in-up mb-8">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 float">
              <GraduationCap className="w-14 h-14 text-white" />
            </div>
            <p className="text-white/80 text-lg italic font-heading">
              (LASECT is a fact where education shows its effect.)
            </p>
          </div>

          {/* Main Content */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Empowering Students with English & Computer Skills
          </h1>

          <p 
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            The London Academy of Spoken English and Computer Technology provides professional 
            education in English language and computer courses to help students build confidence, 
            skills, and a successful future.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Link to="/register" className="btn-hero-primary group">
              Sign Up Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/scholarship" className="btn-hero-secondary">
              Apply for Scholarship Test
            </Link>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-6 mt-16 fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            {[
              { value: '500+', label: 'Students Trained' },
              { value: '3+', label: 'Professional Courses' },
              { value: '100%', label: 'Practical Learning' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
