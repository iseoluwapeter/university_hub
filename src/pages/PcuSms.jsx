import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Precious_conerstone } from "../assets";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PcuSms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const departments = [
    {
      name: " Economics",
      weacReq:
        "Five Credit passes in English Language, Mathematics,Economics, Commerce/Business Methods. Candidates with Two ‘A’ Level passes including Economics may apply for direct entry",
      jambReq: `Minimum score of 160 with subjects English, Economics, Maths, Commerce/Business Methods.`,
    },
    {
      name: "Accounting",
      weacReq:
        "Five (5) SSCE credit passes in English Language, Mathematics, Biology, Chemistry, and Physics.",
      jambReq: "English Language, Biology, Chemistry, and Physics. ",
    },
    {
      name: "Actuarial Science",
      weacReq:
        " Five Credit passes in English Language, Mathematics, Economics and two other relevant courses is mandatory.  ",
      jambReq:
        " Minimum score of 140, with subjects English, Economics, Maths, and any other subject. Candidates with Two ‘A’ Level passes including Economics may apply for direct entry",
    },
    {
      name: "Business Administration",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics. Graduates of related programs may apply for direct posting with Two 'A' Level passes including Economics",
      jambReq:
        "Minimum score oof 140 in JAMB including English Language, Economics, Maths and any other subject.",
    },
    {
      name: "Marketing",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics. Graduates of related programs may apply for direct posting with Two 'A' Level passes including Economics",
      jambReq:
        "Minimum score of 140, with subjects English, Economics, Maths, and any other subject. ",
    },
    {
      name: " Banking & Finance",
      weacReq:
        "Five Credit passes in English Language, Mathematics, Economics and two other relevant courses",
      jambReq:
        "Minimum score of 160, with subjects English, Economics, Maths, and any other subject.",
    },
  ];

  return (
    <div>
      <Hero
        backgroundImage={Precious_conerstone}
        headline={`Faculty of Social and Management Sciences `}
        subtext="Precious Conerstone University, Ibadan, Oyo state"
        // primaryBtnText="Apply Now"
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

export default PcuSms;
