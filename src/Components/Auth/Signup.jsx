import React, { useState } from "react";
import axiosInstance from "../../api/axios";

function Signup() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    assembly: "",
    constituency: "",
    district: "",
    panchayath: "",
    municipality: "",
    corporation: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/Postsignup", formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    console.log(formData);
  };

  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl font-bold mb-5">Signup</h1>
        <div className="flex justify-center   items-center ">
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-1/2 bg-gray-50 shadow-md rounded   pt-6 pb-8 mb-4"
          >
            <div className="mb-4 sm:flex justify-center gap-10">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none px-3 border text-sm rounded-xl w-full sm:w-72 py-3 text-center  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                {/* Email */}
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                {/* Password */}
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                {/* Phone Number */}
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                {/* Date of Birth */}
                <label
                  htmlFor="dateOfBirth"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label
                  htmlFor="assembly"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Assembly:
                </label>
                <select
                  id="assembly"
                  name="assembly"
                  value={formData.assembly}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""> Assembly</option>
                  <option value="Assembly 1">Assembly 1</option>
                  <option value="Assembly 2">Assembly 2</option>
                  <option value="Assembly 3">Assembly 3</option>
                </select>
              </div>

              {/* Assembly */}
              <div>
                {/* Constituency */}
                {/* Constituency */}
                <label
                  htmlFor="constituency"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Constituency:
                </label>
                <select
                  id="constituency"
                  name="constituency"
                  value={formData.constituency}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""> Constituency</option>
                  <option value="Constituency 1">Constituency 1</option>
                  <option value="Constituency 2">Constituency 2</option>
                  <option value="Constituency 3">Constituency 3</option>
                </select>

                {/* District */}
                <label
                  htmlFor="district"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  District:
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""> District</option>
                  <option value="District 1">District 1</option>
                  <option value="District 2">District 2</option>
                  <option value="District 3">District 3</option>
                </select>

                {/* Panchayath */}
                <label
                  htmlFor="panchayath"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Panchayath:
                </label>
                <select
                  id="panchayath"
                  name="panchayath"
                  value={formData.panchayath}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""> Panchayath</option>
                  <option value="Panchayath 1">Panchayath 1</option>
                  <option value="Panchayath 2">Panchayath 2</option>
                  <option value="Panchayath 3">Panchayath 3</option>
                </select>

                {/* Municipality */}
                <label
                  htmlFor="municipality"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Municipality:
                </label>
                <select
                  id="municipality"
                  name="municipality"
                  value={formData.municipality}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""> Municipality</option>
                  <option value="Municipality 1">Municipality 1</option>
                  <option value="Municipality 2">Municipality 2</option>
                  <option value="Municipality 3">Municipality 3</option>
                </select>

                {/* Corporation */}
                <label
                  htmlFor="corporation"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Corporation:
                </label>
                <select
                  id="corporation"
                  name="corporation"
                  value={formData.corporation}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border text-sm rounded-xl w-full sm:w-72 py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""> Corporation</option>
                  <option value="Corporation 1">Corporation 1</option>
                  <option value="Corporation 2">Corporation 2</option>
                  <option value="Corporation 3">Corporation 3</option>
                </select>

                {/* Submit button */}
                <div className="flex justify-center mt-7  w-full">
                  <button
                    type="submit"
                    className="bg-blue-500 py-2 rounde w-full hover:bg-blue-700 text-white font-bold  px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-center text-sm">
              if you have already a account Please:
              <span className="text-red-500">Login</span>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
