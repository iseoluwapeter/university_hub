import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UniversityCTA = ({
  title = "Ready to take the next step?",
  description = "Apply today and join a community dedicated to your success.",
  buttonText = "Apply Now",
}) => {
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    middleName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    academicProgramme: "",
    department: "",
  });

  // API KEYS
  const API_KEY_OFM = import.meta.env.VITE_API_KEY_OFM;
  const API_KEY_BELRALD = import.meta.env.VITE_API_KEY_BELRALD;

  //API BASE URL
  const BASE_URL_OFM = import.meta.env.VITE_BASE_URL_OFM;
  const BASE_URL_BELRALD = import.meta.env.VITE_BASE_URL_BELRALD;

  //FETCH FACULTIES
  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL_OFM}/faculties/wlu`, {
          headers: { "x-api-key": API_KEY_OFM, Accept: "application/json" },
        });

        setFaculties(data);

        if (data.length > 0) {
          const firstFacultyId = data[0].id;
          setFormData((prev) => ({
            ...prev,
            academicProgramme: firstFacultyId,
          }));
          await fetchDepartments(firstFacultyId);
        }
      } catch (error) {
        console.log("error fetching faculties", error);
        toast.error("Error laoding faculties");
      }
    };

    fetchFaculties();
  }, []);

  // FETCH DEPARTMENTS BASED ON FACULTY
  const fetchDepartments = async (facultyId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL_OFM}/departments/${facultyId}`,
        {
          headers: { "x-api-key": API_KEY_OFM, Accept: "application/json" },
        }
      );
      setDepartments(data);

      if (data.length > 0) {
        setFormData((prev) => ({
          ...prev,
          department: data[0].id,
        }));
      }
    } catch (error) {
      console.log("error fetching departments:", error);
      toast.error("Error loading departments");
    }
  };

  //HANDLE FORM INPUT CHANGE
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //HANDLE FACULTY CHANGE
  const handleFacultyChange = async (e) => {
    const facultyId = e.target.value;
    setFormData({
      ...formData,
      academicProgramme: facultyId,
      department: "",
    });
    await fetchDepartments(facultyId);
  };

  //HANDLE DEPARTMENT CHANGE
  const handleDeptChange = (e) => {
    setFormData({
      ...formData,
      department: e.target.value,
    });
  };

  // SUBMIT FORM TO BOTH ENDPOINTS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Send to OFM
      await axios.post(`${BASE_URL_OFM}/applicant`, formData, {
        headers: {
          "x-api-key": API_KEY_OFM,
          "Content-Type": "application/json",
        },
      });

      // 2. Send to BELRALD
      const belraldPayload = {
        pages: [
          {
            title: "Bio-Data Details",
            fields: [
              {
                title: "Personal Information",
                fields: [
                  { surname: formData.surname },
                  { firstName: formData.firstName },
                  { middleName: formData.middleName },
                  { emailAddress: formData.emailAddress },
                  { phoneNumber: formData.phoneNumber },
                  { gender: formData.gender },
                ],
              },
            ],
          },
          {
            title: "Programme Details",
            fields: [
              {
                academicProgramme: faculties.find(
                  (f) => f.id === Number(formData.academicProgramme)
                )?.name,
              },
              {
                department: departments.find(
                  (d) => d.id === Number(formData.department)
                )?.name,
              },
            ],
          },
        ],
      };

      await axios.post(
        `${BASE_URL_BELRALD}/form/create-external/68a35885e8a2c63f5fad76cf`,
        belraldPayload,
        {
          headers: {
            "x-api-key": API_KEY_BELRALD,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Form submitted successfully!");
      toast.success("Form submmitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again.");
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <section className="bg-gray-50 text-gray-600 py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="mb-6">{description}</p>

      <form
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
        />
        <input
          type="email"
          name="emailAddress"
          placeholder="Email"
          value={formData.emailAddress}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        />

        {/* gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Faculty */}
        <select
          name="academicProgramme"
          value={formData.academicProgramme}
          onChange={handleFacultyChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        >
          <option value="">--- Select Faculty ---</option>
          {faculties.map((faculty) => (
            <option key={faculty.id} value={faculty.id}>
              {faculty.name}
            </option>
          ))}
        </select>

        {/* Department */}
        <select
          name="department"
          value={formData.department}
          onChange={handleDeptChange}
          className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
          required
        >
          <option value="">--- Select Department ---</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>

        {/* Button — span full width, center on its row */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="px-8 bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UniversityCTA;
