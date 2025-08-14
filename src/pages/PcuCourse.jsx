import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import { HomeHero2 } from "../assets";
import { pcuDpartments } from "../components/departmentData";



export default function PcuCourse() {
  const { pcuSlug } = useParams();

  const faculty = pcuDpartments[pcuSlug]

  if (!faculty) {
    return <h2 className="text-center mt-10">Faculty not found</h2>;
  }

  return (
    <div>
      {/* Hero */}
      <Hero
        backgroundImage={HomeHero2}
        headline="Find Your Dream University.<br />Simple, Affordable, Fast"
        subtext="Discover universities offering affordable tuition, smooth admission processes, and the best opportunities for your future."
        primaryBtnText="Get Free Admission Guide"
        secondaryBtnText="Explore Universities"
      />

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          {faculty.name} - Courses
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {faculty.courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                {course.name}
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">WAEC:</span>{" "}
                  {course.requirements?.WAEC || "Not specified"}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">JAMB:</span>{" "}
                  {course.requirements?.JAMB || "Not specified"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
