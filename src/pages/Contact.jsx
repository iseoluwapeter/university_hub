import React, { useEffect } from "react";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/Hero";
import { get_in_touch} from "../assets";
import QuickContactInfo from "../components/QuickContactInfo";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero
        backgroundImage={get_in_touch}
        headline={`Get In Touch`}
        subtext="Whether you have questions about our process, need university recommendations, or want to partner with us — we’d love to hear from you."
        primaryBtnText="Contact Us"
        secondaryBtnText="Explore Universities"
      />

      <ContactCTA
        title="Your Future Starts Here"
        description="Take the first step toward a brighter tomorrow with guidance tailored to you."
        buttonText="Get Started"
        formFields={[
          { type: "text", placeholder: "Full Name" },
          { type: "email", placeholder: "Email Address" },
          { type: "text", placeholder: "Program of Interest" },
        ]}
      />

      <QuickContactInfo />
    </div>
  );
};

export default Contact;
