import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScholarshipAlert } from '../ui/ScholarshipAlert';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScholarshipAlert />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
