import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Precious_conerstone } from "../assets";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PcuPassa = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const departments = [
    {
      name: " Biochemistry",
      weacReq:
        " Five (5) SSCE credit passes in English Language, Mathematics, Physics, Chemistry, and Biology. Graduates of recognised related programmes may be considered for a direct entry. Applicant needs Two ‘A’ Level passes in Mathematics and Physics and/or Chemistry.",
      jambReq:
        "Minimum score of 140, with subjects English, Chemistry, Mathematics and any of Physics Geography, Agricultural Science or Biology.",
    },
    {
      name: "Computer Science",
      weacReq:
        " Five Credit passes in English, Physics and Mathematics and any other two subjects from Further Mathematics, Chemistry, Biology, Agricultural Science. Graduates of recognised related programmes may be considered for a direct entry. Applicant needs Two ‘A’ Level passes Chemistry and any one of Physics, Mathematics or Biology.",
      jambReq:
        "Minimum score of 160, with subjects English, Mathematics, Physics, and any one of Chemistry, Biology, Geography and Economics.",
    },
    {
      name: " Industrial Chemistry",
      weacReq:
        "Five Credit passes in English, Chemistry, Physics, Mathematics and Biology. Graduates of recognised related programmes may be considered for a direct entry. Applicant need Two ‘A’ Level passes in Chemistry and any one of Physics, Mathematics or Biology",
      jambReq:
        "Minimum score of 160, with subjects English, Chemistry, Mathematics and any of Physics Geography, Agricultural Science or Biology.",
    },
    {
      name: "Industrial Mathematics",
      weacReq:
        "Five Credit passes in English, Physics and Mathematics and any other two subjects from Further Mathematics, Chemistry, Biology, Agricultural Science. Graduates of recognised related programmes may be considered for a direct entry. Applicant needs Two ‘A’ Level passes including Mathematics and Physics and/or Chemistry.",
      jambReq:
        "Minimum score of 160, with subjects English, Mathematics and Physics, and any one of Chemistry, Biology, Geography and Economics.",
    },
    {
      name: "Microbiology",
      weacReq:
        "Five Credit passes in English, Biology, Chemistry, Mathematics and any other science subject. Graduates of recognised related programmes may be considered for a direct entry. Applicant Two ‘A’ Level passes Biology, Botany, Zoology and Chemistry or Physics.",
      jambReq:
        "Minimum score of 160, with subjects English, Biology, Chemistry and any other science subject. ",
    },
    {
      name: "Physics with Electronics",
      weacReq:
        "Five Credit passes in English, Physics and Mathematics and any other two subjects from Further Mathematics, Chemistry, Biology, Agricultural Science. Graduates of recognised related programmes may be considered for a direct entry. Applicant needs Two ‘A’ Level passes in Mathematics and Physics and/or Chemistry.",
      jambReq:
        "Minimum score of 160, with subjects English, Mathematics, Physics, and any one of Chemistry, Biology, Geography and Economics.",
    },
  ];

  return (
    <div>
      <Hero
        backgroundImage={Precious_conerstone}
        headline={`Faculty of Pure and Applied Sciences `}
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

export default PcuPassa;
