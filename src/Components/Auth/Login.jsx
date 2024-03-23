import React, { useState } from "react";
import axiosInstance from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axiosInstance.post("api/user/login", formData);

      const jwtToken = res.data.token;
      localStorage.setItem("jwtToken", jwtToken);

      navigate("/home");
    } catch (error) {
      if (
        error.response &&
        error.response.data.message === "Invalid credentials."
      ) {
        toast.error("Invalid email or password.");
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl font-bold mb-5">Login</h1>
        <div className="flex justify-center   items-center ">
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[400px] bg-gray-400 shadow-md rounded mx-5 px-6  pt-6 pb-8 mb-4"
          >
            {/* Email */}
            <label
              htmlFor="email"
              className="block text-center  text-gray-700 text-sm font-bold "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border mb-2 text-sm rounded-xl w-full  py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="block text-center  text-gray-700 text-sm font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="shadow appearance-none border text-sm rounded-xl  mb-2 w-full  py-3 text-center px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            {/* Submit button */}
            <div className="flex justify-center mt-7  w-full">
              <button
                type="submit"
                className="Hover:bg-blue-500 bg-white text-black py-2 rounde w-60 hover:bg-blue-700 hover:text-white font-bold  px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <h1 className="text-center text-sm mt-3">
              Don't have an account?
              <Link to={"/"}>
                {" "}
                <span className="text-red-500">Sign Up</span>
              </Link>
            </h1>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
