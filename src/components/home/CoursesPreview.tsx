// import { Link } from 'react-router-dom';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { SectionTitle } from '../ui/SectionTitle';
// import { Monitor, Globe, Clock, ArrowRight } from 'lucide-react';

// const courses = [
//   {
//     icon: Monitor,
//     title: 'Diploma in Information Technology (DIT)',
//     duration: '1 Year',
//     eligibility: 'All students',
//     mode: 'On-campus',
//     description: 'Comprehensive IT training covering hardware, software, and professional skills.',
//   },
//   {
//     icon: Monitor,
//     title: 'Certificate in Information Technology (CIT)',
//     duration: '3 Months',
//     eligibility: 'All students',
//     mode: 'On-campus',
//     description: 'Quick certification program for essential computer skills.',
//   },
//   {
//     icon: Globe,
//     title: 'Spoken English Language Program',
//     duration: '2 Years',
//     eligibility: 'All students',
//     mode: 'On-campus',
//     description: 'Master English communication with confidence and fluency.',
//   },
// ];

// export function CoursesPreview() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <SectionTitle
//           title="Our Courses"
//           subtitle="Professional programs designed to equip you with in-demand skills for today's competitive world."
//         />

//         <div
//           ref={ref}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {courses.map((course, index) => {
//             const Icon = course.icon;
//             return (
//               <div
//                 key={course.title}
//                 className={`academy-card group animate-on-scroll delay-${index + 1} ${isVisible ? 'visible' : ''}`}
//               >
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
//                   <Icon className="w-7 h-7 text-primary" />
//                 </div>

//                 <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
//                   {course.title}
//                 </h3>

//                 <p className="text-muted-foreground mb-4">{course.description}</p>

//                 <div className="space-y-2 mb-6">
//                   <div className="flex items-center gap-2 text-sm">
//                     <Clock className="w-4 h-4 text-primary" />
//                     <span className="text-muted-foreground">Duration:</span>
//                     <span className="font-medium">{course.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm">
//                     <span className="text-muted-foreground">Mode:</span>
//                     <span className="font-medium">{course.mode}</span>
//                   </div>
//                 </div>

//                 <Link
//                   to="/register"
//                   className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
//                 >
//                   Register Now
//                   <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
//                 </Link>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/courses"
//             className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95"
//           >
//             View All Courses
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "../ui/SectionTitle";
import { Monitor, Globe, Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Diploma in Information Technology (DIT)",
    duration: "1 Year",
    eligibility: "All students",
    mode: "On-campus",
    description:
      "Comprehensive IT training covering hardware, software, and professional skills.",
  },
  {
    icon: Monitor,
    title: "Certificate in Information Technology (CIT)",
    duration: "3 Months",
    eligibility: "All students",
    mode: "On-campus",
    description: "Quick certification program for essential computer skills.",
  },
  {
    icon: Globe,
    title: "Spoken English Language Program",
    duration: "2 Years",
    eligibility: "All students",
    mode: "On-campus",
    description: "Master English communication with confidence and fluency.",
  },
];

export function CoursesPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Courses"
          subtitle="Professional programs designed to equip you with in-demand skills for today's competitive world."
          light
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className={`group bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg transition-transform transform hover:scale-105 animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              >
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-white/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:hover:font-extrabold transition-all duration-300">
                  {course.title}
                </h3>

                <p className="text-white/80 mb-4 flex-1">
                  {course.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Clock className="w-4 h-4 text-white" />
                    <span>Duration:</span>
                    <span className="font-medium text-white">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span>Mode:</span>
                    <span className="font-medium text-white">
                      {course.mode}
                    </span>
                  </div>
                </div>

                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group/link hover:font-extrabold transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
