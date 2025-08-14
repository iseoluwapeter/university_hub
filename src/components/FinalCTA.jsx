import React from "react";

const FinalCTA = () => {
  return (
    <section className="text-center py-12 px-6 bg-white">
      <div className="max-w-md mx-auto flex flex-col sm:flex-row justify-center gap-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition"
          type="button"
        >
          Find My University
        </button>
        <button
          className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-blue-50 transition"
          type="button"
        >
          Get Admission Help
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
