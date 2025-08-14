import {
  Applied_Science,
  Management_Science,
  Medical_Science,
  HomeHero2,
} from "../assets";

export const colleges = [
  {
    name: "College of Natural and Applied Sciences (CONAS)",
    slug: "conas",
    // description: "Science and technology programs designed for the future.",
    programsCount: 5,
    popularCourses: ["Computer Science", "Geology", "Biology"],
    image: Applied_Science,
    fact: "Over 1,500 graduates shaping the tech world.",
    fees: [
      {
        label: "100L 1st semester",
        items: [
          { name: "Tuition + Registration", amount: "₦450k" },

        ],
      },
      { label: "Subsequently with hostel", amount: "₦375" },
      { label: "Without hostel", amount: "₦325" },
    ],
  },
  {
    name: "College of Social and Management Sciences (COMAS)",
    slug: "comas",
    // description: "Business, economics, and leadership for tomorrow's leaders.",
    programsCount: 6,
    popularCourses: ["Accounting", "Economics", "Mass Communication"],
    image: Management_Science,
    fact: "Partnered with 20+ global companies.",
    fees: [
      {
        label: "100L 1st semester ",
        items: [
          { name: "Tuition + Registration", amount: "₦430k" },
          //   { name: "Medicals", amount: "₦50" },
          //   { name: "Portal", amount: "₦25" },
          //   { name: "Hostel", amount: "₦50" },
          //   { name: "Acceptance", amount: "₦50" },
          //   { name: "Matriculation", amount: "₦25" },
          //   { name: "TOTAL", amount: "₦430" },
        ],
      },
      { label: "Subsequently with hostel", amount: "₦355" },
      { label: "Without hostel", amount: "₦305" },
    ],
  },
  {
    name: "College of Basic Medical and Health Sciences (COBMAHS)",
    slug: "cobmahs",
    // description: "Medical and health sciences for a healthier future.",
    programsCount: 3,
    popularCourses: ["Nursing", "Public Health", "Medical Lab Science"],
    image: Medical_Science,
    fact: "Consistent 95% graduate employment rate.",
    fees: [
      { label: "Nursing (per session)", amount: "₦1,800,000" },
      { label: "Public Health (per session)", amount: "₦1,550,000" },
      { label: "MLS (per session)", amount: "₦1,410,000" },
    ],
  },
];
