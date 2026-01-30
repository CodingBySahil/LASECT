import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function ScholarshipAlert() {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdshEcdCvQGQVRqzUC-aqLd-oF85mbZ2py1Pl0xik6tBUunJA/viewform?usp=publish-editor"
      target="_blank"
      className="fixed top-24 right-4 z-40 scholarship-alert group"
      aria-label="Apply for Scholarship"
    >
      <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
      <span className="text-sm">Scholarships Apply Now</span>
    </a>
  );
}
