import React from "react";

const ContactCTA = ({ title, description, buttonText, formFields }) => {
  return (
    <section className="bg-gray-50 text-gray-600 py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="mb-6">{description}</p>

      <form className="max-w-md mx-auto space-y-4">
        {formFields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default ContactCTA;
