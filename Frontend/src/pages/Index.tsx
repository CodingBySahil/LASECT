import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { WhyJoinSection } from "@/components/home/WhyJoinSection";
import { ClassTimings } from "@/components/home/ClassTimings";
import { ScholarshipHighlight } from "@/components/home/ScholarshipHighlight";
import { RegistrationProcess } from "@/components/home/RegistrationProcess";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CoursesPreview />
      <WhyJoinSection />
      <ClassTimings />
      <ScholarshipHighlight />
      <RegistrationProcess />
      <CTASection />
    </Layout>
  );
};

export default Index;
