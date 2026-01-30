import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function ScholarshipAlert() {
  return (
    <Link
      to="/scholarship"
      className="fixed top-24 right-4 z-40 scholarship-alert group"
      aria-label="Apply for Scholarship"
    >
      <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
      <span className="text-sm">Scholarships Apply Now</span>
    </Link>
  );
}
