import React from "react";
import Hero from "../components/Hero";
import { HomeHero2, Westland_University } from "../assets";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";

const Comas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const departments = [
    {
      name: "Accounting",
      weacReq:
        "Five (5) SSC credit passes to include English Language, Mathematics, Economics, and any two from Commerce, Financial Accounting, Government, or Geography.",
      jambReq:
        "JAMB (UTME): English Language, Mathematics, Economics, and one other Social Science subject (e.g., Commerce, Government, Principles of Accounts, Geography). ",
    },
    {
      name: "Business Adiministration",
      weacReq:
        "Five (5) SSC credit passes to include English Language, Mathematics, Economics, and two other subjects from Accounting, Business Methods, Commerce, Government, or Statistics.",
      jambReq:
        " English Language, Mathematics, Economics, and one other Social Science or Arts subject (e.g., Accounting, Commerce, Government. ",
    },
    {
      name: "Economics",
      weacReq:
        " Five (5) SSC credit passes to include English Language, Mathematics, Economics, and any two from Government, History, Geography, Literature-in-English, French, or Christian Religious Studies/Islamic Studies.",
      jambReq:
        " AMB (UTME): English Language, Economics, Mathematics, and one of Government, History, Geography, Literature-in-English, French, or Christian Religious Studies/Islamic Studies. ",
    },
    {
      name: "Political Science",
      weacReq:
        "WAEC (O'Level): Five (5) SSC credit passes to include English Language, Government or History, and three other Arts or Social Science subjects, with at least a pass in Mathematics.",
      jambReq:
        " English Language, Government or History, and two other subjects from Arts or Social Sciences (e.g., Economics, Literature in English, CRS/IRS, Geography). ",
    },
    {
      name: "MASS COMMUNICATION",
      weacReq:
        " Five (5) SSC credit passes to include English Language, Mathematics, Literature in English, and any two other Arts or Social Science subjects (e.g., Government, Economics, History, CRS/IRS, Civic Education).",
      jambReq:
        "English Language, Literature in English, and two other Arts or Social Science subjects (e.g., Government, Economics, History, a Nigerian Language). ",
    },
    {
      name: " INTERNATIONAL RELATIONS",
      weacReq:
        "Five (5) SSC credit passes to include English Language, Mathematics, Government or History, Literature in English, and one other relevant subject (e.g., Economics, CRS/IRS, Civic Education).",
      jambReq:
        "English Language, Economics, Literature in English, and Government or History.",
    },
  ];

  return (
    <div>
      <Hero
        backgroundImage={Westland_University}
        headline={`College of Social and Management Sciences (COMAS)`}
        subtext="Westland University, Iwo, Osun state"
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

export default Comas;
