import React from "react";
import Courses from "../components/Courses";

export default function CoursesPage() {
  const departments = [
    {
      name: "Computer Science",
      weacReq: "5 credits including Maths, English, Physics, Chemistry",
      jambReq: "180 and above in relevant subjects",
    },
    {
      name: "Geology",
      weacReq: "5 credits including Maths, English, Physics, Chemistry",
      jambReq: "170 and above in relevant subjects",
    },
    {
      name: "Biology",
      weacReq: "5 credits including Maths, English, Biology, Chemistry",
      jambReq: "160 and above in relevant subjects",
    },
  ];

  return <Courses college="CONAS" departments={departments} />;
}
