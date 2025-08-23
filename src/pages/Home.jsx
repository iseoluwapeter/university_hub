import React from "react";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import WhyUs from "../components/WhyUs";
import FeaturedUniversities from "../components/FeaturedUniversities";
import Testimonial from "../components/Testimonial";
import { HomeHero2 } from "../assets";
import { useEffect } from "react";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero
        backgroundImage={HomeHero2}
        headline={`Find Your Dream University.<br />Simple, Affordable, Fast`}
        subtext="Discover universities offering affordable tuition, smooth admission processes, and the best opportunities for your future."
        primaryBtnText="Get Free Admission Guide"
        secondaryBtnText="Explore Universities"
        onPrimaryClick={() => alert("Primary clicked!")}
        onSecondaryClick={() => alert("Secondary clicked!")}
      />
      <FeatureCards />
      <WhyUs />
      <FeaturedUniversities />
      <ContactCTA
        title="🎓 Let’s Match You With Your Ideal University"
        description=" Share your goals, budget, and preferred course. Our team will
          recommend universities tailored just for you helping you make the
          right choice without the guesswork."
        buttonText="Get Started"
        formFields={[
          { type: "text", name: "fullname", placeholder: "Full Name" },
          { type: "email", name: "email", placeholder: "Email Address" },
          { type: "tel", name: "phoneno", placeholder: "Phone Number" },
          {
            type: "text",
            name: "programme",
            placeholder: "Program of Interest",
          },
        ]}
      />
      <Testimonial />
      {/* <FinalCTA /> */}
    </div>
  );
};

export default Home;
