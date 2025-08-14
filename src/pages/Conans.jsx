import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Westland_University } from "../assets";
import Courses from "../components/Courses";
import { useRef } from "react";

const Conans = () => {
  const departments = [
    {
      name: "Computer Science",
      weacReq:
        "Five (5) SSC credit passes to include English Language, Mathematics, Physics, and two other science subjects (e.g., Chemistry, Biology, Further Mathematics, Agricultural Science).",
      jambReq:
        "English Language, Mathematics, Physics, and one of Chemistry, Biology, Agricultural Science, Economics, or Geography. ",
    },
    {
      name: "Geology",
      weacReq:
        "Five (5) SSC credit passes to include English Language, Mathematics, Physics, Chemistry, and either Biology or Geography.",
      jambReq: "English Language, Chemistry, Physics, and Mathematics. ",
    },
    {
      name: "Software Engineering",
      weacReq:
        " Five (5) SSC credit passes in English Language, Mathematics, and three (3) other science subjects (e.g., Physics, Chemistry, Biology, Further Mathematics, Computer Studies).",
      jambReq:
        " English Language, Mathematics, Physics, and one of Chemistry, Biology, Agricultural Science, Economics, or Geography. (Often similar to Computer Science, with strong emphasis on Mathematics and Physics). ",
    },
    {
      name: "Biology",
      weacReq:
        " Five (5) SSC credit passes to include English Language, Mathematics, Biology, Chemistry, and Physics or any other science subject (e.g., Agricultural Science, Geography).",
      jambReq:
        "  English Language, Biology, Chemistry, and Physics or Mathematics. ",
    },
    {
      name: "Chemistry",
      weacReq:
        " Five (5) SSC credit passes to include English Language, Mathematics, Chemistry, Physics, and Biology/Agricultural Science.",
      jambReq:
        "English Language, Chemistry, and two of Physics, Biology, and Mathematics. ",
    },
  ];

  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero
        backgroundImage={Westland_University}
        headline="College of Natural and Applied Sciences"
        subtext="Westland University, Iwo, Osun State"
        primaryBtnText="Apply Now"
        primaryLink="https://westland.edu.ng/contact-us/"
      />

      <div ref={coursesRef}>
        <Courses
          college="College of Natural And Applied Sciences (CONANS)"
          departments={departments}
        />
      </div>
    </>
  );
};

export default Conans;
