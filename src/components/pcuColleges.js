import {
  Applied_Science,
  Management_Science,
  Medical_Science,
} from "../assets";

export const pcuColleges = [
  {
    name: "Faculty of Pure and Applied Sciences.",
    slug: "pcu/passa",
    programsCount: 2,
    popularCourses: ["Nursing Science"],
    image: Applied_Science,
    fact: "Over 1,500 graduates shaping the tech world.",
    fees: [
      {
        label: "100L 1st semester",
        items: [{ name: "Tuition + Registration", amount: "₦450k" }],
      },
      { label: "Subsequently with hostel", amount: "₦375" },
      { label: "Without hostel", amount: "₦325" },
    ],
  },
  {
    name: "Faculty of Social and Management Sciences",
    slug: "pcu/fama",

    programsCount: 12,
    popularCourses: ["Accounting", "Economics", "Mass Communication"],
    image: Management_Science,
    fact: "Partnered with 20+ global companies.",
    fees: [
      {
        label: "100L 1st semester ",
        items: [{ name: "Tuition + Registration", amount: "₦430k" }],
      },
      { label: "Subsequently with hostel", amount: "₦355" },
      { label: "Without hostel", amount: "₦305" },
    ],
  },
];
