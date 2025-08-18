import React from "react";

const Courses = ({ college, departments }) => {
  return (
    <div className="px-10 md:px-20 mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        {college} Available Courses
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {dept.name}
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">WAEC:</span>{" "}
                {dept.weacReq}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">JAMB:</span>{" "}
                {dept.jambReq}
              </p>

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
