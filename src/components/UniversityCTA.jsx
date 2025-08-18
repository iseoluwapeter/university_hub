import React from "react";

const UniversityCTA = ({
  title = "Ready to take the next step?",
  description = "Apply today and join a community dedicated to your success.",
  buttonText = "Apply Now",
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(new FormData(e.target));
  };

  return (
    <section className="bg-gray-50 text-gray-600 py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="mb-6">{description}</p>

      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder="Your Number"
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />
        <input
          type="text"
          name="program"
          placeholder="Program of Interest"
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default UniversityCTA;
