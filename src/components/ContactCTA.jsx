import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactCTA = ({ title, description, buttonText, formFields }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneno: "",
    email: "",
    programme: "",
  });

  const API_KEY_OFM = import.meta.env.VITE_API_KEY_OFM;
  const BASE_URL_OFM = import.meta.env.VITE_BASE_URL_OFM;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL_OFM}/inquiry`, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY_OFM,
        },
      });
      // console.log("Response:", response.data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      // console.error("Error submitting form:", error);
      toast.error("Failed to submit form")
    } finally {
      setFormData({
        fullname: "",
        phoneno: "",
        email: "",
        programme: "",
      });
    }
  };

  return (
    <section className="bg-gray-50 text-gray-600 py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="mb-6 max-w-2xl mx-auto">{description}</p>

      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            name={field.name}
            required
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
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
