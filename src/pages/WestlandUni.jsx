import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Westland_Reg, Westland_University } from "../assets";
import WhyWestland from "../components/WhyWestland";
import Accreditation from "../components/Accreditation";
import CollegeCarousel from "../components/CollegeCarousel";
import Testimonial from "../components/Testimonial";
import UniversityCTA from "../components/UniversityCTA";
import { LibraryGirl } from "../assets";
import {
  FiBook,
  FiHome,
  FiUsers,
  FiBriefcase,
  FiActivity,
  FiClock,
} from "react-icons/fi";
import { colleges } from "../components/collegesData";

import UniversityInfo from "../components/UniversityInfo";
import WhyChooseUni from "../components/WhyChooseUni";
const benefits = [
  {
    icon: <FiBook className="text-blue-600 text-2xl" />,
    text: "Affordable Tuition Fees designed to make your dream education a reality.",
  },
  {
    icon: <FiActivity className="text-blue-600 text-2xl" />,
    text: "State-of-the-art Facilities equipped with cutting-edge technology for hands-on learning.",
  },
  {
    icon: <FiHome className="text-blue-600 text-2xl" />,
    text: "Safe and Comfortable Accommodation fostering a vibrant, inclusive campus community.",
  },
  {
    icon: <FiUsers className="text-blue-600 text-2xl" />,
    text: "Experienced and Passionate Faculty committed to guiding you every step of the way.",
  },
  {
    icon: <FiBriefcase className="text-blue-600 text-2xl" />,
    text: "Robust Career Services & Internship Programs connecting you to top employers.",
  },
  {
    icon: <FiClock className="text-blue-600 text-2xl" />,
    text: "Flexible Learning Options tailored to fit your lifestyle and goals.",
  },
];

const requirements = [
  "A minimum JAMB score of 200 and above to qualify for a life-changing education.",
  "Credit passes in at least 5 O-Level subjects, including English Language and Mathematics.",
  "Successful performance in Post-UTME screening (where applicable).",
  "Complete submission of all required documents during your application process.",
];

const WestlandUni = () => {
  return (
    <div>
      <Hero
        backgroundImage={Westland_University}
        headline={`Westland University, Your Future Starts Here`}
        subtext="Join thousands of students who are transforming their passion into careers. Discover programs designed to empower and inspire."
        primaryBtnText="Apply Now"
        secondaryBtnText="Explore Courses"
        primaryLink="https://westland.edu.ng/contact-us/"
        secondaryLink="#college-carousel"
      />
      <UniversityInfo
        imageSrc="https://yourcdn.com/university-building.jpg"
        title="What Makes Our Westland Stand Out?"
        subtitle="Join a vibrant community of driven students and passionate educators, dedicated to shaping tomorrow's leaders."
        points={[
          "Top-ranked programs in multiple fields",
          "Personalized admission guidance",
          "Scholarship opportunities for outstanding students",
          "A supportive, career-focused learning environment",
        ]}
      />

      <WhyChooseUni
        title="Why You Should Choose Westland University"
        imageSrc={Westland_Reg}
        imageAlt="Student studying in library"
        benefits={benefits}
        requirements={requirements}
        ctaText="Ready to unlock your future? Join Westland University and start your journey to success today!"
        ctaLink="https://westland.edu.ng/contact-us/"
      />
      <div id="colleges-carousel">
        <CollegeCarousel
          title="Discover Our Colleges"
          backgroundImage={HomeHero2}
          data={colleges}
        />
      </div>

      <Testimonial />
      <UniversityCTA
        title="Apply to Westland University"
        description="Your best start for academic success"
        buttonText="Apply Now!"
        onSubmit={(formData) => {
          console.log("Form Data:", Object.fromEntries(formData));
        }}
      />
    </div>
  );
};

export default WestlandUni;
