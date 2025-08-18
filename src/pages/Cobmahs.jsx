import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Westland_University } from "../assets";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";

const Cobmahs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  
  const departments = [
    {
      name: " NURSING SCIENCE",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry, and Biology at not more than two sittings.",
      jambReq:
        "JAMB (UTME):English Language, Physics, Chemistry, and Biology. ",
    },
    {
      name: " MEDICAL LAB. SCIENCE",
      weacReq:
        "Five (5) SSC credit passes in English Language, Mathematics, Biology, Chemistry, and Physics.",
      jambReq: "English Language, Biology, Chemistry, and Physics. ",
    },
    {
      name: "PUBLIC HEALTH",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics.",
      jambReq: " English Language, Physics, Chemistry, and Biology.",
    },
  ];

  return (
    <div>
      <Hero
        backgroundImage={Westland_University}
        headline={`College of Basic Medical Sciences (COBMAHS) `}
        subtext="Westland University,   Iwo, Osun state"
        primaryBtnText="Apply Now"
        // secondaryBtnText="Explore Courses"
        primaryLink="https://westland.edu.ng/contact-us/"
        secondaryLink="#college-carousel"
      />

      <Courses college="" departments={departments} />

      <Link
        to="/contact"
        className="px-10 py-3 rounded-md bg-blue-600 text-white flex justify-center w-80 mx-auto hover:bg-blue-500 transition-all ease-in-out hover:scale-105 mb-4"
      >
        Apply For Your Course
      </Link>
    </div>
  );
};

export default Cobmahs;
