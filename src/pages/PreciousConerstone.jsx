import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, PCU_image } from "../assets";
import UniversityInfo from "../components/UniversityInfo";
import WhyChooseUni from "../components/WhyChooseUni";
import { LibraryGirl } from "../assets";
import {
  FiBook,
  FiHome,
  FiUsers,
  FiBriefcase,
  FiActivity,
  FiClock,
} from "react-icons/fi";
import { useEffect } from "react";
import ContactCTA from "../components/ContactCTA";

import CollegeCarousel from "../components/CollegeCarousel";
// import { faculties } from "../components/pcuCollges";
import { pcuColleges } from "../components/pcucollege";
import { colleges } from "../components/collegesData";

const benefits = [
  {
    icon: <FiBook size={25} className="text-blue-600 text-2xl" />,
    text: "Comprehensive academic programs designed to prepare you for global opportunities.",
  },
  {
    icon: <FiActivity size={25} className="text-blue-600 text-2xl" />,
    text: "Innovative research facilities that foster creativity and practical problem-solving.",
  },
  {
    icon: <FiHome size={25} className="text-blue-600 text-2xl" />,
    text: "Modern campus infrastructure that blends comfort, safety, and accessibility.",
  },
  {
    icon: <FiUsers size={25} className="text-blue-600 text-2xl" />,
    text: "Dedicated mentorship from industry-experienced lecturers and advisors.",
  },
  {
    icon: <FiBriefcase size={25} className="text-blue-600 text-2xl" />,
    text: "Strong alumni network offering career connections and mentorship.",
  },
  {
    icon: <FiClock size={25} className="text-blue-600 text-2xl" />,
    text: "Year-round learning opportunities, including workshops and online courses.",
  },
];

const requirements = [
  "Minimum JAMB score of 180 for eligibility to apply.",
  "At least 5 O-Level credits, including English Language and Mathematics, in not more than two sittings.",
  "Completion of the online application form and payment of the application fee.",
  "Participation in the university’s entrance assessment or interview process.",
];

const PreciousConerstone = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero
        backgroundImage={PCU_image}
        headline={`Precious Cornerstone University — Where Ambitions Take Flight`}
        subtext="Step into a world of opportunity. Explore accredited programs, connect with expert faculty, and start building the future you’ve always dreamed of."
        primaryBtnText="Apply Now"
        // secondaryBtnText="Explore Courses"
        primaryLink="https://pcu.edu.ng/"
        secondaryLink="#college-carousel"
      />

      <UniversityInfo
        title="What Makes Precious Cornerstone Stand Out?"
        subtitle="Experience a campus where innovation meets excellence, and every student is empowered to reach their full potential."
        points={[
          "Industry-relevant courses designed for the future",
          "Expert faculty with real-world experience",
          "Vibrant campus life and student support services",
          "Strong alumni network opening doors worldwide",
        ]}
      />
      <WhyChooseUni
        title="Why You Should Choose Precious Conerstone University"
        imageSrc={LibraryGirl}
        imageAlt="Student studying in library"
        benefits={benefits}
        requirements={requirements}
        ctaText="Ready to unlock your future? Join Westland University and start your journey to success today!"
        ctaLink="https://westland.edu.ng/contact-us/"
      />

      <div id="colleges-carousel">
        <CollegeCarousel
          title="Discover Our Faculties"
          backgroundImage={HomeHero2}
          data={pcuColleges}
        />
      </div>

      <div id="apply-section">
        <ContactCTA
          title="Your Future Starts Here"
          description="Take the first step toward a brighter tomorrow with guidance tailored to you."
          buttonText="Get Started"
          formFields={[
            { type: "text", placeholder: "Full Name" },
            { type: "email", placeholder: "Email Address" },
            { type: "tel", placeholder: "Phone Number" },
            { type: "text", placeholder: "Program of Interest" },
          ]}
        />
      </div>
    </div>
  );
};

export default PreciousConerstone;
