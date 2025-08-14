import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { aboutus, HomeHero2 } from "../assets";
import ProblemSolution from "../components/ProblemSolution";
import OurStory from "../components/OurStory";
import HowItWorks from "../components/HowItWorks";
import KeyResults from "../components/KeyResults";
import UniversityCTA from "../components/UniversityCTA";

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
      <UniversityCTA
        id="university-cta"
        title="Unlock Your Academic Future"
        description="Connect with top universities and start your journey toward success today."
        buttonText="Apply Now!"
        onSubmit={(formData) => {
          console.log("Form Data:", Object.fromEntries(formData));
        }}
      />
    </div>
  );
};

export default About;
