import React from "react";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import WhyUs from "../components/WhyUs";
import FeaturedUniversities from "../components/FeaturedUniversities";
import LeadForm from "../components/LeadForm";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import { HomeHero2 } from "../assets";

const Home = () => {
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
      <LeadForm />
      <Testimonial />
      {/* <FinalCTA /> */}
    </div>
  );
};

export default Home;
