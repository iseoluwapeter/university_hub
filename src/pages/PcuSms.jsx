import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Precious_conerstone } from "../assets";
import Courses from "../components/Courses";

const PcuSms = () => {
  const departments = [
    {
      name: " Economics",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry, and Biology at not more than two sittings.",
      jambReq:
        "JAMB (UTME):English Language, Physics, Chemistry, and Biology. ",
    },
    {
      name: "Accounting",
      weacReq:
        "Five (5) SSC credit passes in English Language, Mathematics, Biology, Chemistry, and Physics.",
      jambReq: "English Language, Biology, Chemistry, and Physics. ",
    },
    {
      name: "Actuarial Science",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics.",
      jambReq: " English Language, Physics, Chemistry, and Biology.",
    },
    {
      name: "Business Administration",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics.",
      jambReq: " English Language, Physics, Chemistry, and Biology.",
    },
    {
      name: "Marketing",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics.",
      jambReq: " English Language, Physics, Chemistry, and Biology.",
    },
    {
      name: " Banking & Finance",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics.",
      jambReq: " English Language, Physics, Chemistry, and Biology.",
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
    </div>
  );
};

export default PcuSms;
