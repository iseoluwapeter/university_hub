import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { aboutus } from "../assets";
import ProblemSolution from "../components/ProblemSolution";
import OurStory from "../components/OurStory";
import HowItWorks from "../components/HowItWorks";
import KeyResults from "../components/KeyResults";
import ContactCTA from "../components/ContactCTA";


const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero
        backgroundImage={aboutus}
        headline={`About Us`}
        subtext="We simplify your admission journey by connecting you to accredited universities with affordable tuition, clear requirements, and quick admission processes."
        primaryBtnText="Get Started"
        secondaryBtnText="Explore Courses"
      />

      <ProblemSolution />
      <OurStory />
      <HowItWorks />
      <KeyResults />
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

export default About;
