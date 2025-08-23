import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UniversityCTA = ({
  title = "Ready to take the next step?",
  description = "Apply today and join a community dedicated to your success.",
  buttonText = "Apply Now",
}) => {
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

  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);

  const API_KEY_OFM = import.meta.env.VITE_API_KEY_OFM;
  const BASE_URL_OFM = import.meta.env.VITE_BASE_URL_OFM;
  const BASE_URL_BELRALD = import.meta.env.VITE_BASE_URL_BELRALD;
  const API_KEY_BELRALD = import.meta.env.VITE_API_KEY_BELRALD;

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await axios.get(`${BASE_URL_OFM}/faculties/wlu`, {
          headers: { "x-api-key": API_KEY_OFM },
        });
        setFaculties(res.data.faculties);
        // console.log("Fetched Data", res.data.faculties);
      } catch (error) {
        // console.log("Error", error);
      }
    };
    fetchFaculties();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //Fetch department based on selected faculty
  useEffect(() => {
    if (!formData.academicProgramme) return;
    // console.log("selected faculty", formData.academicProgramme);

    const fetchDepartments = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL_OFM}/departments/${formData.academicProgramme}`,
          {
            headers: { "x-api-key": API_KEY_OFM },
          }
        );
        setDepartments(res.data.departments);
        // console.log("Fetched Departments", res.data.departments);
      } catch (error) {
        // console.log("Error fetching departments", error);
      }
    };

    fetchDepartments();
  }, [formData.academicProgramme]);

  // handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      academicProgramme: Number(formData.academicProgramme),
      department: Number(formData.department),
    };
    // console.log("Payload to submit", payload);

    //filter out names from id for belrald endpoint
    const programmeName =
      faculties.find(
        (prog) => String(prog.id) === String(formData.academicProgramme)
      )?.name || "";

    const departmentName = departments[Number(formData.department) - 1]?.name;

    // console.log(departmentName)

    // console.log("programme name", programmeName);
    // console.log("Faculties array:", faculties);
    // console.log("Searching for:", formData.academicProgramme);

    const Belrald_payload = {
      pages: [
        {
          title: "Bio-Data Details",
          fields: [
            {
              title: "Personal Information",
              fields: [
                {
                  surname: formData.surname,
                },
                {
                  firstName: formData.firstName,
                },
                {
                  middleName: formData.middleName,
                },
                {
                  emailAddress: formData.emailAddress,
                },
                {
                  phoneNumber: formData.phoneNumber,
                },
                {
                  gender: formData.gender,
                },
              ],
            },
          ],
        },
        {
          title: "Programme Details",
          fields: [
            {
              academicProgramme: programmeName,
            },
            {
              department: departmentName,
            },
          ],
        },
      ],
    };

    // console.log("Belrald_payload", Belrald_payload);

    //ofm submission
    try {
      // console.log("Submitting OFM payload:", payload);
      const ofm_res = await axios.post(`${BASE_URL_OFM}/applicant`, payload, {
        headers: { "x-api-key": API_KEY_OFM },
      });
      // console.log("Ofm Response", ofm_res.data);
      // console.log("ofm Posted info", payload);
      toast.success("Application submitted succesfully");
    } catch (error) {
      // console.log("OFM submission error:", error);
      // toast.error("Failed to submit to OFM");
    }

    //Belrald submission
    try {
      // console.log("Submitting Belrald payload:", Belrald_payload);
      const bel_res = await axios.post(`${BASE_URL_BELRALD}`, Belrald_payload, {
        headers: { "x-api-key": API_KEY_BELRALD },
      });
      // toast.success("belrald submitted");
      // console.log("Belrald response", bel_res.data);
      // console.log("Belrald posted info", Belrald_payload);
    } catch (error) {
      // console.log("Error submitting form:", error);
      // toast.error("Failed to submit application");
    }
    setFormData({
      surname: "",
      firstName: "",
      middleName: "",
      emailAddress: "",
      phoneNumber: "",
      gender: "",
      academicProgramme: "",
      department: "",
    });
  };

  return (
    <div className="bg-blue-50 p-10">
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-600 text-center">
          {title}
        </h2>
        <p className="mb-6 text-center text-gray-700">{description}</p>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Surname"
            className="w-full p-2 border border-gray-400 rounded"
            required
          />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-400 rounded"
            required
          />
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
            className="w-full p-2 border border-gray-400 rounded"
          />
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-2 border border-gray-400 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded"
            required
          />
          <select
            name="gender"
            className="w-full p-2 border border-gray-400 rounded"
            required
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* Faculty */}
          <select
            name="academicProgramme"
            className="w-full p-2 border border-gray-400 rounded"
            required
            value={formData.academicProgramme}
            onChange={handleChange}
          >
            <option value="">--- Select Faculty ---</option>
            {faculties.map((f) => (
              <option value={f.id} key={f.id}>
                {f.name}
              </option>
            ))}
          </select>

          {/* Department */}
          <select
            name="department"
            className="w-full p-2 border border-gray-400 rounded mt-2"
            required
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">--- Select Department ---</option>
            {departments.map((d, index) => (
              <option value={index + 1} key={index}>
                {d.name}
              </option>
            ))}
          </select>

          {/* Submit Button - Full Width Row & Centered */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UniversityCTA;
